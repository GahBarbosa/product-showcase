import { useRef, useState } from "react";

import Scene from "./components/scene/Scene";
import { showcaseStages } from "./components/scene/showcaseStages";
import StageRenderer from "./components/ui/StageRenderer";

export default function App() {
  const cameraRef = useRef<any>(null);

  const [stage, setStage] = useState(0);

  const nextStage = () => {
    if (stage >= showcaseStages.length - 1) return;

    const next = stage + 1;

    cameraRef.current?.goTo(next);
    setStage(next);
  };

  const previousStage = () => {
    if (stage <= 0) return;

    const previous = stage - 1;

    cameraRef.current?.goTo(previous);
    setStage(previous);
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-violet-400 text-white">
      <Scene cameraRef={cameraRef} />

      <StageRenderer stage={stage} />

      {/* Área esquerda */}
      <div
        className="absolute inset-y-0 left-0 z-20 w-1/2 cursor-w-resize"
        onClick={previousStage}
      />

      {/* Área direita */}
      <div
        className="absolute inset-y-0 right-0 z-20 w-1/2 cursor-e-resize"
        onClick={nextStage}
      />

      {/* Indicadores */}
      {stage > 0 && (
        <div className="pointer-events-none absolute left-6 top-1/2 z-30 -translate-y-1/2 text-4xl text-white/70 animate-arrow-left">
          &lt;
        </div>
      )}

      {stage < showcaseStages.length - 1 && (
        <div className="pointer-events-none absolute right-6 top-1/2 z-30 -translate-y-1/2 text-4xl text-white/70 animate-arrow-right">
          &gt;
        </div>
      )}
    </main>
  );
}