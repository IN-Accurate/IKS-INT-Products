import { useState } from 'react'
import './ProductBox.css'

function ProductBox(props) {
    const text=props.text
    const [expanded,setExpanded]=useState(false)

    return (
    <div className="product-box">
        <img src="https://steeinstad.nl/wp-content/uploads/2017/08/d2-placeholder-1080px.png" alt="Product IMG" />
        <h2>{text.title}</h2>
        <div className='card-content'>
            <div className="flex">
            {!expanded&&
            <p> {text.shorttext} </p>}
            {expanded&&
            <p> {text.longtext} </p>}
            </div>
            
            <div className="button-container flex">
                {!expanded&&
                <button type="button" className="slide" onClick={()=>setExpanded(!expanded)}>
                    <div>READ MORE</div>
                    <i className="icon-arrow-right">{'>'}</i>
                </button>}
                {expanded&&
                <button type="button" className="slide" onClick={()=>setExpanded(!expanded)}>
                    <div>SHOW LESS</div>
                    <i className="icon-arrow-left">{'<'}</i>
                </button>}
            </div>
            
        </div>
    </div>
  )
}

export default ProductBox