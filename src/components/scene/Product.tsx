import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Product({ onReady }: { onReady: () => void }) {
  const { scene } = useGLTF("/models/Donut.glb");
  useEffect(onReady, [onReady]);
  return <primitive object={scene} />;
}

useGLTF.preload("/models/Donut.glb");
