import { BsPerson, BsHandbag, BsSuitHeart } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

import classes from './HeaderMain.module.css'

const HeaderMain =()=>{
    const navigate = useNavigate();

    const moveHome =()=> {
        navigate('/')
    }

return(
    <div className={classes.headerMain}>
        <div className={classes.navigation}>
            <NavHashLink>Female</NavHashLink>
            <NavHashLink>Male</NavHashLink>
            <NavHashLink>Jewelery</NavHashLink>
            <NavHashLink>Electronics</NavHashLink>
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