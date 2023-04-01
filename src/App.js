import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
