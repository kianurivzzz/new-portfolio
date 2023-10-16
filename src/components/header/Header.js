// libs
import { NavLink } from "react-router-dom";

// styles
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Nikita</em>
          </strong>
          <br />a full-stack developer
        </h1>
        <div className="header__text">
          <p>and courses author</p>
        </div>
        <NavLink to="/contacts" className="btn">
          Contact me!
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
