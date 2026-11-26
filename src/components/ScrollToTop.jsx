import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Utilitário que garante que a rolagem da página retorne ao topo (0, 0)
 * sempre que o usuário navegar entre rotas diferentes na aplicação.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
