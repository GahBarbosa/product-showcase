import { useEffect, useState } from "react";
import { usePresentationStore } from "../../app/presentationStore";
import { hotspots } from "../../data/hotspots";
import { tourSteps } from "../../data/tourSteps";

export default function PresentationOverlay() {
  const state = usePresentationStore();
  const [isStarting, setIsStarting] = useState(false);
  const active = hotspots.find((item) => item.id === state.activeHotspotId);
  useEffect(() => { if (!isStarting) return; const timer = window.setTimeout(state.startPresentation, 700); return () => window.clearTimeout(timer); }, [isStarting, state.startPresentation]);
  useEffect(() => { if (state.phase !== "intro") setIsStarting(false); }, [state.phase]);

  if (state.phase === "loading") return <div className="screen center"><div><p className="eyebrow">Carregando experiência</p><div className="loader" /></div></div>;
  if (state.phase === "intro") return <div className={`screen center intro-layer ${isStarting ? "is-leaving" : ""}`}><section className="hero"><p className="eyebrow">Product showcase</p><h1>Veja além da superfície.</h1><p>Uma experiência interativa para explorar cada detalhe.</p><button className="primary intro-cta" disabled={isStarting} onClick={() => { state.startMusic(); setIsStarting(true); }}>Começar apresentação</button></section></div>;
  if (state.phase === "tour") { const step = tourSteps[state.tourStep]; return <div className="screen pointer-events-none"><section className="tour-copy"><p className="eyebrow">{step.eyebrow} · {state.tourStep + 1}/{tourSteps.length}</p><h2>{step.title}</h2><p>{step.description}</p></section><div className="tour-progress" aria-label={`Etapa ${state.tourStep + 1} de ${tourSteps.length}`}><span className="tour-progress-fill" key={state.tourStep} style={{ animationDuration: `${step.duration}ms` }} /></div><button className="skip" onClick={state.enterExplore}>Pular tour</button></div>; }
  if (state.phase === "explore") return <ExplorationOverlay />;
  if (state.phase === "hotspot" && active) return <div className="screen"><section className="detail-card"><p className="eyebrow">Detalhe {active.label}</p><h2>{active.title}</h2><p>{active.description}</p><button className="primary" onClick={state.closeHotspot}>Continuar</button></section></div>;
  return <div className="screen center outro-layer"><section className="hero"><p className="eyebrow">Apresentação concluída</p><h1>Todos os detalhes foram revelados.</h1><p>Obrigado por explorar o produto.</p><button className="primary" onClick={state.restart}>Recomeçar</button></section></div>;
}

function ExplorationOverlay() {
  const { openHotspot, viewedHotspotIds, hasInteracted } = usePresentationStore();
  const remaining = hotspots.length - viewedHotspotIds.length;
  return <div className="screen pointer-events-none"><aside className="side-menu"><p className="eyebrow">Explorar detalhes</p><p className="exploration-progress">{remaining === 0 ? "Todos os detalhes explorados" : `${remaining} ${remaining === 1 ? "detalhe restante" : "detalhes restantes"}`}</p>{hotspots.map((hotspot) => { const viewed = viewedHotspotIds.includes(hotspot.id); return <button className={viewed ? "is-viewed" : ""} key={hotspot.id} onClick={() => openHotspot(hotspot.id)}><span>{hotspot.label}</span>{hotspot.title}{viewed && <i className="side-menu-check">✓</i>}</button>; })}</aside>{!hasInteracted && <div className="interaction-guide"><svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 5v18m0-18-5 5m5-5 5 5M7 25c3 5 7 8 13 8s10-3 13-8M7 25l4-2m-4 2 1 4M33 25l-4-2m4 2-1 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg><p>Arraste para explorar o produto</p></div>}<p className="explore-hint">Arraste para girar · Clique nos pontos para descobrir</p></div>;
}
