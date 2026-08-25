export function SystemsMap() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1A4FA0" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0ABFBC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1A4FA0" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="glow">
            <stop offset="0%" stopColor="#0ABFBC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0ABFBC" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          ["20 30", "50 55", "0.4s"],
          ["80 25", "50 55", "0.52s"],
          ["50 55", "22 82", "0.64s"],
          ["50 55", "82 80", "0.76s"],
          ["22 82", "82 80", "0.88s"],
          ["20 30", "80 25", "1s"],
        ].map(([from, to, delay]) => {
          const [x1, y1] = from.split(" ");
          const [x2, y2] = to.split(" ");
          return (
            <line
              key={`${from}-${to}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGrad)"
              strokeWidth="0.4"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray={100}
              style={{ animation: `0.9s ease-out ${delay} 1 normal both running line-draw` }}
            />
          );
        })}
        {[
          { path: "M 20 30 L 50 55", duration: "3.05s", delay: "1.2s" },
          { path: "M 80 25 L 50 55", duration: "2.43s", delay: "1.55s" },
          { path: "M 50 55 L 22 82", duration: "2.90s", delay: "1.9s" },
          { path: "M 50 55 L 82 80", duration: "2.61s", delay: "2.25s" },
          { path: "M 22 82 L 82 80", duration: "2.03s", delay: "2.6s" },
          { path: "M 20 30 L 80 25", duration: "2.21s", delay: "2.95s" },
        ].map((packet) => (
          <circle
            key={packet.path}
            r="0.9"
            fill="#0ABFBC"
            style={{
              offsetPath: `path("${packet.path}")`,
              animation: `${packet.duration} linear ${packet.delay} infinite normal none running packet-flow`,
              filter: "drop-shadow(rgb(10,191,188) 0px 0px 1.2px)",
            }}
          />
        ))}
        {[
          { x: 20, y: 30, delay: "0s", glow: "0s" },
          { x: 80, y: 25, delay: "0.1s", glow: "0.3s" },
          { x: 50, y: 55, delay: "0.2s", glow: "0.6s" },
          { x: 22, y: 82, delay: "0.3s", glow: "0.9s" },
          { x: 82, y: 80, delay: "0.4s", glow: "1.2s" },
        ].map((node) => (
          <g
            key={`${node.x}-${node.y}`}
            style={{
              transformOrigin: `${node.x}px ${node.y}px`,
              animation: `0.4s ease-out ${node.delay} 1 normal both running node-appear`,
            }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="url(#glow)"
              style={{
                transformOrigin: `${node.x}px ${node.y}px`,
                animation: `glow-pulse 3s ease-in-out ${node.glow} infinite`,
              }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="1.8"
              fill="#0ABFBC"
              style={{
                transformOrigin: `${node.x}px ${node.y}px`,
                animation: `node-pulse 2.8s ease-in-out ${node.glow} infinite`,
              }}
            />
            <circle cx={node.x} cy={node.y} r="0.9" fill="#F7F9FC" />
          </g>
        ))}
      </svg>
      {(
        [
          ["MOBILE", "20%", "30%", "0.3s"],
          ["WEB", "80%", "25%", "0.4s"],
          ["API", "50%", "55%", "0.5s"],
          ["AI", "22%", "82%", "0.6s"],
          ["DATA", "82%", "80%", "0.7s"],
        ] as const
      ).map(([label, left, top, delay]) => (
        <div
          key={label}
          className="font-mono-brand absolute text-[11px] font-medium tracking-[0.15em]"
          style={{
            left,
            top,
            color: "rgb(10,191,188)",
            animation: `0.5s ease-out ${delay} 1 normal both running system-label-fade-up`,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
