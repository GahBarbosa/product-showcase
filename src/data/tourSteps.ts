import type { CameraView } from "./hotspots";
export type TourStep = { eyebrow: string; title: string; description: string; duration: number; camera: CameraView };
export const tourSteps: TourStep[] = [
  { eyebrow: "Conheça o produto", title: "Feito para chamar atenção.", description: "Uma visão completa de cada textura e acabamento.", duration: 3600, camera: { position: [1, 0.75, 1], target: [0, 0, 0] } },
  { eyebrow: "Ingrediente premium", title: "Cobertura artesanal.", description: "Chocolate belga em uma camada generosa.", duration: 3600, camera: { position: [0.68, 0.78, 0.09], target: [0, 0.08, 0] } },
  { eyebrow: "Textura", title: "Leve em cada detalhe.", description: "Massa macia, preparada com fermentação lenta.", duration: 3600, camera: { position: [0, 0.28, 1], target: [0, 0, 0] } },
];
