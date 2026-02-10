import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/slices/productSlice";
import Loading from "./Loading";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
    const [count,setCount] = useState(0);
  const { products, selectedProduct, loading } = useSelector(
    (state) => state.product,
  );

  useEffect(() => {
    if (!products.length) return;

    const product = products.find((p) => p.id === Number(id));
    if (product) {
      dispatch(setSelectedProduct(product));
    }
  }, [id, products, dispatch]);

  if (loading || !selectedProduct) {
    return <Loading />;
  }

  const { title, price, image, description } = selectedProduct;

  return (
    <div
      className="flex-row"
      style={{ border: "1px solid ", borderRadius: 15, marginTop: "30px" }}
    >
      <img src={image} alt={title} width={250} style={{ padding: 10 }} />
      <div style={{ margin: 30 }}>
        <h1 style={{ fontFamily: "arial" }}>{title}</h1>
        <p style={{ fontSize: 15 }}>{description}</p>
        <strong style={{ fontSize: 50, color: "red" }}>{price} €</strong>
        <div style={{ fontSize: 40, display: "flex", alignItems: "center" }}>
          <CiCircleMinus onClick={()=>{
            if(count == 0) return;
            setCount(count - 1);
          }} style={{ cursor: "pointer" }} />
          <span style={{ margin: 10 }}>{count}</span>
          <CiCirclePlus onClick={()=> {
             if (count == 5) return;
            setCount(count + 1)}
            } style={{ cursor: "pointer" }} />
        </div>
        <button style={{cursor:"pointer",fontSize:20,padding:10,borderRadius:20, color: "white", backgroundColor: "red" }}>
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
