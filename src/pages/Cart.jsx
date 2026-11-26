import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, cartCount, cartTotal, removeFromCart } = useCart();
  const { t } = useLanguage();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // 1. Programação defensiva para garantir que lidamos com valores numéricos e arrays válidos
  const safeCart = Array.isArray(cart) ? cart : [];
  const safeCartCount = typeof cartCount === "number" ? cartCount : 0;
  const safeTotal = typeof cartTotal === "number" ? cartTotal : 0;

  // 2. REGRA OBRIGATÓRIA: Manter moeda e formatação estritamente em Reais (BRL / R$) sem conversão
  const formattedTotal = safeTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  function handleCheckout() {
    // Simula a finalização do pedido limpando os itens do carrinho e disparando feedback visual
    safeCart.forEach((item) => {
      if (item?.id) {
        removeFromCart(item.id);
      }
    });

    setIsOrderPlaced(true);
  }

  return (
    <main className="cart-page">
      <section className="cart-header">
        <span className="section-subtitle">
          {t("cart.header.subtitle")}
        </span>
        <h1>{t("cart.header.title")}</h1>
        <p>{t("cart.header.description")}</p>
      </section>

      {/* Cenário 1: Pedido simulado com sucesso */}
      {isOrderPlaced ? (
        <div className="cart-empty" role="status" aria-live="polite">
          <CheckCircle size={52} color="#16a34a" aria-hidden="true" />
          <h2>{t("cart.success.title")}</h2>
          <p>{t("cart.success.message")}</p>
          <Link
            to="/products"
            className="hero-button"
            onClick={() => setIsOrderPlaced(false)}
            aria-label={t("cart.success.continueAria")}
          >
            {t("cart.success.continueButton")}
          </Link>
        </div>
      ) : safeCart.length > 0 ? (
        /* Cenário 2: Carrinho com produtos */
        <div className="cart-layout">
          <div className="cart-items-container">
            <div className="cart-items-header">
              <span role="status" aria-live="polite">
                {safeCartCount === 1
                  ? t("cart.countSingle")
                  : t("cart.countPlural", { count: safeCartCount })}
              </span>
            </div>

            <div className="cart-items-list" role="list">
              {safeCart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="cart-continue">
              <Link to="/products" className="continue-shopping-link">
                <ArrowLeft size={18} aria-hidden="true" />
                {t("cart.continueShopping")}
              </Link>
            </div>
          </div>

          <aside
            className="cart-summary"
            aria-labelledby="summary-title"
          >
            <h2 id="summary-title">{t("cart.summary.title")}</h2>

            <div className="summary-row">
              <span>
                {safeCartCount === 1
                  ? t("cart.summary.subtotalSingle")
                  : t("cart.summary.subtotalPlural", { count: safeCartCount })}
              </span>
              <span>{formattedTotal}</span>
            </div>

            <div className="summary-row">
              <span>{t("cart.summary.shipping")}</span>
              <span className="free-shipping">
                {t("cart.summary.freeShipping")}
              </span>
            </div>

            <div className="summary-divider" aria-hidden="true" />

            <div className="summary-row total-row">
              <strong>{t("cart.summary.total")}</strong>
              <strong className="total-value">{formattedTotal}</strong>
            </div>

            <button
              type="button"
              className="checkout-button"
              onClick={handleCheckout}
              aria-label={t("cart.summary.checkoutAria")}
            >
              {t("cart.summary.checkoutButton")}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </aside>
        </div>
      ) : (
        /* Cenário 3: Carrinho vazio */
        <div className="cart-empty" role="status" aria-live="polite">
          <ShoppingCart size={48} aria-hidden="true" />
          <h2>{t("cart.empty.title")}</h2>
          <p>{t("cart.empty.message")}</p>
          <Link
            to="/products"
            className="hero-button"
            aria-label={t("cart.empty.exploreAria")}
          >
            {t("cart.empty.exploreButton")}
          </Link>
        </div>
      )}
    </main>
  );
}

export default Cart;
