
import "./ProductBox.css";

function ProductBox(props) {
  const { text } = props;
  return (
    <div className="product-box">
      <img src={text.image} alt="Product IMG" />
      <h2>{text.name}</h2>
      <div className="card-content">
        <div className="flex">
          <p> {text.description} </p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
