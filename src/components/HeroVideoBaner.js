import classes from './HeroVideoBaner.module.css';
import video from "../assets/bgVideo1.mp4";


const HeroVideoBaner =()=>{
    return (
    <div className={classes.videoBox} >
      <video autoPlay loop muted className={classes.headerVideo}>
        <source src={video} type="video/mp4" />
      </video> 
    </div>
    )
}
export default HeroVideoBaner;