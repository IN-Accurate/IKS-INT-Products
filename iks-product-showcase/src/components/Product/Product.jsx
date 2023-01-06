import ProductBox from "./ProductBox";
import "./Product.css";
import axios from 'axios';


function Product() {
const BoxContent = [];

async function getData() {
  try {
    const response = await axios.get('https://iks-backend.onrender.com/products/all');
    console.log(response.data.data);
    const data=response.data.data;
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name;
      const description=data[i].description;
      const image = data[i].image;
      BoxContent.push({ name, description, image });
    }
  } catch (error) {
    console.error(error);
  }
}

getData();


  return (
    <div className="product-container" id="product-container">
      <h1>FEATURED</h1>
      <div className="product-grid">
        {BoxContent.map((dict, key) => (
          <ProductBox text={dict} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Product;
