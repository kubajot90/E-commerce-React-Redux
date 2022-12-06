import { useDispatch,  useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import HeroVideoBaner from './HeroVideoBaner';
import ProductsSlider from './ProductsSlider';
import fetchProductsData from '../../store/productsSlice';
import Baner1 from './baners/Baner1';
import Baner2 from './baners/Baner2';


 const Main =()=> {
    const fetchProducts = useSelector(state => state.products.data);
    const dispatch = useDispatch();
  

    useEffect(()=>{
    dispatch(fetchProductsData())
    },[])


    return(
        <>
            <HeroVideoBaner/>
            {fetchProducts && <ProductsSlider category={"women's clothing"} observer={true}/>}
            <Baner1/>
            {fetchProducts && <ProductsSlider category={"men's clothing"} observer={true}/>}
            <Baner2/>
            {fetchProducts && <ProductsSlider category={"jewelery"} observer={true}/>}
        </>
    )
 }
 export default Main;