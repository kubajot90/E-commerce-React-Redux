import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/categorySlice";
import { useSelector } from "react-redux";

import { BsPerson, BsHandbag, BsSuitHeart } from "react-icons/bs";
import classes from "./HeaderMain.module.css";

const HeaderMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeCategoryHash = useSelector((state) => state.category.activeHash);
  const productsAmount = useSelector(
    (state) => state.cart.productsInCart.length
  );
  const favoritesAmount = useSelector(
    (state) => state.favorites.favoritesProductsId.length
    // const favoritesAmount = useSelector(
    //   (state) => [...new Set(state.favorites.favoritesProductsId)].length
  );

  const categories = [
    {
      categoryHash: "#women's_clothing",
      categoryTitle: "Female",
    },
    {
      categoryHash: "#men's_clothing",
      categoryTitle: "Male",
    },
    {
      categoryHash: "#jewelery",
      categoryTitle: "Jewelery",
    },
    {
      categoryHash: "#electronics",
      categoryTitle: "Electronics",
    },
  ];

  const toggleActiveClass = (index) => {
    dispatch(categoryActions.toggleActiveHash(categories[index].categoryHash));
  };

  const moveHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.headerMain}>
      <div className={classes.navigation}>
        {categories.map((element, index) => (
          <HashLink
            to={`/${element.categoryHash}`}
            onClick={() => toggleActiveClass(index)}
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className={`${classes.navigation__Link} ${
              activeCategoryHash === categories[index].categoryHash
                ? classes.navigation__LinkActive
                : ""
            }`}
            key={element.categoryHash}
          >
            {`${element.categoryTitle}`}
          </HashLink>
        ))}
      </div>
      <div className={classes.logo} onClick={moveHome}>
        e·Shop.
      </div>
      <div className={classes.iconBox}>
        <HashLink className={classes.hashLink}>
          <BsPerson className={classes.icon} />
        </HashLink>
        <HashLink to={`/favorites`} className={classes.hashLink}>
          <BsSuitHeart className={classes.icon} />
          {favoritesAmount > 0 && (
            <div className={classes.iconBadge}>{favoritesAmount}</div>
          )}
        </HashLink>
        <HashLink to={`/cart`} className={classes.hashLink}>
          <BsHandbag className={classes.icon} />
          {productsAmount > 0 && (
            <div className={classes.iconBadge}>{productsAmount}</div>
          )}
        </HashLink>
      </div>
    </div>
  );
};
export default HeaderMain;
