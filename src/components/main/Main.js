import { useDispatch,  useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import HeroVideoBaner from './HeroVideoBaner';
import ProductsSlider from './ProductsSlider';
import fetchProductsData from '../../store/productsSlice'

 const Main =()=> {
    const fetchProducts = useSelector(state => state.products.data);
    const dispatch = useDispatch();
  

    useEffect(()=>{
    dispatch(fetchProductsData())
    },[])


    return(
        <>
            <HeroVideoBaner/>
            {fetchProducts && <ProductsSlider category={"women's clothing"}/>}
        </>
    )
 }
 export default Main;