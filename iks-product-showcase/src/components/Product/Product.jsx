import ProductBox  from './ProductBox'
import './Product.css'

function Product() {

  return (
    <div className="product-container" id="product-container">
      <h1>FEATURED</h1>
      <ProductBox/>
      <ProductBox/>
      <ProductBox/>
      <ProductBox/>
      <ProductBox/>
      <ProductBox/>
    </div>
  )
}

export default Product