import { Button } from "@/components/ui/button"

export function Navigation() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50">
			<div className="max-w-6xl mx-auto px-6 py-4">
				<div className="flex items-center justify-center">
					{/* Navigation Links with Logo */}
					<div className=" backdrop-blur-sm rounded-lg p-1 flex space-x-1 border border-[#A1BCD1] items-center">
						<div className="flex items-center space-x-2 px-3">
							<img src="/logo.svg" alt="Novosapien Logo" className="w-6 h-6" />
							<span className="text-lg font-reddit-sans lowercase font-medium">
								<span className="text-[#A1BCD1]">novo</span>
								<span className="text-primary-blue">sapien</span>
							</span>
						</div>
						<div className="w-px h-6 bg-[#A1BCD1]/30 mx-2"></div>
						<Button
							variant="outline"
							className="rounded-md px-4 py-2 bg-white text-primary-blue border-0 hover:bg-gray-100 transition-all duration-200 font-medium"
						>
							Home
						</Button>
						<Button
							variant="ghost"
							className="rounded-md px-4 py-2 text-primary-blue hover:bg-white/20 hover:text-primary-blue transition-all duration-200 font-medium"
						>
							Mission
						</Button>
						<Button
							variant="ghost"
							className="rounded-md px-4 py-2 text-primary-blue hover:bg-white/20 hover:text-primary-blue transition-all duration-200 font-medium"
						>
							Workforces
						</Button>
						<Button
							variant="ghost"
							className="rounded-md px-4 py-2 text-primary-blue hover:bg-white/20 hover:text-primary-blue transition-all duration-200 font-medium"
						>
							Speak to us
						</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}
