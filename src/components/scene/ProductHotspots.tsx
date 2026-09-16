import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Group } from "three";
import { Vector3 } from "three";
import { usePresentationStore } from "../../app/presentationStore";
import { hotspots, type Hotspot } from "../../data/hotspots";

export default function ProductHotspots({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return <>{hotspots.map((hotspot) => <HotspotMarker key={hotspot.id} hotspot={hotspot} />)}</>;
}

function HotspotMarker({ hotspot }: { hotspot: Hotspot }) {
  const group = useRef<Group>(null);
  const camera = useThree((state) => state.camera);
  const openHotspot = usePresentationStore((state) => state.openHotspot);
  const [isFacingCamera, setIsFacingCamera] = useState(false);

  useFrame(() => {
    if (!group.current) return;
    const worldPosition = group.current.getWorldPosition(new Vector3());
    const worldNormal = new Vector3(...hotspot.normal).transformDirection(group.current.matrixWorld);
    const directionToCamera = camera.position.clone().sub(worldPosition).normalize();
    const nextVisibility = worldNormal.dot(directionToCamera) > 0.18;
    setIsFacingCamera((current) => current === nextVisibility ? current : nextVisibility);
  });

  return <group ref={group} position={hotspot.position} visible={isFacingCamera}>
    <Html center occlude>
      <button className="hotspot" onPointerDown={(event) => event.stopPropagation()} onClick={() => openHotspot(hotspot.id)} aria-label={`Ver ${hotspot.title}`}><span>{hotspot.label}</span></button>
    </Html>
  </group>;
}
