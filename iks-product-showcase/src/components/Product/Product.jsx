import ProductBox from "./ProductBox";
import "./Product.css";
import axios from 'axios';


function Product() {
const BoxContent = [];

async function getData() {
  try {
    const response = await axios.get('http://localhost:3000/products/all');
    const data = response.data;
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const name = data[i].name;
      const shorttext = data[i].description.slice(0,32);
      const longtext = data[i].description;
      const image = data[i].image;

      BoxContent.push({ name, shorttext,longtext, image });
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
