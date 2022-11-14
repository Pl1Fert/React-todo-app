import React from "react";
import classes from "./Header.module.css";
import darkModeImg from "../../images/bg-desktop-dark.jpg";
import lightModeImg from "../../images/bg-desktop-light.jpg";

const Header = ({ mode }) => {
    return (
        <header className={classes.header}>
            {mode === "dark" ? (
                <img src={darkModeImg} alt="bg" />
            ) : (
                <img src={lightModeImg} alt="bg" />
            )}
        </header>
    );
};

export default Header;
