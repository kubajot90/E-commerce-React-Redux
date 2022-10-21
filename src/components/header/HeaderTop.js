import classes from './HeaderTop.module.css'

const HeaderTop =()=>{
return(
    <div className={classes.headerTop}>
      <span className={classes.headerTop__text}>Free return</span>
      <span className={classes.headerTop__text}>Shipping 24h</span>
      <span className={classes.headerTop__text}>Save with E-commerce Club</span>
      <span className={classes.headerTop__text}>-15% on the first purchase</span>
    </div>
)
}
export default HeaderTop