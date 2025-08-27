import { Layers, BarChart3 } from "lucide-react"

export function MissionControlMockup() {
	return (
		<div className="p-8 h-full bg-background relative overflow-hidden">
			{/* Grid background - properly layered behind */}
			<div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none" style={{ zIndex: 0 }}>
				<div className="absolute inset-0" style={{
					backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
					backgroundSize: '20px 20px'
				}} />
			</div>

			{/* Content wrapper */}
			<div className="relative" style={{ zIndex: 1 }}>
			{/* Header */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-3">
					<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
					<h3 className="text-xl font-bold text-foreground">
						Mission Control
					</h3>
				</div>
				<span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-bold">
					LIVE
				</span>
			</div>

			{/* Main Status Display */}
			<div className="space-y-4">
				{/* Primary Status - solid background to block grid */}
				<div className="rounded-lg p-6 bg-gray-50 dark:[background-color:hsl(216,23%,36%)]">
					<div className="flex items-center justify-between mb-4">
						<span className="text-sm font-bold text-foreground uppercase tracking-wider">
							Workforce Status
						</span>
						<div className="flex items-center gap-2">
							<span className="text-xl font-bold text-foreground">AUTONOMOUS</span>
							<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
						</div>
					</div>
					
					{/* Real-time Metrics Grid */}
					<div className="grid grid-cols-3 gap-3">
						<div className="bg-background/80 dark:bg-background/50 rounded p-2">
							<span className="text-xs text-muted-foreground block">Agents Active</span>
							<span className="text-lg font-bold text-foreground">24</span>
						</div>
						<div className="bg-background/80 dark:bg-background/50 rounded p-2">
							<span className="text-xs text-muted-foreground block">Tasks/Min</span>
							<span className="text-lg font-bold text-foreground">147</span>
						</div>
						<div className="bg-background/80 dark:bg-background/50 rounded p-2">
							<span className="text-xs text-muted-foreground block">Success Rate</span>
							<span className="text-lg font-bold text-green-500">99.8%</span>
						</div>
					</div>
				</div>

				{/* Integration Status */}
				<div className="grid grid-cols-2 gap-3">
					<div className="rounded-lg p-4 bg-gray-100 dark:[background-color:hsl(221,31%,23%)]">
						<div className="flex items-center gap-2 mb-3">
							<Layers className="w-4 h-4 text-muted-foreground" />
							<span className="text-xs font-bold text-foreground">Integrations</span>
						</div>
						<div className="space-y-2">
							{["Salesforce", "SAP", "Slack", "Email"].map((system) => (
								<div key={system} className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">{system}</span>
									<div className="flex items-center gap-1">
										<div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
										<span className="text-xs text-green-500">Live</span>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-lg p-4 bg-gray-100 dark:[background-color:hsl(221,31%,23%)]">
						<div className="flex items-center gap-2 mb-3">
							<BarChart3 className="w-4 h-4 text-muted-foreground" />
							<span className="text-xs font-bold text-foreground">Performance</span>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-xs text-muted-foreground">Speed</span>
								<div className="flex items-center gap-2">
									<div className="w-16 h-1 bg-muted/30 rounded-full overflow-hidden">
										<div className="w-[67%] h-full bg-accent/50 rounded-full" />
									</div>
									<span className="text-xs font-bold text-foreground">-67%</span>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-xs text-muted-foreground">Volume</span>
								<div className="flex items-center gap-2">
									<div className="w-16 h-1 bg-muted/30 rounded-full overflow-hidden">
										<div className="w-full h-full bg-accent/50 rounded-full" />
									</div>
									<span className="text-xs font-bold text-foreground">+340%</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Activity Log */}
				<div className="rounded-lg p-3 bg-gray-50 dark:[background-color:hsl(221,31%,23%)]">
					<div className="flex items-center justify-between mb-2">
						<span className="text-xs font-bold text-foreground uppercase tracking-wider">Activity</span>
						<span className="text-xs text-muted-foreground">Last 60s</span>
					</div>
					<div className="space-y-1 font-mono text-xs">
						<div className="text-green-400">✓ Quote #4821 processed in 1.2s</div>
						<div className="text-foreground/60">→ Compliance check initiated</div>
						<div className="text-green-400/80">✓ Deal approved: $127,400</div>
						<div className="text-muted-foreground/60">→ Syncing to Salesforce...</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}