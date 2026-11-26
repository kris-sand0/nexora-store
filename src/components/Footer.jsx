import { Link } from "react-router-dom";
import { ShieldCheck, Truck, CreditCard } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/**
 * Componente de rodapé (Footer) institucional e de navegação da NEXORA Store,
 * com suporte completo a internacionalização (PT-BR / EN).
 */
function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Faixa de diferenciais de e-commerce */}
        <div className="footer-features">
          <div className="footer-feature-item">
            <Truck size={24} aria-hidden="true" />
            <div>
              <strong>{t("footer.features.deliveryTitle")}</strong>
              <p>{t("footer.features.deliveryDesc")}</p>
            </div>
          </div>

          <div className="footer-feature-item">
            <ShieldCheck size={24} aria-hidden="true" />
            <div>
              <strong>{t("footer.features.securityTitle")}</strong>
              <p>{t("footer.features.securityDesc")}</p>
            </div>
          </div>

          <div className="footer-feature-item">
            <CreditCard size={24} aria-hidden="true" />
            <div>
              <strong>{t("footer.features.paymentTitle")}</strong>
              <p>{t("footer.features.paymentDesc")}</p>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Grade principal de links e informações */}
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link to="/" className="logo">
              NEXORA<span>.</span>
            </Link>
            <p className="footer-description">
              {t("footer.brandDescription")}
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">{t("footer.headings.nav")}</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">{t("footer.nav.home")}</Link>
              </li>
              <li>
                <Link to="/products">{t("footer.nav.products")}</Link>
              </li>
              <li>
                <Link to="/favorites">{t("footer.nav.favorites")}</Link>
              </li>
              <li>
                <Link to="/cart">{t("footer.nav.cart")}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">{t("footer.headings.categories")}</h4>
            <ul className="footer-links">
              <li>
                <Link to="/products?category=electronics">
                  {t("categories.electronics")}
                </Link>
              </li>
              <li>
                <Link to="/products?category=games">
                  {t("categories.games")}
                </Link>
              </li>
              <li>
                <Link to="/products?category=audio">
                  {t("categories.audio")}
                </Link>
              </li>
              <li>
                <Link to="/products?category=monitors">
                  {t("categories.monitors")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">{t("footer.headings.project")}</h4>
            <p className="footer-project-info">
              {t("footer.projectInfo")}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer.copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
