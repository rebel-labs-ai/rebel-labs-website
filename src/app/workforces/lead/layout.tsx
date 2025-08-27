import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Inbound Sales Workforce",
	description:
		"Deploy AI-powered inbound sales workforces to automate lead generation, qualification, and conversion. Scale your sales operations with intelligent automation.",
}

export default function LeadWorkforceLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
