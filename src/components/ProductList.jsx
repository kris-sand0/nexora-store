import ProductCard from "./ProductCard";
import { useLanguage } from "../context/LanguageContext";

/**
 * Componente responsável por renderizar a grade responsiva de produtos
 * ou exibir uma mensagem elegante de estado vazio (Empty State), com suporte a i18n.
 *
 * @param {Object} props
 * @param {Array} props.products - Lista de produtos a serem exibidos.
 * @param {string} [props.emptyTitle] - Título para o estado vazio.
 * @param {string} [props.emptyMessage] - Descrição/orientação para o estado vazio.
 * @param {string} [props.className] - Classes CSS adicionais opcionais.
 */
function ProductList({
  products = [],
  emptyTitle,
  emptyMessage,
  className = ""
}) {
  const { t } = useLanguage();

  // 1. Programação defensiva: garante que sempre trabalhamos com um array válido
  const safeProducts = Array.isArray(products) ? products : [];

  const resolvedEmptyTitle = emptyTitle || t("catalog.empty.title");
  const resolvedEmptyMessage = emptyMessage || t("catalog.empty.message");

  // 2. Renderização do estado vazio (Empty State)
  if (safeProducts.length === 0) {
    return (
      <div className="no-products" role="status" aria-live="polite">
        <h2>{resolvedEmptyTitle}</h2>
        <p>{resolvedEmptyMessage}</p>
      </div>
    );
  }

  // 3. Renderização da grade de produtos
  const containerClass = className
    ? `products-grid ${className}`
    : "products-grid";

  return (
    <div
      className={containerClass}
      role="region"
      aria-label={t("catalog.filter.groupAria")}
    >
      {safeProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
