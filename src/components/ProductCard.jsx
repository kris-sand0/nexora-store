import { useState, useEffect, useRef } from "react";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

function ProductCard({ product }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  const { t, translateProduct } = useLanguage();
  const [isAdded, setIsAdded] = useState(false);
  const feedbackTimeoutRef = useRef(null);

  // 1. Limpeza defensiva do timer para evitar vazamento de memória se o componente for desmontado
  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  // 2. Proteção contra falhas se o objeto product vier nulo ou indefinido
  if (!product) {
    return null;
  }

  // Localiza o produto para o idioma ativo (mantendo id e preço originais intactos)
  const localizedProduct = translateProduct(product);

  const favorite = isFavorite(product.id);

  function handleAddToCart() {
    // Adiciona o produto ao carrinho preservando o objeto base
    addToCart(product);
    setIsAdded(true);

    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }

    feedbackTimeoutRef.current = setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  }

  // 3. REGRA OBRIGATÓRIA: Formatação estritamente em Reais (BRL / R$) sem conversão de moeda
  const formattedPrice =
    typeof product.price === "number"
      ? product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })
      : "R$ 0,00";

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={localizedProduct.image}
          alt={localizedProduct.name || t("productCard.imageFallback")}
          className="product-image"
          loading="lazy"
        />

        {localizedProduct.featured && (
          <span className="product-badge">
            {t("productCard.badge")}
          </span>
        )}

        <button
          type="button"
          className={`favorite-button ${favorite ? "active" : ""}`}
          onClick={() => toggleFavorite(product)}
          aria-label={
            favorite
              ? t("productCard.removeFavoriteAria", { name: localizedProduct.name })
              : t("productCard.addFavoriteAria", { name: localizedProduct.name })
          }
          aria-pressed={favorite}
        >
          <Heart
            size={21}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">
          {localizedProduct.category}
        </span>

        <h3>{localizedProduct.name}</h3>

        <p>{localizedProduct.description}</p>

        <strong className="product-price">
          {formattedPrice}
        </strong>

        <button
          type="button"
          className={`product-button ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
          disabled={isAdded}
          aria-label={
            isAdded
              ? t("productCard.addedAria", { name: localizedProduct.name })
              : t("productCard.addToCartAria", { name: localizedProduct.name })
          }
        >
          {isAdded ? (
            <>
              <Check size={18} />
              {t("productCard.added")}
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              {t("productCard.addToCart")}
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
