import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import classes from './ProductCard.module.css';
import { AiFillStar } from 'react-icons/ai';

const ProductCard =(props)=> {
    const navigate = useNavigate();
    const productRef = useRef();
    const requestRef = useRef();

    const category = props.product.category.replace(/\s/g,'_');
    const title = props.product.title.replace(/\s/g,'_');

        useEffect(()=>{
            const lastProductIndex = props.productsLength -1;
          if(props.isMove && props.index === lastProductIndex){
            checkPosition();
          }
          if(!props.isMove){
            cancelAnimationFrame(requestRef.current)
        }
        },[props.isMove])

        const checkPosition =()=> {
            if( productRef.current.getBoundingClientRect().right < window.innerWidth - 50){
                            props.onTransformDistance(props.onFirstProductDistance()-50)
                            props.onCanSlideHandler('left', false)
                            props.onCancelAnimation()
                        }
            if( props.onFirstProductDistance() > 50 ){
                            props.onTransformDistance(0)
                            props.onCanSlideHandler('right', false)
                            props.onCancelAnimation()
                        }
               requestRef.current = requestAnimationFrame(checkPosition); 
          }

          const setPath =()=> {
            navigate(`/${category}/${title}`, {state: props.product})
            window.scrollTo(0,0)
          }

return (
<div onClick={setPath} className={classes.productCard} ref={productRef}>
    <div style={{backgroundImage :`url(${props.product.image})`}} className={classes.productImage} alt='product'></div>
    <div className={classes.productDescription}>
        <p className={classes.productTitle}>{props.product.title}</p>
        <p className={classes.productPrice}>{`${props.product.price}zł`}</p>
        <p className={classes.productRating}>
            <AiFillStar className={classes.starIcon}/>
            {`Rating: ${props.product.rating.rate}`}
            </p>
    </div>
</div>
)
}
export default ProductCard;