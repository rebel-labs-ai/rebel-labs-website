import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50">
			<div className="max-w-6xl mx-auto px-6 py-4">
				<div className="flex items-center justify-center">
					{/* Navigation Links with Logo */}
					<div className="backdrop-blur-sm rounded-lg p-1 flex space-x-1 border border-accent bg-background/80 dark:bg-card/80 items-center">
						<div className="flex items-center space-x-2 px-3">
							<Image
								src="/logo.svg"
								alt="Novosapien Logo"
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<span className="text-lg font-reddit-sans lowercase font-medium">
								<span className="text-accent">novo</span>
								<span className="text-foreground">sapien</span>
							</span>
						</div>
						<div className="w-px h-6 bg-border mx-2"></div>
						<Button
							variant="outline"
							className="rounded-md px-4 py-1.5 bg-white/70 dark:bg-accent/10 text-foreground dark:text-white border border-accent dark:border-accent/30 hover:bg-accent/30 dark:hover:bg-accent/20 hover:text-foreground dark:hover:text-white hover:py-1.5 transition-all duration-200 font-medium"
						>
							Home
						</Button>
						<Button
							variant="ghost"
							className="rounded-md px-4 py-2 text-foreground dark:text-white hover:bg-white/50 dark:hover:bg-accent/10 hover:text-foreground dark:hover:text-white hover:py-1.5 transition-all duration-200 font-medium"
						>
							Mission
						</Button>
						<Button
							variant="ghost"
							className="rounded-md px-4 py-2 text-foreground dark:text-white hover:bg-white/50 dark:hover:bg-accent/10 hover:text-foreground dark:hover:text-white hover:py-1.5 transition-all duration-200 font-medium"
						>
							Workforces
						</Button>
						<Button
							variant="ghost"
							className="rounded-md px-4 py-2 text-foreground dark:text-white hover:bg-white/50 dark:hover:bg-accent/10 hover:text-foreground dark:hover:text-white hover:py-1.5 transition-all duration-200 font-medium"
						>
							Speak to us
						</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}
