export interface ShowcaseStage {
  title: string;
  subtitle: string;

  camera: {
    position: [number, number, number];
    target: [number, number, number];
  };

  text: {
    x: string;
    y: string;
    align: "left" | "center" | "right";
  };
}

export const showcaseStages: ShowcaseStage[] = [
  {
    title: "Donut",
    subtitle: "Uma experiência 3D interativa.",

    camera: {
      position: [1, 1, 1],
      target: [0, 0, 0],
    },

    text: {
      x: "10%",
      y: "50%",
      align: "left",
    },
  },

  {
    title: "Chocolate",
    subtitle: "Cobertura artesanal premium.",

    camera: {
      position: [0.6761792967801287, 0.7816087476259708, 0.08559843144657173],
      target: [0, 0, 0],
    },

    text: {
      x: "70%",
      y: "50%",
      align: "right",
    },
  },

  {
    title: "Textura",
    subtitle: "Massa leve e extremamente macia.",

    camera: {
      position: [0, 0.2, 1],
      target: [0, 0, 0],
    },

    text: {
      x: "50%",
      y: "15%",
      align: "center",
    },
  },
];