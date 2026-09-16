interface Props {
  x: number;
  y: number;
  width: number;
  title: string;
  description: string;
}

export default function Callout({
  x,
  y,
  width,
  title,
  description,
}: Props) {
  return (
    <div
      className="absolute"
      style={{
        left: x > 0 ? x : x - width,
        top: y + 24,
        width,
      }}
    >
      <h2 className="text-5xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-lg text-neutral-300">
        {description}
      </p>
    </div>
  );
}