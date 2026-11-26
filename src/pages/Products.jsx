import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import { useLanguage } from "../context/LanguageContext";

/**
 * Normaliza parâmetros de categoria recebidos na URL para uma chave canônica estável.
 * Suporta chaves canônicas (ex: 'electronics') e termos em português para compatibilidade retroativa.
 */
function normalizeCategoryKey(param) {
  if (!param) return "all";
  const lower = param.toLowerCase().trim();
  if (lower === "all" || lower === "todas" || lower === "todas as categorias") return "all";
  if (lower === "electronics" || lower === "eletrônicos" || lower === "eletronicos") return "electronics";
  if (lower === "games") return "games";
  if (lower === "audio" || lower === "áudio") return "audio";
  if (lower === "monitors" || lower === "monitores") return "monitors";
  return "all";
}

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, translateProducts } = useLanguage();

  // 1. Sincronização dos filtros com a URL usando chaves canônicas
  const search = searchParams.get("search") || "";
  const rawCategoryParam = searchParams.get("category");
  const categoryKey = normalizeCategoryKey(rawCategoryParam);

  // Ordenação mantida em estado local
  const [sort, setSort] = useState("default");

  // 2. Atualizadores de parâmetros de URL defensivos
  function handleSearchChange(newSearch) {
    const nextParams = new URLSearchParams(searchParams);
    if (newSearch) {
      nextParams.set("search", newSearch);
    } else {
      nextParams.delete("search");
    }
    setSearchParams(nextParams, { replace: true });
  }

  function handleCategoryChange(newCategoryKey) {
    const nextParams = new URLSearchParams(searchParams);
    if (newCategoryKey && newCategoryKey !== "all") {
      nextParams.set("category", newCategoryKey);
    } else {
      nextParams.delete("category");
    }
    setSearchParams(nextParams, { replace: true });
  }

  // 3. Filtragem e ordenação internacionalizada e memoizada
  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];

    const normalizedSearch = search.trim().toLowerCase();
    // Traduz os produtos para o idioma ativo
    const localizedList = translateProducts(products);

    return localizedList
      .filter((product) => {
        if (!product) return false;

        const name = typeof product.name === "string" ? product.name.toLowerCase() : "";
        const description =
          typeof product.description === "string" ? product.description.toLowerCase() : "";
        const category =
          typeof product.category === "string" ? product.category.toLowerCase() : "";

        // Busca resiliente: busca no texto traduzido e também nos textos alternativos
        const ptData = product.translations?.["pt-BR"] || {};
        const enData = product.translations?.["en"] || {};
        const altNames = `${ptData.name || ""} ${enData.name || ""}`.toLowerCase();
        const altDescs = `${ptData.description || ""} ${enData.description || ""}`.toLowerCase();

        const matchesSearch =
          !normalizedSearch ||
          name.includes(normalizedSearch) ||
          description.includes(normalizedSearch) ||
          category.includes(normalizedSearch) ||
          altNames.includes(normalizedSearch) ||
          altDescs.includes(normalizedSearch);

        // Filtragem por chave canônica
        const matchesCategory =
          categoryKey === "all" || product.categoryKey === categoryKey;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const priceA = typeof a.price === "number" ? a.price : 0;
        const priceB = typeof b.price === "number" ? b.price : 0;

        if (sort === "lowest") return priceA - priceB;
        if (sort === "highest") return priceB - priceA;
        return 0;
      });
  }, [search, categoryKey, sort, translateProducts]);

  return (
    <main className="products-page">
      <section className="products-header">
        <span className="section-subtitle">{t("catalog.header.subtitle")}</span>
        <h1>{t("catalog.header.title")}</h1>
        <p>{t("catalog.header.description")}</p>
      </section>

      <section className="products-content">
        <div className="products-toolbar">
          <SearchBar
            value={search}
            onChange={handleSearchChange}
            placeholder={t("catalog.search.placeholder")}
          />

          <Filter
            category={categoryKey}
            onCategoryChange={handleCategoryChange}
            sort={sort}
            onSortChange={setSort}
          />
        </div>

        <div className="products-results" role="status" aria-live="polite">
          <p>
            {filteredProducts.length === 1
              ? t("catalog.results.single")
              : t("catalog.results.plural", { count: filteredProducts.length })}
          </p>
        </div>

        {/* Grade de produtos gerenciada pelo componente reutilizável */}
        <ProductList
          products={filteredProducts}
          emptyTitle={t("catalog.empty.title")}
          emptyMessage={t("catalog.empty.message")}
        />
      </section>
    </main>
  );
}

export default Products;
