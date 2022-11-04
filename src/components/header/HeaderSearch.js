import { useState } from 'react';
import { BsSearch} from 'react-icons/bs';
import Typing from "./Typing";
import classes from './HeaderSearch.module.css';

const HeaderSearch =()=> {
    const [inputFocus, setInputFocus] = useState(false)

    const focusHandler =()=> {
        setInputFocus(true)
    }

    const blurHandler =()=> {
        setInputFocus(false)
    }

    return (
        <div className={classes.headerSearch}>
            <input onFocus={focusHandler} onBlur={blurHandler} className={classes.searchInput}/>
            {!inputFocus && <div className={classes.typing}><Typing/></div>}
            <div>
                <BsSearch className={classes.headerSearchIcon}/>
            </div>
        
        </div>
    )
}
export default HeaderSearch;