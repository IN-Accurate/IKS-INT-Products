import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import "./index.css";

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await api.get(`/product/${productId}`);
      setProduct(data.data);
      setIsLoading(false);
    })();

    return () => {
      setProduct(null);
      setIsLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="products-container">
        {isLoading && <div className="loader"></div>}
        {product && (
          <>
            <img
              src={product.image || "https://via.placeholder.com/400x300"}
              alt="Product IMG"
            />
            <div className="product-details">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
