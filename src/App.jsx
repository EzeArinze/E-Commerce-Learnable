import "./App.css";
// import Cart from "./components/Cart";
// import Dashboard from "./components/Dashboard";
import Favorite from "./components/Favorite";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProductDetail from "./components/ProductDetail";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/products/:id" element={<ProductPage />} />
          {/* <Route path="/products/:id" element={<ProductDetail />} /> */}

          {/* Cart route */}
          <Route path="/CartPage" element={<CartPage />} />
          {/* <Route path="/Cart" element={<Cart />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
