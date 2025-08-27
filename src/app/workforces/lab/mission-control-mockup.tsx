import { Layers, BarChart3 } from "lucide-react"

export function MissionControlMockup() {
	return (
		<div className="p-8 h-full bg-gradient-to-br from-background via-background to-green-500/5 relative overflow-hidden">
			{/* Animated grid background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
					backgroundSize: '20px 20px'
				}} />
			</div>

			{/* Header */}
			<div className="relative flex items-center justify-between mb-6">
				<div className="flex items-center gap-3">
					<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
					<h3 className="text-xl font-bold text-foreground">
						Mission Control
					</h3>
				</div>
				<span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-bold">
					LIVE
				</span>
			</div>

			{/* Main Status Display */}
			<div className="relative space-y-4">
				{/* Primary Status */}
				<div className="relative">
					<div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-teal-500/20 to-blue-500/20 rounded-lg blur-xl" />
					<div className="relative bg-black/40 backdrop-blur rounded-lg p-6 border border-green-500/30">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm font-bold text-foreground uppercase tracking-wider">
								Workforce Status
							</span>
							<div className="flex items-center gap-2">
								<span className="text-2xl font-bold text-green-500">AUTONOMOUS</span>
								<div className="w-4 h-4 bg-green-500 rounded-full animate-ping" />
							</div>
						</div>
						
						{/* Real-time Metrics Grid */}
						<div className="grid grid-cols-3 gap-3">
							<div className="bg-background/50 rounded p-2">
								<span className="text-xs text-muted-foreground block">Agents Active</span>
								<span className="text-lg font-bold text-foreground">24</span>
							</div>
							<div className="bg-background/50 rounded p-2">
								<span className="text-xs text-muted-foreground block">Tasks/Min</span>
								<span className="text-lg font-bold text-foreground">147</span>
							</div>
							<div className="bg-background/50 rounded p-2">
								<span className="text-xs text-muted-foreground block">Success Rate</span>
								<span className="text-lg font-bold text-green-500">99.8%</span>
							</div>
						</div>
					</div>
				</div>

				{/* Integration Status */}
				<div className="grid grid-cols-2 gap-3">
					<div className="bg-background/80 backdrop-blur rounded-lg p-4 border border-accent/20 dark:border-0">
						<div className="flex items-center gap-2 mb-3">
							<Layers className="w-4 h-4 text-blue-500" />
							<span className="text-xs font-bold text-foreground">Integrations</span>
						</div>
						<div className="space-y-2">
							{["Salesforce", "SAP", "Slack", "Email"].map((system, i) => (
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

					<div className="bg-background/80 backdrop-blur rounded-lg p-4 border border-accent/20 dark:border-0">
						<div className="flex items-center gap-2 mb-3">
							<BarChart3 className="w-4 h-4 text-green-500" />
							<span className="text-xs font-bold text-foreground">Performance</span>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-xs text-muted-foreground">Speed</span>
								<div className="flex items-center gap-2">
									<div className="w-16 h-1 bg-accent/20 rounded-full overflow-hidden">
										<div className="w-[67%] h-full bg-green-500 rounded-full" />
									</div>
									<span className="text-xs font-bold text-green-500">-67%</span>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-xs text-muted-foreground">Volume</span>
								<div className="flex items-center gap-2">
									<div className="w-16 h-1 bg-accent/20 rounded-full overflow-hidden">
										<div className="w-full h-full bg-green-500 rounded-full" />
									</div>
									<span className="text-xs font-bold text-green-500">+340%</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Activity Log */}
				<div className="bg-black/30 rounded-lg p-3 border border-accent/20 dark:border-0">
					<div className="flex items-center justify-between mb-2">
						<span className="text-xs font-bold text-foreground uppercase tracking-wider">Activity</span>
						<span className="text-xs text-muted-foreground">Last 60s</span>
					</div>
					<div className="space-y-1 font-mono text-xs">
						<div className="text-green-400 opacity-100">✓ Quote #4821 processed in 1.2s</div>
						<div className="text-blue-400 opacity-80">→ Compliance check initiated</div>
						<div className="text-green-400 opacity-60">✓ Deal approved: $127,400</div>
						<div className="text-muted-foreground opacity-40">→ Syncing to Salesforce...</div>
					</div>
				</div>
			</div>
		</div>
	)
}