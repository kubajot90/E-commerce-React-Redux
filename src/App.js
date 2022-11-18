import Header from './components/header/Header';
import Product from './components/product/Product';
import Main from './components/main/Main';
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
        </Routes>
        <TopScrollButton/>
    </>
  );
}

export default App;
