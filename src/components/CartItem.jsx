import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

/**
 * Componente que representa uma linha individual de produto no carrinho,
 * com suporte completo a internacionalização (PT-BR / EN).
 *
 * @param {Object} props
 * @param {Object} props.item - Objeto com os dados do produto no carrinho.
 */
function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const { t, translateProduct } = useLanguage();

  // 1. Blindagem defensiva contra dados nulos ou indefinidos
  if (!item) {
    return null;
  }

  // Localiza o produto com base no idioma ativo
  const localized = translateProduct(item);

  // 2. Cálculos defensivos de preço e total em Reais (BRL / R$)
  const rawPrice = typeof item.price === "number" ? item.price : 0;
  const quantity = typeof item.quantity === "number" ? item.quantity : 1;
  const rawTotal = rawPrice * quantity;

  // REGRA OBRIGATÓRIA: Manter formatação em BRL (R$)
  const formattedUnitPrice = rawPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  const formattedTotal = rawTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  return (
    <article className="cart-item">
      <div className="cart-item-image-wrapper">
        <img
          src={localized.image}
          alt={localized.name || t("productCard.imageFallback")}
          className="cart-item-image"
          loading="lazy"
        />
      </div>

      <div className="cart-item-details">
        <span className="cart-item-category">{localized.category}</span>
        <h3 className="cart-item-title">{localized.name}</h3>
        <span className="cart-item-unit-price">
          {formattedUnitPrice} {t("cartItem.unitSuffix")}
        </span>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button
            type="button"
            className="quantity-btn"
            onClick={() => decreaseQuantity(item.id)}
            disabled={quantity <= 1}
            aria-label={t("cartItem.decreaseAria", { name: localized.name })}
          >
            <Minus size={16} aria-hidden="true" />
          </button>

          <span
            className="quantity-value"
            aria-label={t("cartItem.quantityAria", { quantity })}
          >
            {quantity}
          </span>

          <button
            type="button"
            className="quantity-btn"
            onClick={() => increaseQuantity(item.id)}
            aria-label={t("cartItem.increaseAria", { name: localized.name })}
          >
            <Plus size={16} aria-hidden="true" />
          </button>
        </div>

        <strong className="cart-item-total">{formattedTotal}</strong>

        <button
          type="button"
          className="cart-remove-btn"
          onClick={() => removeFromCart(item.id)}
          aria-label={t("cartItem.removeAria", { name: localized.name })}
        >
          <Trash2 size={18} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
