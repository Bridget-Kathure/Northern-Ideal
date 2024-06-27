
import "./index.css";
import ProductCard from "../Atoms";
import { getTheProducts } from "./hooks/getTheProducts";
import { getTheProducts } from "./hooks/getTheProducts";


const Products = () =>{
    const { products, error, loading } = getTheProducts();
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
export default Products;