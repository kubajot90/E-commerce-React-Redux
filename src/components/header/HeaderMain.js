import { BsPerson, BsHandbag, BsSuitHeart } from 'react-icons/bs';

import classes from './HeaderMain.module.css'

const HeaderMain =()=>{
return(
    <div className={classes.headerMain}>
        <div className={classes.navigation}>
            <span>Ona</span>
            <span>On</span>
            <span>Dziecko</span>
        </div>
        <div className={classes.logo}>e·Shop.</div>
        <div className={classes.iconBox}>
            <BsPerson className={classes.icon}/>
            <BsSuitHeart className={classes.icon}/>
            <BsHandbag className={classes.icon}/>
        </div>
    </div>
)
}
export default HeaderMain