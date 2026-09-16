import { useEffect, useRef } from "react";
import { usePresentationStore } from "../../app/presentationStore";

export default function MusicControl() {
  const audio = useRef<HTMLAudioElement>(null);
  const phase = usePresentationStore((state) => state.phase);
  const musicStarted = usePresentationStore((state) => state.musicStarted);
  const musicEnabled = usePresentationStore((state) => state.musicEnabled);
  const toggleMusic = usePresentationStore((state) => state.toggleMusic);

  useEffect(() => {
    if (!audio.current) return;
    if (musicStarted && musicEnabled) audio.current.play().catch(() => undefined);
    else audio.current.pause();
  }, [musicEnabled, musicStarted]);

  return <><audio ref={audio} src="/audio/ambient.mp3" loop preload="auto" />{phase !== "loading" && phase !== "intro" && <button className="music-control" onClick={toggleMusic} aria-label={musicEnabled ? "Desativar música" : "Ativar música"}>{musicEnabled ? "♫ Som ligado" : "♫ Som desligado"}</button>}</>;
}
