import { Brain, Search } from "lucide-react"

export function ForgeMockup() {
	return (
		<div className="p-8 h-full bg-background relative overflow-hidden">
			{/* Grid background */}
			<div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none" style={{ zIndex: 0 }}>
				<div className="absolute inset-0" style={{
					backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
					backgroundSize: '20px 20px'
				}} />
			</div>
			
			{/* Content wrapper */}
			<div className="relative" style={{ zIndex: 1 }}>
			{/* Header */}
			<div className="relative flex items-center justify-between mb-6">
				<div className="flex items-center gap-3">
					<div className="flex gap-1">
						<div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
						<div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-75" />
						<div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-150" />
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
				<div className="relative h-1.5 bg-muted/30 rounded-full overflow-hidden">
					<div className="absolute inset-y-0 left-0 w-[80%] bg-accent rounded-full" />
				</div>

				{/* Active Agents Grid */}
				<div className="grid grid-cols-2 gap-3">
					{/* Quoting Engine Agent */}
					<div className="rounded-lg p-4 bg-gray-100 dark:[background-color:hsl(221,31%,23%)]">
						<div className="flex items-start justify-between mb-2">
							<div className="flex items-center gap-2">
								<Brain className="w-4 h-4 text-muted-foreground" />
								<span className="text-xs font-bold text-foreground">Quoting Agent</span>
							</div>
							<div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
						</div>
						<div className="space-y-1">
							<div className="flex items-center justify-between">
								<span className="text-xs text-muted-foreground">Logic Built</span>
								<span className="text-xs font-medium text-foreground">100%</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-xs text-muted-foreground">Testing</span>
								<span className="text-xs font-medium text-foreground">75%</span>
							</div>
						</div>
					</div>

					{/* Compliance Agent */}
					<div className="rounded-lg p-4 bg-gray-100 dark:[background-color:hsl(221,31%,23%)]">
						<div className="flex items-start justify-between mb-2">
							<div className="flex items-center gap-2">
								<Search className="w-4 h-4 text-muted-foreground" />
								<span className="text-xs font-bold text-foreground">Compliance</span>
							</div>
							<div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
						</div>
						<div className="space-y-1">
							<div className="flex items-center justify-between">
								<span className="text-xs text-muted-foreground">Rules Set</span>
								<span className="text-xs font-medium text-foreground">100%</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-xs text-muted-foreground">Integration</span>
								<span className="text-xs font-medium text-foreground">100%</span>
							</div>
						</div>
					</div>
				</div>

				{/* Live Feed */}
				<div className="rounded-lg p-4 bg-gray-50 dark:[background-color:hsl(221,31%,23%)]">
					<div className="flex items-center gap-2 mb-3">
						<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
						<span className="text-xs font-bold text-foreground uppercase tracking-wider">Live Build Feed</span>
					</div>
					<div className="space-y-2 font-mono">
						<div className="text-xs text-green-400">
							[14:32] ✓ Quote validation module deployed
						</div>
						<div className="text-xs text-foreground/70">
							[14:35] → Testing discount matrix logic...
						</div>
						<div className="text-xs text-yellow-500/80">
							[14:37] ⚠ Client feedback: "Add manager approval"
						</div>
						<div className="text-xs text-muted-foreground/60">
							[14:38] → Updating workflow...
						</div>
					</div>
				</div>

				{/* Sprint Metrics */}
				<div className="grid grid-cols-3 gap-2">
					<div className="text-center p-2 rounded-lg bg-gray-50 dark:[background-color:hsl(216,23%,36%)]">
						<span className="text-xs text-muted-foreground block">Velocity</span>
						<span className="text-sm font-bold text-foreground">147%</span>
					</div>
					<div className="text-center p-2 rounded-lg bg-gray-50 dark:[background-color:hsl(216,23%,36%)]">
						<span className="text-xs text-muted-foreground block">Quality</span>
						<span className="text-sm font-bold text-accent">98.5%</span>
					</div>
					<div className="text-center p-2 rounded-lg bg-gray-50 dark:[background-color:hsl(216,23%,36%)]">
						<span className="text-xs text-muted-foreground block">ETA</span>
						<span className="text-sm font-bold text-foreground">2 days</span>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}