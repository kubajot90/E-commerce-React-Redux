import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { categoryActions } from '../../store/categorySlice';
import classes from './HeroVideoBaner.module.css';
import video from "../../assets/bgVideo1.mp4";


const HeroVideoBaner =()=>{
  const videoBanerRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const ref = videoBanerRef.current;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if(entry.isIntersecting){
                navigate(`/`);
                dispatch(categoryActions.toggleActiveHash(null));
            }
        },
    );
    ref && observer.observe(ref);

    return () => observer.unobserve(ref);
}, []);

    return (
    <div ref={videoBanerRef} className={classes.videoBox} >
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