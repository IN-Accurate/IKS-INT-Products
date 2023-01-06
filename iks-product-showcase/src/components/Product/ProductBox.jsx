import "./ProductBox.css";
import { useNavigate } from "react-router-dom";

function ProductBox(props) {
  const { text } = props;
  const navigate = useNavigate();
  console.log(text);
  return (
    <div className="product-box">
      <img src={text.image} alt="Product IMG" />
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
