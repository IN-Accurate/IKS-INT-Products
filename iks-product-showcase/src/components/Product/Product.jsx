import ProductBox  from './ProductBox'
import './Product.css'


function Product() {
  const BoxContent=[
    {title:'INKED',shortpara:"Lorem ipsum dolor",longpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Min T',shortpara:"Lorem ipsum dolor",longpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Mint Bucket',shortpara:"Lorem ipsum dolor",longpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'MinT forms',shortpara:"Lorem ipsum dolor",longpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'Mimo',shortpara:"Lorem ipsum dolor",longpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
    {title:'min.Ic',shortpara:"Lorem ipsum dolor",longpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem."},
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