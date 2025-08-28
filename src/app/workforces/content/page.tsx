import { Metadata } from "next"
import { ContentWorkforceClient } from "./content-workforce-client"

export const metadata: Metadata = {
	title: "Content Creation Workforce",
	description:
		"Deploy AI-powered content creation workforces to automate content generation, optimization, and distribution. Scale your content marketing with intelligent automation.",
}

export default function ContentWorkforcePage() {
	return <ContentWorkforceClient />
}
