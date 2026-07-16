import Stage0 from "./stages/Stage0";
import Stage1 from "./stages/Stage1";
import Stage2 from "./stages/Stage2";

const stages = [
  Stage0,
  Stage1,
  Stage2
];

export default function StageRenderer({ stage }: { stage: number }) {
  const Component = stages[stage];

  return <Component />;
}