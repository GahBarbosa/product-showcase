import { create } from "zustand";
import { hotspots } from "../data/hotspots";
import { tourSteps } from "../data/tourSteps";

export type PresentationPhase = "loading" | "intro" | "tour" | "explore" | "hotspot" | "outro";
type State = { phase: PresentationPhase; tourStep: number; activeHotspotId: string | null; viewedHotspotIds: string[]; finishLoading: () => void; startPresentation: () => void; advanceTour: () => void; enterExplore: () => void; openHotspot: (id: string) => void; closeHotspot: () => void; restart: () => void };

export const usePresentationStore = create<State>((set, get) => ({
  phase: "loading", tourStep: 0, activeHotspotId: null, viewedHotspotIds: [],
  finishLoading: () => set({ phase: "intro" }),
  startPresentation: () => set({ phase: "tour", tourStep: 0 }),
  advanceTour: () => { const next = get().tourStep + 1; set(next >= tourSteps.length ? { phase: "explore" } : { tourStep: next }); },
  enterExplore: () => set({ phase: "explore", activeHotspotId: null }),
  openHotspot: (id) => set((state) => ({ phase: "hotspot", activeHotspotId: id, viewedHotspotIds: state.viewedHotspotIds.includes(id) ? state.viewedHotspotIds : [...state.viewedHotspotIds, id] })),
  closeHotspot: () => set({ activeHotspotId: null, phase: get().viewedHotspotIds.length === hotspots.length ? "outro" : "explore" }),
  restart: () => set({ phase: "intro", tourStep: 0, activeHotspotId: null, viewedHotspotIds: [] }),
}));
