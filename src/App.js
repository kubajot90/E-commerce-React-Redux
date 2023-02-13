import Header from "./components/header/Header";
import Product from "./components/product/Product";
import Main from "./components/main/Main";
import Cart from "./components/cart/Cart";
import Favorites from "./components/favorites/Favorites";
import Footer from "./components/main/footer/Footer";
import TopScrollButton from "./components/main/topScrollButton/TopScrollButton";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/E-commerce-React-Redux" element={<Main />} />
        <Route path="/:category/:product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
      <TopScrollButton />
    </div>
  );
}

export default App;
