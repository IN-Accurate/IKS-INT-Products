import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import "./index.css";

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/product/${productId}`);
      setProduct(data.data);
    })();

    return () => {
      setProduct(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="products-container">
        {product && (
          <>
            <img src="https://picsum.photos/200/300" />
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
