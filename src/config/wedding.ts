export interface WeddingConfig {
  couple: {
    displayName: string;
  };
  event: {
    date: string;
    dateDisplay: {
      line1: string;
      line2: string;
    };
    time: string;
    venue: string;
    address: string;
  };
  rsvp: {
    deadlineDisplay: string;
    url: string;
  };
  gifts: {
    url: string;
  };
  location: {
    mapsUrl: string;
  };
  copy: {
    invitationLine1: string;
    invitationLine2: string;
    openEnvelope: string;
  };
  navigation: {
    labels: {
      directions: string;
      rsvp: string;
      gifts: string;
    };
  };
  seo: {
    title: string;
    description: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    displayName: "Clara E Luiz",
  },
  event: {
    date: "2026-10-17",
    dateDisplay: {
      line1: "17 DE OUTUBRO",
      line2: "DE 2026",
    },
    time: "14h",
    venue: "Espaço Vilela",
    address: "[A CONFIRMAR — endereço completo do Espaço Vilela]",
  },
  rsvp: {
    deadlineDisplay: "25 de setembro",
    url: "https://wa.me/5532988759890",
  },
  gifts: {
    url: "[A CONFIRMAR — link da lista de presentes]",
  },
  location: {
    mapsUrl:
      "https://www.google.com/maps/place/Espa%C3%A7o+vilelas/@-21.1381521,-42.3569873,265m/data=!3m1!1e3!4m6!3m5!1s0xbcc70052ef3827:0x8cd1198cf2c0780f!8m2!3d-21.1382077!4d-42.3566265!16s%2Fg%2F11x0d7pglb",
  },
  copy: {
    invitationLine1: "Convidamos você para",
    invitationLine2: "celebrar o nosso casamento",
    openEnvelope: "CLIQUE PARA ABRIR",
  },
  navigation: {
    labels: {
      directions: "COMO CHEGAR",
      rsvp: "CONFIRMAR PRESENÇA",
      gifts: "LISTA DE PRESENTES",
    },
  },
  seo: {
    title: "Clara & Luiz — Nosso Casamento",
    description:
      "Você está convidado para celebrar o casamento de Clara & Luiz. Confira data, local e confirme sua presença.",
  },
};
