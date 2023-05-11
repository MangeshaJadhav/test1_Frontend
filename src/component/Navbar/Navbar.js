import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItem.js";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <div className="NavbarItems">
        <h1 className="navbar-logo">
          Acquaint<span>e-Shop</span>
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          {/* if(click){<MenuIcon />}else{<CancelIcon />} */}
          {click ? <CancelIcon /> : <MenuIcon />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cNmae} to={item.url}>
                  {item.icons}
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/">
            <button>Sign Up</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
/**
 * whenwe used the link tag then we need to use the  brouser tag in app router
 * when we import data then we need use curly braces
 *
 */
