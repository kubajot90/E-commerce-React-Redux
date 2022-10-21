import { BsSearch} from 'react-icons/bs';
import classes from './HeaderSearch.module.css';

const HeaderSearch =()=> {
    return (
        <div className={classes.headerSearch}>
            <input className={classes.searchInput}/>
        <BsSearch className={classes.headerSearchIcon}/>
        </div>
    )
}
export default HeaderSearch;