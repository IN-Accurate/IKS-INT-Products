import ProductBox  from './ProductBox'
import './Product.css'


function Product() {
  const BoxContent=[
    {title:'INKED',para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Min T',para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Mint Bucket',para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'MinT forms',para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Mimo',para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'min.Ic',para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
  ]

  const BoxComp=BoxContent.map((dict)=>{
    return <ProductBox text={dict}/>
  })

  
  return (
    <div className="product-container" id="product-container">
      <h1>FEATURED</h1>
      {BoxComp}
      
    </div>
  )
}

export default Product