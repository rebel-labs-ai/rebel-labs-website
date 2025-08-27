import { Metadata } from "next"
import { LabPageClient } from "./lab-page-client"

export const metadata: Metadata = {
	title: "The Workforce Lab - Forge Your Unfair Advantage",
	description:
		"Deploy a mission-specific Digital Workforce for your most complex revenue operations. The Lab exists to answer the question: What if you could build an autonomous system for your unique business challenge?",
}

export default function LabPage() {
	return <LabPageClient />
}
