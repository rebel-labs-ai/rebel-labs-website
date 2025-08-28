export default function Loading() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-4">
				<div className="relative h-20 w-20">
					<div className="absolute inset-0 animate-spin rounded-full border-4 border-primary-blue/20"></div>
					<div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary-blue"></div>
				</div>
				<p className="text-lg font-medium text-muted-foreground animate-pulse">
					Loading...
				</p>
			</div>
		</div>
	)
}
