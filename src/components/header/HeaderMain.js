import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useDispatch } from "react-redux";
import { categoryActions } from '../../store/categorySlice';
import { useSelector } from 'react-redux';

import { BsPerson, BsHandbag, BsSuitHeart } from 'react-icons/bs';
import classes from './HeaderMain.module.css'

const HeaderMain =()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activeCategoryHash = useSelector(state => state.category.activeHash);

    const categories = [
        {
            categoryHash: "#women's_clothing",
            categoryTitle: "Female"
        },{
            categoryHash: "#men's_clothing",
            categoryTitle: "Male"
        },{
            categoryHash: "#jewelery",
            categoryTitle: "Jewelery"
        },{
            categoryHash: "#electronics",
            categoryTitle: "Electronics"
        }   
        ];

    const toggleActiveClass =(index)=> {
        dispatch(categoryActions.toggleActiveHash(categories[index].categoryHash))
    }

    const moveHome =()=> {
        navigate('/')
    }

return(
    <div className={classes.headerMain}>
        <div className={classes.navigation}>
            {categories.map((element, index) => 
                <HashLink to={`/${element.categoryHash}`} 
                onClick={()=>toggleActiveClass(index)} 
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})} 
                className={`${classes.navigation__Link} ${activeCategoryHash === categories[index].categoryHash ? classes.navigation__LinkActive : ''}`} 
                key={element.categoryHash}>
                    {`${element.categoryTitle}`}
                </HashLink> )}
        </div>
        <div className={classes.logo} onClick={moveHome}>e·Shop.</div>
        <div className={classes.iconBox}>
            <BsPerson className={classes.icon}/>
            <BsSuitHeart className={classes.icon}/>
            <BsHandbag className={classes.icon}/>
        </div>
    </div>
)
}
export default HeaderMain