import React from 'react'
import "../css/Product.css"
import { useNavigate } from 'react-router-dom';
function Product({product}) {
   
    const {id,price,image,title} = product;
    const navigate = useNavigate();

    return (
    <div className='card' >
        <img  className= 'image' src={image} />
        <div >
            <p style={{textAlign:"center", height:"100px"}}>{title}</p>
            <p style={{textAlign:"center"}}>{price}€</p>
        </div>
        <div>
            <button onClick={()=> navigate("/products/"+ id)} className='detailBtn'>More details</button>
        </div>
    </div>
  )
}

export default Product
