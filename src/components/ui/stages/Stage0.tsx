import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Stage0() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-animate="title"]', {
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from('[data-animate="subtitle"]', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      });
    },
    { scope: container }
  );

  return (

    <div ref={container}
      className="absolute left-[10%] top-1/2"
    >

      <h1 data-animate="title" className="text-8xl font-bold">
        Donut
      </h1>

      <p data-animate="subtitle" className="mt-6 text-xl">
        Uma experiência 3D.
      </p>

    </div>
  );
}