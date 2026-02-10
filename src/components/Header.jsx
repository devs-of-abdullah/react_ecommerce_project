import { useState, useEffect } from "react";
import "../css/Header.css";
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { BiLogoShopify } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Header() {
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.getElementById("root");

    if (dark) {
      root.style.backgroundColor = "#000";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "#000";
    }
  }, [dark]);

  return (
    <header
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex-row">
        <BiLogoShopify style={{ fontSize: 50 }} />

        <p
          className="logo-text"
          onClick={() => navigate("/")}
        >
          Abdullah Shop Center
        </p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Search here" />

        <div>
          {dark ? (
            <CiLight className="icon" onClick={() => setDark(false)} />
          ) : (
            <IoIosMoon className="icon" onClick={() => setDark(true)} />
          )}
          <CiShoppingBasket className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
