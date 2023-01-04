import { useRef } from 'react';
import './Product.css'

function Product() {
  const productRef = useRef(null);

  return (
    <div className="product-container" id="product-container">Product</div>
  )
}

export default Product