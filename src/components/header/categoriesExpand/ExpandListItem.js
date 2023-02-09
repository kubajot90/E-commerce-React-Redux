import { useNavigate } from "react-router-dom";

import classes from './ExpandListItem.module.css';

const ExpandListItem =(props)=> {
    const navigate = useNavigate();

    
    const setPath =()=> {
        console.log('props.product', props.product);
        const category = props.product.category.replace(/\s/g,'_');
        const title = props.product.title.replace(/\s/g,'_');
        navigate(`/${category}/${title}`, {state: props.product})
            window.scrollTo(0,0)
    }

    return(
        <li onClick={setPath} className={classes.items}>{props.title}</li>
    )
}
export default ExpandListItem