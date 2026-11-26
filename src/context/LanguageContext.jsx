import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo
} from "react";
import { translations } from "../locales/translations";
import { getLocalizedProduct } from "../data/products";

const STORAGE_KEY = "nexora-language";
const DEFAULT_LANGUAGE = "pt-BR";
const SUPPORTED_LANGUAGES = ["pt-BR", "en"];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Inicialização segura do idioma a partir do localStorage
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
        return saved;
      }
      return DEFAULT_LANGUAGE;
    } catch (error) {
      console.error("Erro ao carregar preferência de idioma:", error);
      return DEFAULT_LANGUAGE;
    }
  });

  // Atualiza atributo lang da tag <html> para acessibilidade e SEO
  useEffect(() => {
    try {
      document.documentElement.lang = language === "en" ? "en" : "pt-BR";
    } catch {
      // Ignora erro caso executado fora do DOM (ex: SSR/testes)
    }
  }, [language]);

  // Altera idioma com validação e persistência segura no localStorage
  const setLanguage = useCallback((newLang) => {
    if (!SUPPORTED_LANGUAGES.includes(newLang)) return;

    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch (error) {
      console.error("Erro ao salvar preferência de idioma:", error);
    }
  }, []);

  // Alternador simples entre os dois idiomas suportados
  const toggleLanguage = useCallback(() => {
    setLanguage(language === "pt-BR" ? "en" : "pt-BR");
  }, [language, setLanguage]);

  /**
   * Função de tradução que resolve caminhos de chave com interpolação de parâmetros.
   * Exemplo: t("header.nav.home") ou t("cart.subtotalPlural", { count: 3 })
   */
  const t = useCallback(
    (keyPath, params = {}) => {
      if (!keyPath || typeof keyPath !== "string") return "";

      const keys = keyPath.split(".");

      // Tenta obter no idioma ativo
      let value = translations[language];
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          value = undefined;
          break;
        }
      }

      // Fallback para pt-BR se não encontrado
      if (value === undefined && language !== DEFAULT_LANGUAGE) {
        let fallback = translations[DEFAULT_LANGUAGE];
        for (const k of keys) {
          if (fallback && typeof fallback === "object" && k in fallback) {
            fallback = fallback[k];
          } else {
            fallback = undefined;
            break;
          }
        }
        value = fallback;
      }

      // Se ainda for undefined, retorna a própria chave
      if (typeof value !== "string") {
        return keyPath;
      }

      // Interpolação de parâmetros: substitui {param} pelo valor passado
      if (params && typeof params === "object") {
        return Object.keys(params).reduce((str, paramKey) => {
          const regex = new RegExp(`\\{${paramKey}\\}`, "g");
          return str.replace(regex, String(params[paramKey]));
        }, value);
      }

      return value;
    },
    [language]
  );

  // Helper para localizar um único produto
  const translateProduct = useCallback(
    (product) => {
      return getLocalizedProduct(product, language);
    },
    [language]
  );

  // Helper para localizar uma lista de produtos
  const translateProducts = useCallback(
    (productsList) => {
      if (!Array.isArray(productsList)) return [];
      return productsList.map((p) => getLocalizedProduct(p, language));
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({
      language,
      isEnglish: language === "en",
      setLanguage,
      toggleLanguage,
      t,
      translateProduct,
      translateProducts
    }),
    [language, setLanguage, toggleLanguage, t, translateProduct, translateProducts]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser utilizado dentro de um LanguageProvider.");
  }
  return context;
}
