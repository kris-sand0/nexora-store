import notebookImg from "../assets/products/notebook.jpg";
import tecladoImg from "../assets/products/teclado.jpg";
import placaVideoImg from "../assets/products/placa de video.jpg";
import playstation5Img from "../assets/products/playstation5.jpg";
import mouseImg from "../assets/products/mouse.jpg";
import controlePs5Img from "../assets/products/controleps5.jpg";
import headsetImg from "../assets/products/headset.jpg";
import foneBluetoothImg from "../assets/products/fonebluetooth.jpg";
import microfoneImg from "../assets/products/microfone.jpg";
import monitorUltraWideImg from "../assets/products/monitorultrawide.jpg";
import monitorGamerImg from "../assets/products/monitorgamer.jpg";
import suporteImg from "../assets/products/suporte.jpg";

/**
 * @typedef {Object} ProductTranslation
 * @property {string} name - Nome localizado do produto.
 * @property {string} category - Nome localizado da categoria.
 * @property {string} description - Descrição localizada.
 */

/**
 * @typedef {Object} Product
 * @property {number} id - Identificador único do produto.
 * @property {string} categoryKey - Chave canônica da categoria (electronics, games, audio, monitors).
 * @property {number} price - Preço em reais (BRL). Obrigatório: nunca convertido.
 * @property {string} image - Imagem importada localmente de assets/products.
 * @property {boolean} featured - Se o produto deve ser exibido na vitrine de destaque da Home.
 * @property {string} name - Nome padrão (pt-BR).
 * @property {string} category - Categoria padrão (pt-BR).
 * @property {string} description - Descrição padrão (pt-BR).
 * @property {Object.<string, ProductTranslation>} translations - Dicionário de traduções bilíngue.
 */

/**
 * Catálogo completo de 12 produtos da NEXORA Store com imagens locais e suporte bilíngue.
 * @type {Product[]}
 */
