import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { counterActions, visibleActions } from '../../store/store';
import classes from './CategoriesExpand.module.css';

const CategoriesExpand =(props)=>{
    const dataFetch = useSelector(state => state.products.data);

    const toggleHandler = ()=>{
        console.log(dataFetch);
    }

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
                <li><b>{mainProduct.title}</b></li>
                <br/>
                {currentCategoryItems.map((product)=><li key={product.id}>{product.title}</li>)}
                <br/>

                { otherCategoryNames.map((category)=>{ return <> <br/> {dataFetch.filter((item)=>item.category === category).map((item)=>
                    <li key={item.id}>{item.title}</li>)}
                    </>
                }
                ) }
            </ul>
        )

    }

    return(
        <div className={classes.categoriesExpand}>
            { props.category && dataFetch && createExpandList(props.category)}
        </div>
    )
}
export default CategoriesExpand;