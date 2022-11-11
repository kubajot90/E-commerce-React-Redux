import { BsPerson, BsHandbag, BsSuitHeart } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

import classes from './HeaderMain.module.css'

const HeaderMain =()=>{
    const navigate = useNavigate();

    const moveHome =()=> {
        navigate('/')
    }

return(
    <div className={classes.headerMain}>
        <div className={classes.navigation}>
            <span>Female</span>
            <span>Male</span>
            <span>Jewelery</span>
            <span>Electronics</span>
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