import Callout from "./Callout";
import Connector from "./Connector";

interface Props {
  origin: {
    x: string;
    y: string;
  };

  text: {
    x: number;
    y: number;
  };

  width?: number;

  title: string;
  description: string;
}

export default function HighlightCallout({
  origin,
  text,
  width = 320,
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
      <Connector
        x={text.x}
        y={text.y}
        topWidth={width}
      />

      <Callout
        x={text.x}
        y={text.y}
        width={width}
        title={title}
        description={description}
      />
    </div>
  );
}