import Header from './components/header/Header';
import Product from './components/product/Product';
import Main from './components/main/Main';
import Cart from './components/cart/Cart';
import Footer from './components/main/Footer';
import TopScrollButton from './components/main/TopScrollButton';
import {Route, Routes} from 'react-router-dom';
import './App.css';



function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/:category/:product' element={<Product/>} />
          <Route path='/:cart' element={<Cart/>} />
        </Routes>
        <Footer/>
        <TopScrollButton/>
    </>
  );
}

export default App;
