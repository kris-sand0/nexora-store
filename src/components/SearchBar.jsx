import { Search, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/**
 * Componente de barra de pesquisa reutilizável internacionalizado,
 * com foco em acessibilidade e botão prático para limpar o termo digitado.
 *
 * @param {Object} props
 * @param {string} props.value - Valor atual do termo de pesquisa.
 * @param {Function} props.onChange - Função disparada ao alterar o texto.
 * @param {string} [props.placeholder] - Texto opcional de placeholder.
 * @param {Function} [props.onSubmit] - Callback opcional executado ao submeter (Enter).
 * @param {string} [props.className] - Classe CSS do container (padrão: "products-search").
 * @param {boolean} [props.showClear] - Se deve exibir o botão de limpar quando houver texto.
 */
function SearchBar({
  value = "",
  onChange,
  placeholder,
  onSubmit,
  className = "products-search",
  showClear = true
}) {
  const { t } = useLanguage();

  const resolvedPlaceholder = placeholder || t("catalog.search.placeholder");

  function handleChange(event) {
    if (typeof onChange === "function") {
      onChange(event.target.value);
    }
  }

  function handleClear() {
    if (typeof onChange === "function") {
      onChange("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit(value);
    }
  }

  return (
    <form
      role="search"
      className={className}
      onSubmit={handleSubmit}
      aria-label={t("catalog.search.ariaLabel")}
    >
      <Search size={20} aria-hidden="true" />

      <input
        type="text"
        placeholder={resolvedPlaceholder}
        value={value}
        onChange={handleChange}
        aria-label={resolvedPlaceholder}
        autoComplete="off"
        spellCheck="false"
      />

      {showClear && Boolean(value) && (
        <button
          type="button"
          onClick={handleClear}
          aria-label={t("catalog.search.clearAria")}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-secondary, #94a3b8)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "4px"
          }}
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </form>
  );
}

export default SearchBar;
