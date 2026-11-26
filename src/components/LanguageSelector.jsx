import { useLanguage } from "../context/LanguageContext";

/**
 * Componente seletor de idioma visual (PT-BR / EN) com bandeiras e texto,
 * perfeitamente integrado à identidade visual e adaptado para temas claro e escuro.
 */
function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="language-selector"
      role="group"
      aria-label={t("languageSelector.ariaLabel")}
    >
      <button
        type="button"
        className={`lang-option ${language === "pt-BR" ? "active" : ""}`}
        onClick={() => setLanguage("pt-BR")}
        aria-pressed={language === "pt-BR"}
        aria-label="Mudar para Português do Brasil"
        title="Português (Brasil)"
      >
        <span className="lang-flag" aria-hidden="true">
          🇧🇷
        </span>
        <span className="lang-code">PT</span>
      </button>

      <button
        type="button"
        className={`lang-option ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
        title="English"
      >
        <span className="lang-flag" aria-hidden="true">
          🇺🇸
        </span>
        <span className="lang-code">EN</span>
      </button>
    </div>
  );
}

export default LanguageSelector;
