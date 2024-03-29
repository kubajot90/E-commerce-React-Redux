import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpandListItem from "./ExpandListItem";
import classes from "./CategoriesExpand.module.css";

const CategoriesExpand = (props) => {
  const dataFetch = useSelector((state) => state.products.data);
  const [changeCategory, setChangeCategory] = useState(false);

  useEffect(() => {
    setChangeCategory(true);
    const timer = setTimeout(() => {
      setChangeCategory(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [props.category]);

  const createExpandList = (category) => {
    const product = dataFetch.filter((item) => item.title.includes(category));

    const mainProduct = {
      itemId: product[0].id,
      title: product[0].title,
      category: product[0].category,
    };

    const uniqueCategoryNames = [
      ...new Set(dataFetch.map((item) => item.category)),
    ];

    const otherCategoryNames = uniqueCategoryNames.filter(
      (item) => item !== mainProduct.category
    );

    const currentCategoryItems = dataFetch.filter(
      (item) =>
        item.category === mainProduct.category &&
        item.title !== mainProduct.title
    );

    return (
      <ul className={classes.productsList}>
        <div className={classes.currentCategoryProducts}>
          <h4>{mainProduct.title}</h4>
          <br />
          {currentCategoryItems.map((product) => (
            <ExpandListItem
              key={product.id}
              title={product.title}
              product={product}
            />
          ))}
        </div>

        {otherCategoryNames.map((category) => (
          <div className={classes.otherCategoriesProducts} key={category}>
            <br />
            <h4>{category}</h4>
            {dataFetch
              .filter((item) => item.category === category)
              .map((product) => (
                <ExpandListItem
                  key={product.id}
                  title={product.title}
                  product={product}
                />
              ))}
          </div>
        ))}
      </ul>
    );
  };

  return (
    <div
      onMouseEnter={() => props.onMouseHandler(true)}
      onMouseLeave={() => props.onMouseHandler(false)}
      className={
        !changeCategory
          ? classes.categoriesExpand
          : `${classes.categoriesExpand} ${classes.flashAnimation}`
      }
    >
      {props.category && dataFetch && createExpandList(props.category)}
    </div>
  );
};
export default CategoriesExpand;
