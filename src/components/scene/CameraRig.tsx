import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { forwardRef, useImperativeHandle, useRef } from "react";
import type { PresentationPhase } from "../../app/presentationStore";
import { hotspots, type CameraView } from "../../data/hotspots";

export type CameraControllerHandle = { moveTo: (view: CameraView) => void; focusHotspot: (id: string) => void };

const CameraRig = forwardRef<CameraControllerHandle, { phase: PresentationPhase }>(({ phase }, ref) => {
  const { camera } = useThree();
  const controls = useRef<any>(null);
  const moveTo = (view: CameraView) => {
    gsap.killTweensOf([camera.position, controls.current?.target]);
    gsap.to(camera.position, { x: view.position[0], y: view.position[1], z: view.position[2], duration: 1.5, ease: "power3.inOut" });
    if (controls.current) gsap.to(controls.current.target, { x: view.target[0], y: view.target[1], z: view.target[2], duration: 1.5, ease: "power3.inOut", onUpdate: () => controls.current?.update() });
  };
  useImperativeHandle(ref, () => ({ moveTo, focusHotspot: (id) => { const hotspot = hotspots.find((item) => item.id === id); if (hotspot) moveTo(hotspot.camera); } }));
  return <OrbitControls ref={controls} enabled={phase === "explore"} enablePan={false} minDistance={0.65} maxDistance={2.2} minPolarAngle={Math.PI / 4} maxPolarAngle={(Math.PI * 3) / 4} />;
});

export default CameraRig;