const products = [
  // --- ELETRÔNICOS (electronics) ---
  {
    id: 1,
    categoryKey: "electronics",
    price: 5499.90,
    image: notebookImg,
    featured: true,
    name: "Notebook Gamer Pro",
    category: "Eletrônicos",
    description: "Processador de última geração e GPU dedicada para jogos e edição.",
    translations: {
      "pt-BR": {
        name: "Notebook Gamer Pro",
        category: "Eletrônicos",
        description: "Processador de última geração e GPU dedicada para jogos e edição."
      },
      "en": {
        name: "Pro Gamer Notebook",
        category: "Electronics",
        description: "Next-gen processor and dedicated GPU for high-end gaming and editing."
      }
    }
  },
  {
    id: 2,
    categoryKey: "electronics",
    price: 389.90,
    image: tecladoImg,
    featured: true,
    name: "Teclado Mecânico RGB",
    category: "Eletrônicos",
    description: "Switches mecânicos rápidos, iluminação personalizável e anti-ghosting.",
    translations: {
      "pt-BR": {
        name: "Teclado Mecânico RGB",
        category: "Eletrônicos",
        description: "Switches mecânicos rápidos, iluminação personalizável e anti-ghosting."
      },
      "en": {
        name: "RGB Mechanical Keyboard",
        category: "Electronics",
        description: "Fast mechanical switches, customizable lighting, and anti-ghosting."
      }
    }
  },
  {
    id: 3,
    categoryKey: "electronics",
    price: 4299.90,
    image: placaVideoImg,
    featured: false,
    name: "Placa de Vídeo RTX 4070",
    category: "Eletrônicos",
    description: "Ray tracing em tempo real e DLSS 3 para desempenho gráfico extremo.",
    translations: {
      "pt-BR": {
        name: "Placa de Vídeo RTX 4070",
        category: "Eletrônicos",
        description: "Ray tracing em tempo real e DLSS 3 para desempenho gráfico extremo."
      },
      "en": {
        name: "RTX 4070 Graphics Card",
        category: "Electronics",
        description: "Real-time ray tracing and DLSS 3 for extreme graphical performance."
      }
    }
  },

  // --- GAMES (games) ---
  {
    id: 4,
    categoryKey: "games",
    price: 3999.90,
    image: playstation5Img,
    featured: true,
    name: "PlayStation 5",
    category: "Games",
    description: "Gráficos em 4K, carregamento ultrarrápido com SSD e gatilhos adaptáveis.",
    translations: {
      "pt-BR": {
        name: "PlayStation 5",
        category: "Games",
        description: "Gráficos em 4K, carregamento ultrarrápido com SSD e gatilhos adaptáveis."
      },
      "en": {
        name: "PlayStation 5",
        category: "Games",
        description: "4K graphics, lightning-fast SSD loading, and adaptive triggers."
      }
    }
  },
  {
    id: 5,
    categoryKey: "games",
    price: 189.90,
    image: mouseImg,
    featured: false,
    name: "Mouse Gamer RGB",
    category: "Games",
    description: "Sensor óptico de alta precisão de até 16.000 DPI e pegada ergonômica.",
    translations: {
      "pt-BR": {
        name: "Mouse Gamer RGB",
        category: "Games",
        description: "Sensor óptico de alta precisão de até 16.000 DPI e pegada ergonômica."
      },
      "en": {
        name: "RGB Gaming Mouse",
        category: "Games",
        description: "High-precision optical sensor up to 16,000 DPI with ergonomic grip."
      }
    }
  },
  {
    id: 6,
    categoryKey: "games",
    price: 449.90,
    image: controlePs5Img,
    featured: false,
    name: "Controle Sem Fio DualSense",
    category: "Games",
    description: "Resposta tátil imersiva e microfone embutido para suas partidas.",
    translations: {
      "pt-BR": {
        name: "Controle Sem Fio DualSense",
        category: "Games",
        description: "Resposta tátil imersiva e microfone embutido para suas partidas."
      },
      "en": {
        name: "DualSense Wireless Controller",
        category: "Games",
        description: "Immersive haptic feedback and built-in microphone for your matches."
      }
    }
  },

  // --- ÁUDIO (audio) ---
  {
    id: 7,
    categoryKey: "audio",
    price: 349.90,
    image: headsetImg,
    featured: true,
    name: "Headset Gamer RGB",
    category: "Áudio",
    description: "Áudio surround 7.1 imersivo e almofadas com isolamento acústico.",
    translations: {
      "pt-BR": {
        name: "Headset Gamer RGB",
        category: "Áudio",
        description: "Áudio surround 7.1 imersivo e almofadas com isolamento acústico."
      },
      "en": {
        name: "RGB Gaming Headset",
        category: "Audio",
        description: "Immersive 7.1 surround sound and noise-isolating ear cushions."
      }
    }
  },
  {
    id: 8,
    categoryKey: "audio",
    price: 259.90,
    image: foneBluetoothImg,
    featured: false,
    name: "Fone Bluetooth Noise Cancelling",
    category: "Áudio",
    description: "Cancelamento de ruído ativo e bateria para até 30 horas de reprodução.",
    translations: {
      "pt-BR": {
        name: "Fone Bluetooth Noise Cancelling",
        category: "Áudio",
        description: "Cancelamento de ruído ativo e bateria para até 30 horas de reprodução."
      },
      "en": {
        name: "Noise Cancelling Bluetooth Earbuds",
        category: "Audio",
        description: "Active noise cancellation and battery life up to 30 hours of playback."
      }
    }
  },
  {
    id: 9,
    categoryKey: "audio",
    price: 499.90,
    image: microfoneImg,
    featured: false,
    name: "Microfone Condensador USB",
    category: "Áudio",
    description: "Captação nítida com padrão cardioide para streaming e podcasts.",
    translations: {
      "pt-BR": {
        name: "Microfone Condensador USB",
        category: "Áudio",
        description: "Captação nítida com padrão cardioide para streaming e podcasts."
      },
      "en": {
        name: "USB Condenser Microphone",
        category: "Audio",
        description: "Crystal-clear cardioid pickup pattern for streaming and podcasts."
      }
    }
  },

  // --- MONITORES (monitors) ---
  {
    id: 10,
    categoryKey: "monitors",
    price: 2199.90,
    image: monitorUltraWideImg,
    featured: true,
    name: "Monitor UltraWide 34",
    category: "Monitores",
    description: "Tela curva imersiva WQHD, proporção 21:9 e taxa de atualização de 144Hz.",
    translations: {
      "pt-BR": {
        name: "Monitor UltraWide 34",
        category: "Monitores",
        description: "Tela curva imersiva WQHD, proporção 21:9 e taxa de atualização de 144Hz."
      },
      "en": {
        name: "UltraWide 34\" Curved Monitor",
        category: "Monitors",
        description: "Immersive WQHD curved display, 21:9 aspect ratio, and 144Hz refresh rate."
      }
    }
  },
  {
    id: 11,
    categoryKey: "monitors",
    price: 1399.90,
    image: monitorGamerImg,
    featured: false,
    name: "Monitor Gamer 27 165Hz",
    category: "Monitores",
    description: "Painel IPS com tempo de resposta de 1ms e compatibilidade com G-Sync.",
    translations: {
      "pt-BR": {
        name: "Monitor Gamer 27 165Hz",
        category: "Monitores",
        description: "Painel IPS com tempo de resposta de 1ms e compatibilidade com G-Sync."
      },
      "en": {
        name: "27\" 165Hz Gaming Monitor",
        category: "Monitors",
        description: "Fast IPS panel with 1ms response time and G-Sync compatibility."
      }
    }
  },
  {
    id: 12,
    categoryKey: "monitors",
    price: 199.90,
    image: suporteImg,
    featured: false,
    name: "Suporte Articulado a Gás",
    category: "Monitores",
    description: "Pistão a gás para ajuste fluido de altura, inclinação e rotação 360°.",
    translations: {
      "pt-BR": {
        name: "Suporte Articulado a Gás",
        category: "Monitores",
        description: "Pistão a gás para ajuste fluido de altura, inclinação e rotação 360°."
      },
      "en": {
        name: "Gas Spring Monitor Arm",
        category: "Monitors",
        description: "Fluid gas spring adjustment for height, tilt, and 360° rotation."
      }
    }
  }
];

