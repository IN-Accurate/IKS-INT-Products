import "./ProductBox.css";

function ProductBox(props) {
  const { text } = props;

  return (
    <div className="product-box">
      <img
        src="https://steeinstad.nl/wp-content/uploads/2017/08/d2-placeholder-1080px.png"
        alt="Product IMG"
      />
      <h2>{text.title}</h2>
      <div className="card-content">
        <div className="flex">
          <p> {text.longtext} </p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
