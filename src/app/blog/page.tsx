import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai";

export const metadata: Metadata = {
	title: "Blog | NovoSapien",
	description:
		"Insights on AI workforces, automation strategies, and digital transformation from NovoSapien.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${baseUrl}/blog`,
		siteName: "NovoSapien",
		title: "Blog | NovoSapien",
		description:
			"Insights on AI workforces, automation strategies, and digital transformation from NovoSapien.",
		images: [
			{
				url: "/og-blog.jpg",
				width: 1200,
				height: 630,
				alt: "NovoSapien Blog",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "Blog | NovoSapien",
		description:
			"Insights on AI workforces and automation strategies.",
		images: ["/og-blog.jpg"],
	},
	alternates: {
		canonical: `${baseUrl}/blog`,
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  excerpt,
  author,
  category,
  publishedAt,
  image
}`;

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  // Enhanced Schema markup for Blog
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${baseUrl}/blog#blog`,
    url: `${baseUrl}/blog`,
    name: "NovoSapien Blog",
    description:
      "Insights on AI workforces, automation strategies, and digital transformation.",
    dateModified: new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "NovoSapien",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
        width: 600,
        height: 60,
      },
      sameAs: [
        "https://twitter.com/novosapien",
        "https://linkedin.com/company/novosapien",
      ],
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${baseUrl}/blog/${post.slug.current}`,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author,
      },
      description: post.excerpt,
      articleSection: post.category,
    })),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${baseUrl}/blog`,
        },
      ],
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

      {/* SEO: Breadcrumbs */}
      <div className="pt-24 sm:pt-32 px-4">
        <div className="max-w-6xl mx-auto mb-8">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
        </div>
      </div>

      {/* Main Content */}
      <main className="pb-16 sm:pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Latest insights on AI workforces and automation
              {posts.length === 0 && (
                <>
                  {" "}• 
                  <Link href="/blog-preview" className="ml-2 underline hover:text-accent">
                    View preview posts
                  </Link>
                </>
              )}
            </p>
          </div>
          
          {posts.length === 0 ? (
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <p className="text-blue-800 dark:text-blue-200">
                Setting up our new content system. Meanwhile, visit our{" "}
                <Link href="/blog-preview" className="underline font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                  blog preview
                </Link>{" "}
                for our latest articles.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900"
                >
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {post.category}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug.current}`}>
                    <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  {post.excerpt && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  )}
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    <p>{post.author}</p>
                    <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}