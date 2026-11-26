

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("nexora-favorites");

      if (!savedFavorites) {
        return [];
      }

      const parsedFavorites = JSON.parse(savedFavorites);

      if (!Array.isArray(parsedFavorites)) {
        return [];
      }

      return parsedFavorites.filter(
        (item) =>
          item &&
          item.id !== undefined &&
          typeof item.name === "string"
      );
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
      return [];
    }
  });

  // Salvar favoritos no localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "nexora-favorites",
        JSON.stringify(favorites)
      );
    } catch (error) {
      console.error("Erro ao salvar favoritos:", error);
    }
  }, [favorites]);

  // Adicionar ou remover favoritos
  function toggleFavorite(product) {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (item) => item.id === product.id
      );

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentFavorites, product];
    });
  }

  // Verificar se o produto está nos favoritos
  function isFavorite(productId) {
    return favorites.some(
      (item) => item.id === productId
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
