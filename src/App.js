import Header from './components/header/Header';
import HeroVideoBaner from './components/HeroVideoBaner';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchProductsData from './store/productsSlice'

  

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProductsData())
  },[])

  return (
    <>
      <Header/>
      <HeroVideoBaner/>
    </>
  );
}

export default App;
