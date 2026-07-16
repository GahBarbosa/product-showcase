import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Product from "./Product";
import { Center } from "@react-three/drei";
import CameraRig from "./CameraRig";



export default function Scene({ cameraRef }: { cameraRef: any }) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{
          position: [1, 1, 1],
          // position: [0.6761792967801287, 0.7816087476259708, 0.08559843144657173],
          fov: 10,
        }}
      >
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <CameraRig ref={cameraRef} />

        <Center>
          <Product />
        </Center>

        <OrbitControls
        // onChange={(e) => {
        //   const camera = e.target.object;

        //   console.log(
        //     camera.position.x,
        //     camera.position.y,
        //     camera.position.z
        //   );

        //   console.log(
        //     e.target.target
        //   );
        // }}
        />
      </Canvas>
    </div>
  );
}
