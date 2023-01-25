import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { ShopcontextProv } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopcontextProv>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopcontextProv>
    </div>
  );
}

export default App;
