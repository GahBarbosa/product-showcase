interface Props {
  x: number;
  y: number;
  topWidth: number;
}

export default function Connector({
  x,
  y,
  topWidth,
}: Props) {
  const textStart = x > 0 ? x : x - topWidth;

  const minX = Math.min(0, textStart) - 20;
  const maxX = Math.max(0, x + topWidth) + 20;

  const width = maxX - minX;
  const height = y + 20;

  return (
    <svg
      className="absolute left-0 top-0 overflow-visible pointer-events-none"
      viewBox={`${minX} -20 ${width} ${height + 20}`}
      width={width}
      height={height + 20}
    >
      {/* círculo */}
      <circle
        cx="0"
        cy="0"
        r="8"
        fill="transparent"
        stroke="white"
        strokeWidth="2"
      />

      {/* diagonal */}
      <line
        x1="0"
        y1="0"
        x2={x}
        y2={y}
        stroke="white"
        strokeWidth="2"
      />

      {/* horizontal acima do texto */}
      <line
        x1={textStart}
        y1={y}
        x2={x}
        y2={y}
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}