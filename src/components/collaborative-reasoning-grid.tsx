"use client";

import { useEffect, useState } from "react";

const icons = [
	{
		id: "discover",
		position: { x: 0, y: 0 },
		src: "/discover.svg",
	},
	{
		id: "execute",
		position: { x: 1, y: 0 },
		src: "/execute.svg",
	},
	{
		id: "link",
		position: { x: 0, y: 1 },
		src: "/link.svg",
	},
	{
		id: "research",
		position: { x: 1, y: 1 },
		src: "/research.svg",
	},
];

const connections = [
	{ from: 0, to: 1 },
	{ from: 1, to: 3 },
	{ from: 3, to: 2 },
	{ from: 2, to: 0 },
	{ from: 0, to: 3 },
	{ from: 1, to: 2 },
];

export default function CollaborativeReasoningGrid() {
	const [activeConnection, setActiveConnection] = useState<number | null>(null);

	useEffect(() => {
		let connectionIndex = 0;
		const interval = setInterval(() => {
			setActiveConnection(connectionIndex);
			connectionIndex = (connectionIndex + 1) % connections.length;
		}, 1500);

		return () => clearInterval(interval);
	}, []);

	const getLineCoordinates = (connection: { from: number; to: number }) => {
		const fromIcon = icons[connection.from];
		const toIcon = icons[connection.to];
		
		const x1 = fromIcon.position.x * 100 + 50;
		const y1 = fromIcon.position.y * 100 + 50;
		const x2 = toIcon.position.x * 100 + 50;
		const y2 = toIcon.position.y * 100 + 50;
		
		return { x1, y1, x2, y2 };
	};

	return (
		<div className="relative w-full h-full min-h-[200px]">
			<svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 200 200"
				preserveAspectRatio="xMidYMid meet"
			>
				{connections.map((connection, index) => {
					const coords = getLineCoordinates(connection);
					const isActive = activeConnection === index;
					
					return (
						<g key={index}>
							{isActive && (
								<>
									<line
										{...coords}
										stroke="hsl(var(--accent))"
										strokeWidth="0.5"
										opacity={0.2}
									/>
									<circle
										r="4"
										fill="hsl(var(--accent))"
										opacity={0.8}
									>
										<animateMotion
											dur="1.5s"
											repeatCount="1"
											path={`M${coords.x1},${coords.y1} L${coords.x2},${coords.y2}`}
										/>
									</circle>
								</>
							)}
						</g>
					);
				})}
			</svg>
			
			<div className="relative grid grid-cols-2 gap-12 p-4 h-full">
				{icons.map((icon, index) => (
					<div
						key={icon.id}
						className="flex items-center justify-center"
					>
						<div className="relative group">
							<div className="absolute -inset-2 bg-accent/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<img
								src={icon.src}
								alt={icon.id}
								className="w-16 h-12 relative z-10 transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}