import { useState, useEffect } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import classes from './TopScrollButton.module.css';

const TopScrollButton =()=> {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset;
        position > 200 ? setIsVisible(true) : setIsVisible(false);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll );
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const clickHandler =()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    return (
        <button onClick={clickHandler} className={`${classes.topScrollButton} ${isVisible ? classes.topScrollButtonHidden : ''}`
            }>
            <MdOutlineArrowForwardIos className={classes.topScrollButton__icon}/>
        </button>
    )
}
export default TopScrollButton;