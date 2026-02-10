import "./css/App.css";
import PageContainer from "./container/PageContainer";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateBasket,
  setDrawer,
  removeFromBasket,
  clearBasket,
} from "./redux/slices/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [products, dispatch]);

  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Loading />

      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => dispatch(setDrawer(false))}
      >
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{ border: "1px solid" }}
              className="flex-row"
            >
              <img
                style={{ margin: "10px" }}
                src={product.image}
                width={50}
                height={50}
                alt={product.title}
              />

              <p style={{ width: "300px" }}>{product.title}</p>

              <p style={{ width: "50px", margin: 10 }}>({product.quantity})</p>

              <p style={{ width: "50px", marginRight: "10px" }}>
                price:
                <br />
                <b>{product.price}</b>
              </p>

              <p style={{ margin: 15 }}>
                Total:
                <br />
                <b>{product.quantity * product.price} €</b>
              </p>

              <button
                onClick={
                  () => dispatch(removeFromBasket(product.id)) 
                }
                style={{
                  cursor: "pointer",
                  backgroundColor: "red",
                  marginRight: "10px",
                  width: "30px",
                  color: "white",
                  border: "none",
                }}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p style={{ padding: "15px" }}>Basket is empty</p>
        )}

        <div className="flex-row">
          <div style={{ padding: "10px", fontWeight: "bold" }}>
            Total Price: {totalAmount} €
          </div>

          <button
            onClick={() => dispatch(clearBasket())}
            style={{
              cursor: "pointer",
              backgroundColor: "green",
              margin: "10px",
              width: "200px",
              color: "white",
              borderRadius: "10px",
              fontSize: "24px",
            }}
          >
            Order
          </button>
        </div>
      </Drawer>
    </PageContainer>
  );
}

export default App;
