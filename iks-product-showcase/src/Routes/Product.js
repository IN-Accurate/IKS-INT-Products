import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { productId } = useParams();
  return (
    <div className="routes-product-container">
      <h1 className="header-products">Product</h1>
      <p className="product-id-container">Product ID: {productId}</p>
    </div>
  );
};
