import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { productId } = useParams();
  return (
    <div className="App">
      <h1>Product</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};
