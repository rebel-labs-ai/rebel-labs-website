import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
	title: "404 - Page Not Found",
	description: "The page you are looking for could not be found.",
	robots: "noindex, nofollow",
}

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-md text-center">
				<div className="mb-8">
					<h1 className="text-9xl font-black text-primary-blue">404</h1>
				</div>
				<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
					Page Not Found
				</h2>
				<p className="mb-8 text-lg text-muted-foreground">
					Sorry, we couldn't find the page you're looking for. The page might
					have been moved, deleted, or the URL might be incorrect.
				</p>
				<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Button asChild size="lg">
						<Link href="/">Return to Homepage</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/contact">Contact Support</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
