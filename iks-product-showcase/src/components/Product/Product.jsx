import ProductBox from "./ProductBox";
import "./Product.css";
import { useEffect, useState } from "react";
import { api } from "../../api";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      setLoading(true);
      const response = await api.get(
        "https://iks-backend.onrender.com/products/all"
      );
      const { data } = response.data;
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      await getData();
    })();

    return () => {};
  }, []);

  return (
    <div className="product-container" id="product-container">
      <h1>FEATURED</h1>
      <div className="product-grid">
        {!loading && products.map((product) => <ProductBox text={product} />)}
      </div>
    </div>
  );
}

export default Product;
