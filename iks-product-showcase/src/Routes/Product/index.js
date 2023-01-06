import { useParams } from "react-router-dom";
import "./index.css";

export const ProductPage = () => {
  const { productId } = useParams();
  return (
    <div className="products-container">
      <img src="https://picsum.photos/200/300" />
      <div className="product-details">
        <h1>Product Name</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or- less normal distribution
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English. Many desktop pu blishing packages and
          web page editors now use Lorem Ipsum as their default model text, and
          a search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, somet imes by
          accident, sometimes on purpose (inj humour and the like).
        </p>
      </div>
    </div>
  );
};
