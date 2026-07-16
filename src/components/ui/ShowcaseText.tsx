import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  stage: ShowcaseStage;
}

export default function ShowcaseText({ stage }: Props) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".showcase-title",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".showcase-subtitle",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    }, container);

    return () => ctx.revert();
  }, [stage]);

  return (
    <div
      ref={container}
      style={{
        left: stage.text.x,
        top: stage.text.y,
      }}
      className="absolute z-10 -translate-y-1/2"
    >
      <h1 className="showcase-title text-7xl font-bold">
        {stage.title}
      </h1>

      <p className="showcase-subtitle mt-6 text-xl text-neutral-300">
        {stage.subtitle}
      </p>
    </div>
  );
}