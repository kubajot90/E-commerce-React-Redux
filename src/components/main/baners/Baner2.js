import imageSrc from '../../../assets/baner_2.png';
import classes from './Baner2.module.css';

const Baner2 =()=> {
    return(
        <div className={classes.imageContainer}>
            <img src={imageSrc} className={classes.image} alt='background'/>
            <div className={classes.contentContainer}>
                <h1 className={classes.title}>COCTAIL PARTY</h1>
                <h3> Chose your style</h3>
                <button className={classes.button}>Show</button>
            </div>
        </div>
    )
}
export default Baner2;