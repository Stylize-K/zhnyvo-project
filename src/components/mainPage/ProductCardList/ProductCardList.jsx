import { ProductCard } from "../ProductCard";
import { useSelector } from "react-redux";

import {
  selectProducts,
  //   selectIsLoading,
  //   selectError,
} from "../../../redux/products/selectors";

import { List } from "./ProductCardList.styled";

export const ProductCardList = () => {
  const products = useSelector(selectProducts);
  //   const isLoading = useSelector(selectIsLoading);
  //   const error = useSelector(selectError);
  return (
    // <List>
    //   {!isLoading && !error ? (
    //     <p>No data!</p>
    //   ) : (
    //     products.map((product) => (
    //       <ProductCard key={product.id} product={product} />
    //     ))
    //   )}
    //   </List>
    <List>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
};
