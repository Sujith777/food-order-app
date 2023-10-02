import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Ichiraku no Inshoku-ten</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of tasty meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
