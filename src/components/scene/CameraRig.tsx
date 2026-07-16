import { useThree } from "@react-three/fiber";
import { forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import { showcaseStages } from "./showcaseStages";

const CameraRig = forwardRef((_, ref) => {

  const { camera } = useThree();


  useImperativeHandle(ref, () => ({

    goTo(index: number) {

      const point = showcaseStages[index];

      if (!point) return;

      gsap.to(camera.position, {
        x: point.camera.position[0],
        y: point.camera.position[1],
        z: point.camera.position[2],
        duration: 2,
        ease: "power3.inOut"
      });

    }

  }));


  return null;
});


export default CameraRig;