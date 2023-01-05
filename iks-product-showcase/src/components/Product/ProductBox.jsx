// import { useRef } from 'react';
import { useState } from 'react'
import './ProductBox.css'

function ProductBox(props) {
    const text=props.text
    const [toggle,settoggle]=useState(false)
    const bookmark=[
        "/Media/book_hollow.svg",
        "/Media/book_solid.svg"
    ]


    return (
    <div className="product-box">
        <img src="https://steeinstad.nl/wp-content/uploads/2017/08/d2-placeholder-1080px.png" alt="Product IMG" />
        <h2>{text.title}</h2>
        <div className='card-content'>
            <div class="flex">
            <p> {text.para} </p>
            <div className="icon-container">
                <img src={toggle ? bookmark[0] : bookmark[1]} alt="" onClick={()=>settoggle(!toggle)}/>
            </div>
            </div>
            
            <div className="button-container flex">
                <button type="button" class="slide">
                    <div>READMORE</div>
                    <i class="icon-arrow-right">{'>'}</i>
                </button>
                <button type="button" class="slide">
                    <div>LIKE</div>
                    <i class="icon-arrow-right">❤</i>
                </button>
                
            </div>
            
        </div>
    </div>
  )
}

export default ProductBox