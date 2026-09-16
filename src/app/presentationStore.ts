import { create } from "zustand";
import { hotspots } from "../data/hotspots";
import { tourSteps } from "../data/tourSteps";

export type PresentationPhase = "loading" | "intro" | "tour" | "explore" | "hotspot" | "outro";
type State = { phase: PresentationPhase; tourStep: number; activeHotspotId: string | null; viewedHotspotIds: string[]; hasInteracted: boolean; musicStarted: boolean; musicEnabled: boolean; finishLoading: () => void; startPresentation: () => void; startMusic: () => void; toggleMusic: () => void; advanceTour: () => void; enterExplore: () => void; markInteraction: () => void; openHotspot: (id: string) => void; closeHotspot: () => void; restart: () => void };

export const usePresentationStore = create<State>((set, get) => ({
  phase: "loading", tourStep: 0, activeHotspotId: null, viewedHotspotIds: [], hasInteracted: false, musicStarted: false, musicEnabled: true,
  finishLoading: () => set({ phase: "intro" }),
  startPresentation: () => set({ phase: "tour", tourStep: 0, hasInteracted: false }),
  startMusic: () => set({ musicStarted: true, musicEnabled: true }),
  toggleMusic: () => set((state) => ({ musicEnabled: !state.musicEnabled })),
  advanceTour: () => { const next = get().tourStep + 1; set(next >= tourSteps.length ? { phase: "explore" } : { tourStep: next }); },
  enterExplore: () => set({ phase: "explore", activeHotspotId: null }),
  markInteraction: () => set({ hasInteracted: true }),
  openHotspot: (id) => set((state) => ({ phase: "hotspot", activeHotspotId: id, hasInteracted: true, viewedHotspotIds: state.viewedHotspotIds.includes(id) ? state.viewedHotspotIds : [...state.viewedHotspotIds, id] })),
  closeHotspot: () => set({ activeHotspotId: null, phase: get().viewedHotspotIds.length === hotspots.length ? "outro" : "explore" }),
  restart: () => set({ phase: "intro", tourStep: 0, activeHotspotId: null, viewedHotspotIds: [], hasInteracted: false }),
}));
