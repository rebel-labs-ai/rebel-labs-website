import type { Metadata } from "next"
import { ContactRedirect } from "./contact-redirect"

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Novosapien to learn how digital workforces can transform your business. Schedule a consultation to discuss your automation needs.",
}

export default function ContactPage() {
	return <ContactRedirect />
}
