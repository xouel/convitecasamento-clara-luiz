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
    time: "11h",
    venue: "Espaço Vilela",
    address: "[A CONFIRMAR — endereço completo do Espaço Vilela]",
  },
  rsvp: {
    deadlineDisplay: "25 de setembro",
    url: "https://api.whatsapp.com/send?phone=5532988759890&text=%F0%9F%92%8D%20CONFIRMA%C3%87%C3%83O%20DE%20PRESEN%C3%87A%20%E2%80%94%20CLARA%20%26%20LUIZ%20CLAUDIO%20%F0%9F%A4%8D%0A%0AOl%C3%A1!%20Ficamos%20muito%20felizes%20em%20ter%20voc%C3%AA%20fazendo%20parte%20desse%20momento%20t%C3%A3o%20especial%20da%20nossa%20hist%C3%B3ria.%20%F0%9F%A5%B0%0A%0ANosso%20casamento%20est%C3%A1%20se%20aproximando%20e%2C%20para%20organizarmos%20tudo%20com%20muito%20carinho%2C%20pedimos%20que%20confirme%20sua%20presen%C3%A7a%20preenchendo%20as%20informa%C3%A7%C3%B5es%20abaixo%3A%0A%0A%E2%9C%A8%20Nomes%20das%20pessoas%20que%20ir%C3%A3o%20ao%20casamento%3A%0A%0A%E2%B8%BB%0A%0A%E2%B8%BB%0A%0A%E2%B8%BB%0A%0A%F0%9F%93%85%20Data%3A%2017%20de%20outubro%20de%202026%0A%F0%9F%95%9A%20Hor%C3%A1rio%3A%2011h%0A%F0%9F%93%8D%20Local%3A%20Espa%C3%A7o%20Vilela%0A%0AAgradecemos%20desde%20j%C3%A1%20pelo%20carinho%20e%20por%20celebrar%20esse%20dia%20t%C3%A3o%20importante%20conosco!%20%F0%9F%A4%8D%0A%0ACom%20carinho%2C%0AClara%20%26%20Luiz%20Claudio%20%F0%9F%92%8D",
  },
  gifts: {
    url: "https://listapresente-clara-luiz.vercel.app/",
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
