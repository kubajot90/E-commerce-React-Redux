import { useDispatch,  useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import HeroVideoBaner from './HeroVideoBaner';
import ProductsSlider from './ProductsSlider';
import fetchProductsData from '../../store/productsSlice';
import Baner_1 from './baners/Baner_1';


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
            <Baner_1/>
            {fetchProducts && <ProductsSlider category={"men's clothing"} observer={true}/>}
            {fetchProducts && <ProductsSlider category={"jewelery"} observer={true}/>}
        </>
    )
 }
 export default Main;