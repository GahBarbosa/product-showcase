import { hotspots } from "../../data/hotspots";
import { tourSteps } from "../../data/tourSteps";
import { usePresentationStore } from "../../app/presentationStore";

export default function PresentationOverlay() {
  const state = usePresentationStore();
  const active = hotspots.find((item) => item.id === state.activeHotspotId);
  if (state.phase === "loading") return <div className="screen center"><div><p className="eyebrow">Carregando experiência</p><div className="loader" /></div></div>;
  if (state.phase === "intro") return <div className="screen center"><section className="hero"><p className="eyebrow">Product showcase</p><h1>Veja além da superfície.</h1><p>Uma experiência interativa para explorar cada detalhe.</p><button className="primary" onClick={state.startPresentation}>Começar apresentação</button></section></div>;
  if (state.phase === "tour") { const step = tourSteps[state.tourStep]; return <div className="screen pointer-none"><section className="tour-copy"><p className="eyebrow">{step.eyebrow} · {state.tourStep + 1}/{tourSteps.length}</p><h2>{step.title}</h2><p>{step.description}</p></section><button className="skip" onClick={state.enterExplore}>Pular tour</button></div>; }
  if (state.phase === "explore") return <div className="screen pointer-events-none"><aside className="side-menu"><p className="eyebrow">Explorar detalhes</p>{hotspots.map((hotspot) => <button key={hotspot.id} onClick={() => state.openHotspot(hotspot.id)}><span>{hotspot.label}</span>{hotspot.title}</button>)}</aside><p className="explore-hint">Arraste para girar · Clique nos pontos para descobrir</p></div>;
  if (state.phase === "hotspot" && active) return <div className="screen"><section className="detail-card"><p className="eyebrow">Detalhe {active.label}</p><h2>{active.title}</h2><p>{active.description}</p><button className="primary" onClick={state.closeHotspot}>Continuar</button></section></div>;
  return <div className="screen center"><section className="hero"><p className="eyebrow">Apresentação concluída</p><h1>Todos os detalhes foram revelados.</h1><p>Obrigado por explorar o produto.</p><button className="primary" onClick={state.restart}>Recomeçar</button></section></div>;
}
