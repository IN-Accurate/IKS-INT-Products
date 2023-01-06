import "./ProductBox.css";
import { useNavigate } from "react-router-dom";

function ProductBox(props) {
  const { text } = props;
  const navigate = useNavigate();
  return (
    <div className="product-box">
      <div className="image-container"><img
        src={text.image || "https://via.placeholder.com/400x300"}
        alt="Product IMG"
      /></div>
      
      <h2>{text.name}</h2>
      <div className="card-content">
        <div className="flex">
          <p> {text.description} </p>
          <button
            onClick={() => {
              navigate(`/product/${text._id}`);
            }}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
