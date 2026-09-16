import { useEffect, useRef } from "react";
import type { CameraControllerHandle } from "./components/scene/CameraRig";
import Scene from "./components/scene/Scene";
import { tourSteps } from "./data/tourSteps";
import PresentationOverlay from "./components/ui/PresentationOverlay";
import MusicControl from "./components/ui/MusicControl";
import { usePresentationStore } from "./app/presentationStore";

export default function App() {
  const cameraRef = useRef<CameraControllerHandle>(null);
  const phase = usePresentationStore((state) => state.phase);
  const tourStep = usePresentationStore((state) => state.tourStep);
  const activeHotspotId = usePresentationStore((state) => state.activeHotspotId);
  const advanceTour = usePresentationStore((state) => state.advanceTour);

  useEffect(() => {
    if (phase !== "tour") return;
    cameraRef.current?.moveTo(tourSteps[tourStep].camera);
    const timer = window.setTimeout(advanceTour, tourSteps[tourStep].duration);
    return () => window.clearTimeout(timer);
  }, [advanceTour, phase, tourStep]);

  useEffect(() => {
    if (phase === "hotspot" && activeHotspotId) cameraRef.current?.focusHotspot(activeHotspotId);
  }, [activeHotspotId, phase]);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#09090c] text-white">
      <Scene cameraRef={cameraRef} phase={phase} />
      <PresentationOverlay />
      <MusicControl />
    </main>
  );
}
