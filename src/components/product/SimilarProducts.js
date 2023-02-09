import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductsSlider from "../main/productsSlider/ProductsSlider";
import classes from "./SimilarProducts.module.css";

const SimilarProducts = () => {
  const location = useLocation();
  const { category } = location.state;
  const fetchProducts = useSelector((state) => state.products.data);

  return (
    <div className={classes.product__similar}>
      <p className={classes.similar__title}>Similar products</p>
      {fetchProducts && <ProductsSlider category={category} observer={false} />}
    </div>
  );
};

export default SimilarProducts;
