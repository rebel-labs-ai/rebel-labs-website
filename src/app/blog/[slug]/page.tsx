import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/sanity/client";
import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  author,
  category,
  publishedAt,
  image,
  "relatedPosts": relatedPosts[]->{
    _id,
    title,
    slug,
    excerpt,
    category
  }
}`;

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
  
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | NovoSapien Blog`,
    description: post.excerpt || `Read ${post.title} on the NovoSapien blog`,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${baseUrl}/blog/${slug}`,
      siteName: "NovoSapien",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [
        {
          url: urlFor(post.image).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: "/og-blog-post.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      site: "@novosapien",
      creator: "@novosapien",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
  };
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  const postImageUrl = post.image
    ? urlFor(post.image).width(1200).height(630).url()
    : null;

  // Schema markup for Article
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${baseUrl}/blog/${slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "NovoSapien",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    image: postImageUrl || `${baseUrl}/og-blog-post.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO: Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50 hidden md:block">
        <ThemeToggle />
      </div>

      {/* SEO: Breadcrumbs (visually hidden) */}
      <div className="sr-only">
        <Breadcrumbs 
          items={[
            { name: "Home", href: "/" }, 
            { name: "Blog", href: "/blog" },
            { name: post.title }
          ]} 
        />
      </div>

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            ← Back to all posts
          </Link>

          <article>
            <header className="mb-8">
              <div className="mb-4">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <span>{post.author}</span>
                <span>•</span>
                <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
              </div>
            </header>

            {postImageUrl && (
              <img
                src={postImageUrl}
                alt={post.image.alt || post.title}
                className="w-full aspect-video object-cover rounded-xl mb-8"
              />
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {Array.isArray(post.body) && <PortableText value={post.body} />}
            </div>

            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                <div className="grid gap-4">
                  {post.relatedPosts.map((relatedPost: any) => (
                    <Link
                      key={relatedPost._id}
                      href={`/blog/${relatedPost.slug.current}`}
                      className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
                    >
                      <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                        {relatedPost.category}
                      </div>
                      <h3 className="font-semibold">{relatedPost.title}</h3>
                      {relatedPost.excerpt && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}