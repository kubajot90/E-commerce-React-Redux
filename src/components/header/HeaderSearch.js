import { BsSearch} from 'react-icons/bs';
import Typing from "./Typing";
import classes from './HeaderSearch.module.css';

const HeaderSearch =()=> {
    return (
        <div className={classes.headerSearch}>
            <input className={classes.searchInput}/>
            <div className={classes.typing}><Typing/></div>
            <div>
                <BsSearch className={classes.headerSearchIcon}/>
            </div>
        
        </div>
    )
}
export default HeaderSearch;