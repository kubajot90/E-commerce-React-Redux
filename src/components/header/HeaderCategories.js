import HeaderSearch from './HeaderSearch';
import CategoriesExpand from './CategoriesExpand';
import classes from './HeaderCategories.module.css';
import { useEffect, useState } from 'react';

const HeaderCategories =()=>{
    const [isExpand, setIsExpand] = useState(false);
    const [chosenCategory, setChosenCategory] = useState('');
   
    const focusHandler =(category)=> {
        setIsExpand(true);
        setChosenCategory(category)
    }

    const blurHandler =()=> {
        setIsExpand(false);
    }

return(
    <>
        <div className={classes.HeaderCategories}>
            <div className={classes.CategoriesBox}>
                <span onMouseEnter={()=>focusHandler('Backpack')} onMouseLeave={blurHandler}>Backpack</span>
                <span onMouseEnter={()=>focusHandler('Bracelet')} onMouseLeave={blurHandler}>Bracelet</span>
                <span onMouseEnter={()=>focusHandler('Jacket')} onMouseLeave={blurHandler}>Jacket</span>
                <span onMouseEnter={()=>focusHandler('Raincoat')} onMouseLeave={blurHandler}>Raincoat</span>
                <span onMouseEnter={()=>focusHandler('Micropave')} onMouseLeave={blurHandler}>Micropave</span>
                <span onMouseEnter={()=>focusHandler('T-Shirt')} onMouseLeave={blurHandler}>T-Shirt</span>
                <span onMouseEnter={()=>focusHandler('Disk')} onMouseLeave={blurHandler}>Disk</span>
               
            </div>
            <HeaderSearch/>
        </div>
        {isExpand && <CategoriesExpand category={chosenCategory}/>}
    </>
)
}
export default HeaderCategories