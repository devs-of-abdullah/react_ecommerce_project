import React from 'react'
import "../css/Product.css"
function Product({product}) {
   
    const {id,price,image,title,description} = product;
    return (
    <div className='card' >
        <img  className= 'image' src={image} alt="" />
        <div >
            <p style={{textAlign:"center", height:"100px"}}>{title}</p>
            <p style={{textAlign:"center"}}>{price}€</p>
        </div>
        <div>
            <button className='detailBtn'>More details</button>
        </div>
    </div>
  )
}

export default Product
