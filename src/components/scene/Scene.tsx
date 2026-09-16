import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import type { RefObject } from "react";
import type { PresentationPhase } from "../../app/presentationStore";
import type { CameraControllerHandle } from "./CameraRig";
import CameraRig from "./CameraRig";
import Product from "./Product";
import ProductHotspots from "./ProductHotspots";
import { usePresentationStore } from "../../app/presentationStore";

export default function Scene({ cameraRef, phase }: { cameraRef: RefObject<CameraControllerHandle | null>; phase: PresentationPhase }) {
  const finishLoading = usePresentationStore((state) => state.finishLoading);
  return <div className="fixed inset-0 z-0"><Canvas camera={{ position: [1, 0.75, 1], fov: 32 }} dpr={[1, 2]}>
    <color attach="background" args={["#09090c"]} />
    <ambientLight intensity={1.8} />
    <directionalLight position={[5, 5, 5]} intensity={2.4} />
    <directionalLight position={[-4, 1, -3]} intensity={1.05} color="#a99bb8" />
    <CameraRig ref={cameraRef} phase={phase} />
    <Suspense fallback={null}><Center><Product onReady={finishLoading} /><ProductHotspots visible={phase === "explore"} /></Center></Suspense>
  </Canvas></div>;
}
