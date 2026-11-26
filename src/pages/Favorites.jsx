import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import ProductList from "../components/ProductList";
import { useLanguage } from "../context/LanguageContext";

function Favorites() {
  const { favorites } = useFavorites();
  const { t, translateProducts } = useLanguage();

  // 1. Programação defensiva para garantir que lidamos com um array válido
  const safeFavorites = Array.isArray(favorites) ? favorites : [];
  const hasFavorites = safeFavorites.length > 0;

  // Localiza os produtos salvos no carrinho/favoritos para o idioma ativo
  const localizedFavorites = translateProducts(safeFavorites);

  return (
    <main className="favorites-page">
      <section className="favorites-header">
        <span className="section-subtitle">
          {t("favorites.header.subtitle")}
        </span>
        <h1>{t("favorites.header.title")}</h1>
        <p>{t("favorites.header.description")}</p>
      </section>

      {hasFavorites ? (
        <section className="favorites-content">
          <p
            className="favorites-count"
            role="status"
            aria-live="polite"
          >
            {safeFavorites.length === 1
              ? t("favorites.countSingle")
              : t("favorites.countPlural", { count: safeFavorites.length })}
          </p>

          {/* Integração com o componente modular ProductList */}
          <ProductList products={localizedFavorites} />
        </section>
      ) : (
        <div className="favorites-empty" role="status" aria-live="polite">
          <Heart size={48} aria-hidden="true" />
          <h2>{t("favorites.emptyTitle")}</h2>
          <p>{t("favorites.emptyMessage")}</p>

          <Link
            to="/products"
            className="hero-button"
            aria-label={t("favorites.exploreAria")}
          >
            {t("favorites.exploreButton")}
          </Link>
        </div>
      )}
    </main>
  );
}

export default Favorites;
