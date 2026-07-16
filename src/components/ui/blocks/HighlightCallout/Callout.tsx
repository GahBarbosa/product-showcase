interface Props {
  x: number;
  y: number;

  title: string;
  description: string;
}

export default function Callout({
  x,
  y,
  title,
  description,
}: Props) {
  return (
    <div
      className="absolute"
      style={{
        left: x,
        top: y,
      }}
    >

      {/* Linha vertical */}
      <div className="mr-6 w-auto h-0.5 bg-white" />

      <h2 className="text-6xl font-bold">
        {title}
      </h2>

      <p className="mt-5 max-w-sm text-xl text-neutral-300">
        {description}
      </p>
    </div>
  );
}