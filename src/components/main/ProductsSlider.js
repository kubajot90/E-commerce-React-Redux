import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { categoryActions } from '../../store/categorySlice';
import ProductCard from './ProductCard';
import classes from './ProductsSlider.module.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const Products =(props)=> {
    const [isMove, setIsMove] = useState(false);
    const [canSlideMove, setCanSlideMove] = useState({left: true, right: false});
    const productsRef = useRef();
    const requestRef = useRef();
    const canSlide = useRef(true);
    const productRef = useRef();
    const [transformDistance, setTransformDistance] = useState(0)
    const fetchProducts = useSelector(state => state.products.data);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const category = props.category.replace(/\s/g,'_');

    const firstProductDistance =()=> {
       return productsRef.current.getBoundingClientRect().left
    }
//////////////////
    useEffect(()=>{
        console.log(fetchProducts);
    },[fetchProducts])
///////////////////

useEffect(() => {
    const ref = productRef.current;

    const observer = new IntersectionObserver(
        ([entry]) => {
            console.log('entry.isIntersecting', entry.isIntersecting);
            console.log(`#${category}`);
            if(entry.isIntersecting){
                navigate(`/#${category}`);
                dispatch(categoryActions.toggleActiveHash(`#${category}`));
            }else{
                // console.log('dispatch null');
                // dispatch(categoryActions.toggleActiveHash(null))
            }
        }, 
        // { rootMargin: '-100px 0px 100px 0px'} 
    );
    ref && observer.observe(ref);

    return () => observer.unobserve(ref);
}, []);


    const moveProducts =(distance)=> {
        setTransformDistance(prev=> prev + distance)
        requestRef.current = requestAnimationFrame(()=>moveProducts(distance));
            
        const timer = setTimeout(() => {
            canSlide.current = true;
            return cancelAnimation()
          }, 400);
          return () => clearTimeout(timer);
        
    }

    const cancelAnimation =()=> {
        cancelAnimationFrame(requestRef.current);
        setIsMove(false);
    }

    const moveProductsLeft =()=> {
        if(canSlide.current && canSlideMove.left){
            setIsMove(true)
            moveProducts(-10);
            canSlide.current = false;
        }
        canSlideHandler('right', true)
    }

    const moveProductsRight =()=> {
        if(canSlide.current && canSlideMove.right){
            setIsMove(true)
            moveProducts(10);
            canSlide.current = false;
        }
        canSlideHandler('left', true)

    }

    const canSlideHandler =(side, state)=> {
        setCanSlideMove({...canSlideMove, [side] : state})
    }

    const setDistance =(distance)=> {
        setTransformDistance(distance)
    }

    const filteredProducts = fetchProducts.filter((product)=>
        product.category === `${props.category}`);
    

return (
    <div ref={productRef} className={classes.productsBox} id={category}>
        <div className={classes.products} style={{transform: `translateX(${transformDistance}px)`}} ref={productsRef}>

       { filteredProducts.map((product,index)=> <ProductCard product={product} key={product.id} transformDistance={transformDistance} index={index} productsLength={filteredProducts.length} onTransformDistance={setDistance} isMove={isMove} onFirstProductDistance={firstProductDistance} onCancelAnimation={cancelAnimation} onCanSlideHandler={canSlideHandler}/>) }
         
        </div>
        <button onClick={moveProductsRight} className={classes.productsBtn}>
        <IoIosArrowRoundBack/>
        </button>
        <button onClick={moveProductsLeft} className={classes.productsBtn}>
        <IoIosArrowRoundForward/>
        </button>
    </div>
    
)
}
export default Products;