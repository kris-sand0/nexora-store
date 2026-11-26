import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Gamepad2,
  Headphones,
  Monitor,
  Smartphone
} from "lucide-react";
import products from "../data/products";
import ProductList from "../components/ProductList";
import heroImg from "../assets/hero.png";
import { useLanguage } from "../context/LanguageContext";

// Lista com chaves canônicas de categoria para URLs estáveis e interoperáveis
const CATEGORY_ITEMS = [
  { key: "electronics", icon: Smartphone },
  { key: "games", icon: Gamepad2 },
  { key: "audio", icon: Headphones },
  { key: "monitors", icon: Monitor }
];

function Home() {
  const { t, translateProducts } = useLanguage();

  // Filtro seguro, memoizado e traduzido dos produtos em destaque
  const featuredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];
    const featured = products.filter((product) => Boolean(product?.featured));
    return translateProducts(featured);
  }, [translateProducts]);

  return (
    <main className="home">
      {/* Banner principal (Hero) */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">{t("home.hero.tag")}</span>

          <h1>
            {t("home.hero.titlePart1")}
            <span>{t("home.hero.titleHighlight")}</span>
          </h1>

          <p>{t("home.hero.description")}</p>

          <Link to="/products" className="hero-button">
            {t("home.hero.button")}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>

        <div className="hero-image-container">
          <img
            src={heroImg}
            alt={t("home.hero.imageAlt")}
            className="hero-image"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Seção de Categorias */}
      <section className="categories-section">
        <div className="section-heading">
          <div>
            <span className="section-subtitle">{t("home.categories.subtitle")}</span>
            <h2>{t("home.categories.title")}</h2>
          </div>
        </div>

        <div className="categories-grid">
          {CATEGORY_ITEMS.map((category) => {
            const Icon = category.icon;
            const categoryName = t(`categories.${category.key}`);

            return (
              <Link
                to={`/products?category=${category.key}`}
                className="category-card"
                key={category.key}
                aria-label={t("home.categories.cardAria", { name: categoryName })}
              >
                <Icon size={32} aria-hidden="true" />
                <h3>{categoryName}</h3>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Seção de Produtos em Destaque */}
      <section className="featured-section">
        <div className="section-heading">
          <div>
            <span className="section-subtitle">{t("home.featured.subtitle")}</span>
            <h2>{t("home.featured.title")}</h2>
          </div>

          <Link
            to="/products"
            className="see-all"
            aria-label={t("home.featured.seeAllAria")}
          >
            {t("home.featured.seeAll")}{" "}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Integração elegante com o componente modular ProductList */}
        <ProductList
          products={featuredProducts}
          emptyTitle={t("home.featured.emptyTitle")}
          emptyMessage={t("home.featured.emptyMessage")}
        />
      </section>
    </main>
  );
}

export default Home;
