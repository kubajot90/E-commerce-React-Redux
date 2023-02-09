import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import classes from "./BreadCrumbs.module.css";

const BreadCrumbs = () => {
  const location = useLocation();
  const { title, category } = location.state;
  const categoryUrl = category.replace(/\s/g, "_");

  return (
    <ul className={classes.breadCrumbs__list}>
      <li className={classes.breadCrumbs__item}>
        <Link to={"/"} className={classes.breadCrumbs__link}>
          <span className={classes.breadCrumbs__span}>e-Shop</span>
        </Link>
        <span className={classes.breadCrumbs__arrow}>{`>`}</span>
      </li>
      <li>
        <HashLink to={`/#${categoryUrl}`} className={classes.breadCrumbs__link}>
          <span className={classes.breadCrumbs__span}>{category}</span>
        </HashLink>
        <span className={classes.breadCrumbs__arrow}>{`>`}</span>
      </li>
      <li>
        <span className={`${classes.breadCrumbs__span} ${classes.active}`}>
          {title}
        </span>
      </li>
    </ul>
  );
};

export default BreadCrumbs;
