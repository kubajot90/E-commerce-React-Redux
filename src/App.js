import Header from './components/header/Header';
import Product from './components/product/Product';
import Main from './components/main/Main';
import {Route, Routes} from 'react-router-dom';
import './App.css';



function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/product/:productId' element={<Product/>} />
        </Routes>
    </>
  );
}

export default App;
