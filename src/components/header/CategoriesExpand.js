import { useDispatch, useSelector } from 'react-redux';
// import { counterActions, visibleActions } from '../../store/store';
import classes from './CategoriesExpand.module.css';
import { fetchProductsData } from '../../store/productsSlice';


const CategoriesExpand =()=>{
    const dispatch = useDispatch();
    const dataFetch = useSelector(state => state.products.data);

    const toggleHandler = ()=>{
    //    dispatch(fetchProductsData())
        console.log(dataFetch);
    }

    return(
        <div className={classes.categoriesExpand}>


            {/* <p>Counter</p>
            <p>{data}</p>
            {visible && <button onClick={()=>dispatch(counterActions.add())}>DODAJ</button>}
            <button onClick={()=>dispatch(counterActions.decrement())}>Odejmij</button>
            <button onClick={toggleHandler}>Toggle</button>
            <button onClick={()=>dispatch(counterActions.increase(5))}>add + number</button>
            <p>{dataFetch && dataFetch.map((item)=>item.title)}</p> */}
            <button onClick={toggleHandler}>FETCH DATA</button>
        </div>
    )
}
export default CategoriesExpand;