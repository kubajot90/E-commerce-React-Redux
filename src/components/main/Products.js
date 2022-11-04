import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import classes from './Products.module.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const Products =(props)=> {
    const [isMove, setIsMove] = useState(false);
    const [canSlideMove, setCanSlideMove] = useState({left: true, right: false});
    const productsRef = useRef();
    const requestRef = useRef();
    const canSlide = useRef(true);
    const [transformDistance, setTransformDistance] = useState(0)
    const fetchProducts = useSelector(state => state.products.data);

    const firstProductDistance =()=> {
       return productsRef.current.getBoundingClientRect().left
    }

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
    <div className={classes.productsBox}>
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