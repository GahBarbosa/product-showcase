import { useGLTF } from "@react-three/drei";

export default function Product() {
  const { scene } = useGLTF("/models/Donut.glb");
  return <primitive object={scene} />;
}

useGLTF.preload("/models/Donut.glb");