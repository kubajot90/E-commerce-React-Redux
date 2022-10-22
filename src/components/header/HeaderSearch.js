import { BsSearch} from 'react-icons/bs';
import classes from './HeaderSearch.module.css';

const HeaderSearch =()=> {
    return (
        <div className={classes.headerSearch}>
            <input className={classes.searchInput}/>
            <div>
                <BsSearch className={classes.headerSearchIcon}/>
            </div>
        
        </div>
    )
}
export default HeaderSearch;