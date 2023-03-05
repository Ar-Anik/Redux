import image from "../img/lws-logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <img src={image} alt="logo" className="logo" />
        <div className="flex items-center">
          <NavLink
            className={["text-white min-w-[50px]", "font-medium"].join(" ")}
            to="/"
          >
            Home
          </NavLink>
          <button className="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
