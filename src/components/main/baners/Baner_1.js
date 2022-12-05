import imageSrc from '../../../assets/baner_1.png';
import classes from './Baner_1.module.css';

const Baner_1 =()=> {
    return(
        <div className={classes.imageContainer}>
            <img src={imageSrc} className={classes.image} alt='background'/>
            <div className={classes.contentContainer}>
                <h1 className={classes.title}>Something very interesting</h1>
                <button className={classes.button}>Show</button>
            </div>
        </div>
    )
}
export default Baner_1;