import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  Sun,
  Moon
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { cartCount } = useCart();
  const { favorites } = useFavorites();
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  function handleSearch(event) {
    event.preventDefault();

    const searchTerm = search.trim();

    if (!searchTerm) {
      navigate("/products");
      return;
    }

    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          NEXORA<span>.</span>
        </Link>

        <nav className="navigation">
          <Link to="/">{t("header.nav.home")}</Link>
          <Link to="/products">{t("header.nav.products")}</Link>
          <Link to="/favorites">{t("header.nav.favorites")}</Link>
        </nav>

        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t("header.searchPlaceholder")}
            aria-label={t("header.searchAriaLabel")}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button type="submit" aria-label={t("header.searchSubmitAria")}>
            <Search size={20} />
          </button>
        </form>

        <div className="header-actions">
          {/* Seletor visual de idioma (PT-BR / EN) */}
          <LanguageSelector />

          {/* Alternador de tema claro / escuro */}
          <button
            type="button"
            className={`theme-switch ${theme === "light" ? "light" : ""}`}
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? t("header.themeSwitch.toLight")
                : t("header.themeSwitch.toDark")
            }
            aria-pressed={theme === "light"}
            title={
              theme === "dark"
                ? t("header.themeSwitch.titleLight")
                : t("header.themeSwitch.titleDark")
            }
          >
            <span className="theme-switch-thumb">
              {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            </span>
          </button>

          <Link
            to="/favorites"
            className="header-icon"
            aria-label={t("header.favoritesAria", { count: favorites.length })}
          >
            <Heart size={22} />
            {favorites.length > 0 && (
              <span className="header-badge">{favorites.length}</span>
            )}
          </Link>

          <Link
            to="/cart"
            className="header-icon"
            aria-label={t("header.cartAria", { count: cartCount })}
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="header-badge">{cartCount}</span>
            )}
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu"
          aria-label={t("header.mobileMenuAria")}
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
