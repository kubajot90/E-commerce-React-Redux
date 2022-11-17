import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import classes from './AccordionSection.module.css';

const AccordionSection =(props)=> {
    const [isExpand, setIsExpand] = useState(false)

    const expandSection =()=> {
        setIsExpand(prev=> !prev)
    }

    return (
        <div className={classes.accordion__section}>
            <div className={classes.accordion__titleBox}>
                <h3 className={classes.accordion__title}>
                    {props.item.title}
                </h3>
                <IoIosArrowDown className={classes.accordion__titleIcon} onClick={ expandSection }/>
            </div>
            { isExpand && <p className={classes.accordion__text}>
                {props.item.text} 
            </p> }
        </div>
    )
}
export default AccordionSection;
