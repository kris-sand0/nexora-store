import { SlidersHorizontal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const DEFAULT_CATEGORY_KEYS = [
  "all",
  "electronics",
  "games",
  "audio",
  "monitors"
];

/**
 * Componente de controle para filtragem por categoria e ordenação por preço,
 * totalmente internacionalizado e com suporte a chaves canônicas de categoria.
 *
 * @param {Object} props
 * @param {string} props.category - Chave canônica da categoria selecionada.
 * @param {Function} props.onCategoryChange - Função disparada na troca de categoria.
 * @param {string} props.sort - Critério de ordenação selecionado.
 * @param {Function} props.onSortChange - Função disparada na troca de ordenação.
 * @param {string[]} [props.categories] - Lista de chaves canônicas de categoria.
 */
function Filter({
  category = "all",
  onCategoryChange,
  sort = "default",
  onSortChange,
  categories = DEFAULT_CATEGORY_KEYS
}) {
  const { t } = useLanguage();

  function handleCategoryChange(event) {
    if (typeof onCategoryChange === "function") {
      onCategoryChange(event.target.value);
    }
  }

  function handleSortChange(event) {
    if (typeof onSortChange === "function") {
      onSortChange(event.target.value);
    }
  }

  const sortOptions = [
    { value: "default", label: t("catalog.filter.sortDefault") },
    { value: "lowest", label: t("catalog.filter.sortLowest") },
    { value: "highest", label: t("catalog.filter.sortHighest") }
  ];

  return (
    <div
      className="products-controls"
      role="group"
      aria-label={t("catalog.filter.groupAria")}
    >
      <div className="filter-control">
        <SlidersHorizontal size={18} aria-hidden="true" />
        <select
          value={category}
          onChange={handleCategoryChange}
          aria-label={t("catalog.filter.categoryAria")}
        >
          {categories.map((catKey) => (
            <option key={catKey} value={catKey}>
              {t(`categories.${catKey}`)}
            </option>
          ))}
        </select>
      </div>

      <select
        className="sort-select"
        value={sort}
        onChange={handleSortChange}
        aria-label={t("catalog.filter.sortAria")}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
