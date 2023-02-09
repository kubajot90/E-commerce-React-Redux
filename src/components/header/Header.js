import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderCategories from "./headerCategories/HeaderCategories";
import HeaderSearch from "./search/HeaderSearch";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <div className={classes.header}>
        <HeaderMain />
        <HeaderCategories />
        <HeaderSearch />
      </div>
    </>
  );
};
export default Header;
