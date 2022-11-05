import Header from './components/header/Header';
import HeroVideoBaner from './components/main/HeroVideoBaner';
import ProductsSlider from './components/main/ProductsSlider';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchProductsData from './store/productsSlice'



function App() {
  const fetchProducts = useSelector(state => state.products.data);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProductsData())
  },[])

  return (
    <>
      <Header/>
      <HeroVideoBaner/>
      {fetchProducts && <ProductsSlider category={"women's clothing"}/>}
    </>
  );
}

export default App;
