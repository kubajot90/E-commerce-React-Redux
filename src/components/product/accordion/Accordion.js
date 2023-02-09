import AccordionSection from './AccordionSection';

import classes from './Accordion.module.css';

const Accordion =(props)=> {

    const dummyData = [
    {
        title: 'Product description',
        text: `${props.description}`
    },{
        title: 'Shipping',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        title: 'Complaints',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },{
        title: 'Popular categories',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    }
    ]

    return (
        <div className={classes.accordion}>
            {dummyData.map(item => <AccordionSection item={item} key={item.title}/>)}
        </div>
    )
}
export default Accordion;