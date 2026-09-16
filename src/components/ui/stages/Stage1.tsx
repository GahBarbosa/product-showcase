import HighlightCallout from "../blocks/HighlightCallout/HighlightCallout";

export default function Stage1() {
  return (
    <HighlightCallout
      origin={{
        x: "60%",
        y: "40%"
      }}

      text={{
        x: 300,
        y: 100
      }}

      width={300}

      title="Chocolate Belga"

      description="Cobertura artesanal feita com ingredientes selecionados."
    />
  );
}