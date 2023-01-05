import ProductBox  from './ProductBox'
import './Product.css'


function Product() {
  const BoxContent=[
    {title:'INKED',shorttext:"Lorem ipsum dolor",longtext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Min T',shorttext:"Lorem ipsum dolor",longtext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Mint Bucket',shorttext:"Lorem ipsum dolor",longtext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'MinT forms',shorttext:"Lorem ipsum dolor",longtext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Mimo',shorttext:"Lorem ipsum dolor",longtext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'min.Ic',shorttext:"Lorem ipsum dolor",longtext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
  ]

  const BoxComp=BoxContent.map((dict,key)=>{
    return <ProductBox text={dict} key={key}/>
  })

  
  return (
    <div className="product-container" id="product-container">
      <h1>FEATURED</h1>
      {BoxComp}
      
    </div>
  )
}

export default Product