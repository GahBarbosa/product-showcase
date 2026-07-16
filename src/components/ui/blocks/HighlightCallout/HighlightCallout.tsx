import Circle from "./Circle";
import Connector from "./Connector";
import Callout from "./Callout";

interface Props {
  origin: {
    x: string;
    y: string;
  };

  text: {
    x: number;
    y: number;
  };

  title: string;
  description: string;
}

export default function HighlightCallout({
  origin,
  text,
  title,
  description,
}: Props) {
  return (
    <div
      className="absolute"
      style={{
        left: origin.x,
        top: origin.y,
      }}
    >
      <Circle />

      <Connector
        x={text.x}
        y={text.y}
      />

      <Callout
        x={text.x}
        y={text.y}
        title={title}
        description={description}
      />
    </div>
  );
}