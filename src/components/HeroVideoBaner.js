import classes from './HeroVideoBaner.module.css';
import video from "../assets/bgVideo1.mp4";


const HeroVideoBaner =()=>{
    return (
    <div className={classes.videoBox} >
      <video autoPlay loop muted className={classes.headerVideo}>
        <source src={video} type="video/mp4" />
      </video> 
      <div className={classes.title}>
        <p>E-SHOP DAYS</p>
        <p>DISCOUNT -50%</p>
        <button>check offer</button>
      </div>
    </div>
    )
}
export default HeroVideoBaner;