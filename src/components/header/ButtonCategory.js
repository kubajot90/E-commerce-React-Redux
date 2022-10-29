import {useEffect, useState} from 'react'; 
import classes from './ButtonCategory.module.css';

const ButtonCategory =(props)=> {
    const [isHover, setIsHover] = useState(false)
    

    const onMouseHandler =(category)=> {
       props.onExpandCategory(true)
        props.onChangeCategory(category)
        setIsHover(true)
    }

    const onMouseLeaveHandler =()=> {
        props.onExpandCategory(false);
        !props.isExpand && setIsHover(false);
    }

    useEffect(()=>{
        props.chosenCategory !== props.category && setIsHover(false)
    },[props.chosenCategory])

    useEffect(()=>{
        !props.isExpand && setIsHover(false)
    },[props.isExpand])

    return(
        <button className={isHover ? `${classes.buttonCategoryHover} ${classes.buttonCategory}` : classes.buttonCategory }  onMouseEnter={()=>onMouseHandler(props.category)} onMouseLeave={onMouseLeaveHandler}>
            {props.category}
        </button>
    )
}
export default ButtonCategory;