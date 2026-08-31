import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header() {
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR logo" />
      <p className="header__date-and-location">{currentDate}, Rochester, MN</p>
      <button className="header__add-clothes-btn" type="button">
        + Add Clothes
      </button>
      <p className="header__username">Terrence Tegegne</p>
      <img className="header__avatar" src={avatar} alt="User avatar" />
    </header>
  );
}

export default Header;
