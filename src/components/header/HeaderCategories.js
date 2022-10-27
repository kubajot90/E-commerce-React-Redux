import HeaderSearch from './HeaderSearch';
import CategoriesExpand from './CategoriesExpand';
import classes from './HeaderCategories.module.css';
import { useEffect } from 'react';

const HeaderCategories =()=>{
    // const fetchCategories =()=> {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    // }

    // useEffect(()=>{
    //     fetchCategories()
    // },[])

return(
    <>
        <div className={classes.HeaderCategories}>
            <div className={classes.CategoriesBox}>
                <span>Backpack</span>
                <span>T-Shirt</span>
                <span>Jacket</span>
                <span>Bracelet</span>
                <span>Micropave</span>
                <span>Ring</span>
                <span>Earrings</span>
                <span>Raincoat</span>
                <span>Shorts</span>
            </div>
            <HeaderSearch/>
        </div>
        <CategoriesExpand/>
    </>
)
}
export default HeaderCategories