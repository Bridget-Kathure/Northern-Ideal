
import "./index.css";
import ProductCard from "../Atoms/ProductCard";
import { useGetProducts } from "./hooks/useGetProducts";


export const Products = () =>{
    const { products, error, loading } = useGetProducts();
  console.log({ products });
  return (
    <div className="product-images">
      {loading && <h2>Loading Products...</h2>}
      {error && <h2>{error}</h2>}
      {products.length > 0
        ? products.map((product) => (
            <ProductCard
              key={product.description}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          ))
        : !loading && <h2>No products found</h2>}
    </div>
  );
};
