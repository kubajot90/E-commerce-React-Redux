import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { counterActions, visibleActions } from '../../store/store';
import classes from './CategoriesExpand.module.css';

const CategoriesExpand =(props)=>{
    const dataFetch = useSelector(state => state.products.data);

    useEffect(()=>{
        console.log(dataFetch);
    },[dataFetch])

    const createExpandList =(category)=> {
        const product = dataFetch.filter((item)=> 
            item.title.includes(category));
        console.log('datafetch', dataFetch);

        const mainProduct = {
            itemId: product[0].id,
            title: product[0].title,
            category: product[0].category,
        }
       
        const uniqueCategoryNames = [...new Set(dataFetch.map((item)=> item.category))];

        const otherCategoryNames = uniqueCategoryNames.filter((item)=>
        item !== mainProduct.category); 

        const currentCategoryItems = dataFetch.filter((item)=>
        item.category === mainProduct.category && item.title !== mainProduct.title); 

        return (
            <ul>
                <h4>{mainProduct.title}</h4>
                <br/>
                {currentCategoryItems.map((product)=><li key={product.id} className={classes.items}>{product.title}</li>)}

                { otherCategoryNames.map((category)=> 
                <div key={category}> 
                    <br/> 
                    <h4>{category}</h4>
                    {dataFetch.filter((item)=>item.category === category)
                    .map((item)=>
                        <li key={item.id} className={classes.items}>{item.title}</li>)}
                </div>
                ) }
            </ul>
        )

    }

    return(
        <div onMouseEnter={()=>props.onMouseHandler(true)} onMouseLeave={()=>props.onMouseHandler(false)} className={classes.categoriesExpand}>
            { props.category && dataFetch && createExpandList(props.category)}
        </div>
    )
}
export default CategoriesExpand;