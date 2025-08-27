import { Metadata } from "next"
import { MissionContent } from "@/components/mission/mission-content"

export const metadata: Metadata = {
	title: "Our Mission",
	description:
		"Learn about Novosapien's mission to deploy digital workforces that transform businesses and scale revenue through AI-powered automation.",
}

export default function MissionPage() {
	return <MissionContent />
}
