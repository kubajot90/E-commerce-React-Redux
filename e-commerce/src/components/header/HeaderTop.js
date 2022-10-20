import classes from './HeaderTop.module.css'

const HeaderTop =()=>{
return(
    <div className={classes.headerTop}>
      <span className={classes.headerTop__text}>Darmowa dostawa i zwrot</span>
      <span className={classes.headerTop__text}>Wysyłka 24h</span>
      <span className={classes.headerTop__text}>Oszczędzaj z E-commarce Club</span>
      <span className={classes.headerTop__text}>-15% na pierwsze zakupy</span>
    </div>
)
}
export default HeaderTop