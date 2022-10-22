import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import HeaderCategories from './HeaderCategories'
import classes from './Header.module.css';

const Header =()=>{
return(
    <div className={classes.header}>
        <HeaderTop/>
        <HeaderMain/>
        <HeaderCategories/>
    </div>
)
}
export default Header