import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <FavoritesProvider>
            <BrowserRouter>
              {/* Reseta a rolagem para o topo a cada mudança de rota */}
              <ScrollToTop />

              {/* Cabeçalho fixo no topo com navegação, tema e seletor de idioma */}
              <Header />

              {/* Rotas da aplicação */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart" element={<Cart />} />

                {/* Rota defensiva: redireciona rotas inexistentes para a página inicial */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>

              {/* Rodapé institucional com diferenciais e navegação rápida */}
              <Footer />
            </BrowserRouter>
          </FavoritesProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
