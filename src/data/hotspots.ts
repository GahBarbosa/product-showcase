export type CameraView = { position: [number, number, number]; target: [number, number, number] };
export type Hotspot = {
  id: string;
  label: string;
  title: string;
  description: string;
  position: [number, number, number];
  normal: [number, number, number];
  camera: CameraView;
};

export const hotspots: Hotspot[] = [
  { id: "icing", label: "01", title: "Cobertura belga", description: "Chocolate artesanal com acabamento brilhante e sabor intenso.", position: [0.08, 0, 0], normal: [0.3, 0.6, 0.7], camera: { position: [0.72, 0.62, 0.38], target: [0.08, 0.12, 0] } },
  { id: "dough", label: "02", title: "Massa macia", description: "Fermentação lenta de 24 horas para uma textura leve por dentro.", position: [0, 0, -0.08], normal: [-0.52, -0.26, 0.81], camera: { position: [-0.72, 0.34, 0.54], target: [-0.1, -0.05, 0] } },
];
