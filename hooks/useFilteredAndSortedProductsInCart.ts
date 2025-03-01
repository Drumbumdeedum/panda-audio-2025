import { useProductCartStore } from "@/store/cart";
import { useCurrencyStore } from "@/store/currency";

const useFilteredAndSortedProductsInCart = () => {
  const { products } = useProductCartStore();
  const { currency } = useCurrencyStore();
  const filteredProducts =
    currency === "USD" ? products.filter((p) => p.prices.usd !== 0) : products;
  filteredProducts.sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0));
  return filteredProducts;
};

export default useFilteredAndSortedProductsInCart;
