import { Brain, Search } from "lucide-react"

export function ForgeMockup() {
	return (
		<div className="p-8 h-full bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
			
			{/* Header */}
			<div className="relative flex items-center justify-between mb-6">
				<div className="flex items-center gap-3">
					<div className="flex gap-1">
						<div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
						<div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-75" />
						<div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-150" />
					</div>
					<h3 className="text-xl font-bold text-foreground">
						The Forge
					</h3>
				</div>
				<span className="text-xs text-muted-foreground">Sprint 4 of 5</span>
			</div>

			{/* Main Content Grid */}
			<div className="relative space-y-4">
				{/* Progress Bar */}
				<div className="relative h-2 bg-accent/10 rounded-full overflow-hidden">
					<div className="absolute inset-y-0 left-0 w-[80%] bg-gradient-to-r from-accent to-blue-500 rounded-full animate-pulse" />
					<div className="absolute inset-y-0 left-0 w-[80%] bg-gradient-to-r from-accent to-blue-500 rounded-full opacity-50 blur-sm" />
				</div>

				{/* Active Agents Grid */}
				<div className="grid grid-cols-2 gap-3">
					{/* Quoting Engine Agent */}
					<div className="relative group">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
						<div className="relative bg-background/80 backdrop-blur rounded-lg p-4 border border-accent/20 dark:border-0">
							<div className="flex items-start justify-between mb-2">
								<div className="flex items-center gap-2">
									<Brain className="w-4 h-4 text-blue-500" />
									<span className="text-xs font-bold text-foreground">Quoting Agent</span>
								</div>
								<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
							</div>
							<div className="space-y-1">
								<div className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">Logic Built</span>
									<span className="text-xs font-medium text-blue-500">100%</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">Testing</span>
									<span className="text-xs font-medium text-yellow-500">75%</span>
								</div>
							</div>
						</div>
					</div>

					{/* Compliance Agent */}
					<div className="relative group">
						<div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
						<div className="relative bg-background/80 backdrop-blur rounded-lg p-4 border border-accent/20 dark:border-0">
							<div className="flex items-start justify-between mb-2">
								<div className="flex items-center gap-2">
									<Search className="w-4 h-4 text-green-500" />
									<span className="text-xs font-bold text-foreground">Compliance</span>
								</div>
								<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
							</div>
							<div className="space-y-1">
								<div className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">Rules Set</span>
									<span className="text-xs font-medium text-green-500">100%</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">Integration</span>
									<span className="text-xs font-medium text-green-500">100%</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Live Feed */}
				<div className="bg-black/20 rounded-lg p-4 border border-accent/20 dark:border-0">
					<div className="flex items-center gap-2 mb-3">
						<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
						<span className="text-xs font-bold text-foreground uppercase tracking-wider">Live Build Feed</span>
					</div>
					<div className="space-y-2 font-mono">
						<div className="text-xs text-green-400">
							[14:32] ✓ Quote validation module deployed
						</div>
						<div className="text-xs text-blue-400">
							[14:35] → Testing discount matrix logic...
						</div>
						<div className="text-xs text-yellow-400">
							[14:37] ⚠ Client feedback: "Add manager approval"
						</div>
						<div className="text-xs text-muted-foreground opacity-50">
							[14:38] → Updating workflow...
						</div>
					</div>
				</div>

				{/* Sprint Metrics */}
				<div className="grid grid-cols-3 gap-2">
					<div className="text-center p-2 bg-accent/10 rounded-lg">
						<span className="text-xs text-muted-foreground block">Velocity</span>
						<span className="text-sm font-bold text-accent">147%</span>
					</div>
					<div className="text-center p-2 bg-accent/10 rounded-lg">
						<span className="text-xs text-muted-foreground block">Quality</span>
						<span className="text-sm font-bold text-green-500">98.5%</span>
					</div>
					<div className="text-center p-2 bg-accent/10 rounded-lg">
						<span className="text-xs text-muted-foreground block">ETA</span>
						<span className="text-sm font-bold text-foreground">2 days</span>
					</div>
				</div>
			</div>
		</div>
	)
}