/**
 * Retorna o produto com textos traduzidos para o idioma solicitado.
 * Preserva o preço estritamente original em BRL (R$), id, imagem local e featured.
 *
 * @param {Product|Object} product - Objeto do produto.
 * @param {string} [language="pt-BR"] - Idioma desejado ('pt-BR' ou 'en').
 * @returns {Product}
 */
export function getLocalizedProduct(product, language = "pt-BR") {
  if (!product) return null;

  const langKey = language === "en" ? "en" : "pt-BR";

  // Se o produto já possui a propriedade translations
  const localized =
    product.translations?.[langKey] ||
    product.translations?.["pt-BR"] ||
    {};

  // Se o produto for antigo ou vier do localStorage sem translations, busca no catálogo original pelo id
  let fallbackName = localized.name || product.name;
  let fallbackCategory = localized.category || product.category;
  let fallbackDesc = localized.description || product.description;
  let fallbackCategoryKey = product.categoryKey;
  let fallbackImage = product.image;

  if (product.id) {
    const original = products.find((p) => p.id === product.id);
    if (original) {
      const originalLoc =
        original.translations?.[langKey] ||
        original.translations?.["pt-BR"] ||
        {};
      fallbackName = originalLoc.name || original.name;
      fallbackCategory = originalLoc.category || original.category;
      fallbackDesc = originalLoc.description || original.description;
      fallbackCategoryKey = original.categoryKey;
      fallbackImage = original.image; // Garante que a imagem local seja sempre recuperada
    }
  }

  return {
    ...product,
    image: fallbackImage || product.image,
    name: fallbackName,
    category: fallbackCategory,
    description: fallbackDesc,
    categoryKey: fallbackCategoryKey || "all"
  };
}

export default products;
