import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HeroVideoBaner from "./HeroVideoBaner";
import ProductsSlider from "./ProductsSlider";
import fetchProductsData from "../../store/productsSlice";
import InfoCards from "./InfoCards";
import Baner1 from "./baners/Baner1";
import Baner2 from "./baners/Baner2";

const Main = () => {
  const fetchProducts = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  return (
    <>
      <Baner1 />
      {fetchProducts && (
        <ProductsSlider
          category={"women's clothing"}
          title={"women's clothing"}
          observer={true}
        />
      )}
      <HeroVideoBaner />
      {fetchProducts && (
        <ProductsSlider
          category={"men's clothing"}
          title={"men's clothing"}
          observer={true}
        />
      )}
      <Baner2 />
      {fetchProducts && (
        <ProductsSlider
          category={"jewelery"}
          title={"jewelery"}
          observer={true}
        />
      )}
      <InfoCards />
    </>
  );
};
export default Main;
