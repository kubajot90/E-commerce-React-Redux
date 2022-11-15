import CategoriesExpand from './CategoriesExpand';
import ButtonCategory from './ButtonCategory';
import classes from './HeaderCategories.module.css';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const HeaderCategories =()=>{
    const [isExpand, setIsExpand] = useState(false);
    const [chosenCategory, setChosenCategory] = useState('');
   
    const expandCategory =(state)=> {
        setIsExpand(state)
    }

    const changeCategory =(category)=> {
        setChosenCategory(category)
    }
   
return(
    <>
        <div className={classes.HeaderCategories}>
            <div className={classes.CategoriesBox}>
                <ButtonCategory chosenCategory={chosenCategory} isExpand={isExpand} onChangeCategory={changeCategory} onExpandCategory={expandCategory} category={'Backpack'}/>
                <ButtonCategory chosenCategory={chosenCategory} isExpand={isExpand} onChangeCategory={changeCategory} onExpandCategory={expandCategory} category={'Bracelet'}/>
                <ButtonCategory chosenCategory={chosenCategory} isExpand={isExpand} onChangeCategory={changeCategory} onExpandCategory={expandCategory} category={'Jacket'}/>
                <ButtonCategory chosenCategory={chosenCategory} isExpand={isExpand} onChangeCategory={changeCategory} onExpandCategory={expandCategory} category={'Raincoat'}/>
                <ButtonCategory chosenCategory={chosenCategory} isExpand={isExpand} onChangeCategory={changeCategory} onExpandCategory={expandCategory} category={'Micropave'}/>
                <ButtonCategory chosenCategory={chosenCategory} isExpand={isExpand} onChangeCategory={changeCategory} onExpandCategory={expandCategory} category={'T-Shirt'}/>
                <ButtonCategory chosenCategory={chosenCategory} isExpand={isExpand} onChangeCategory={changeCategory} onExpandCategory={expandCategory} category={'Disk'}/>
            </div>
        </div>
        {isExpand && <CategoriesExpand onMouseHandler={expandCategory} category={chosenCategory}/>}
    </>
)
}
export default HeaderCategories