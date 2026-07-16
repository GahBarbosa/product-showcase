interface Props {
  x: number;
  y: number;
}

export default function Connector({ x, y }: Props) {
  return (
    <svg
      className="absolute left-0 top-0 overflow-visible pointer-events-none"
      width={Math.abs(x)}
      height={Math.abs(y)}
    >
      <line
        x1="0"
        y1="0"
        x2={x}
        y2={y}
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}