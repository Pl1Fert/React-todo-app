import React from "react";
import classes from "./Footer.module.css";

const Footer = ({ listLength, clear, mode }) => {
    const footerClasses = [classes.footer];

    if (mode === "light") {
        footerClasses.push(classes.light);
    }

    return (
        <div className={footerClasses.join(" ")}>
            <div className={classes.footer__items__counter}>
                {listLength} items left
            </div>
            <div className={classes.footer__sort__queries}>
                <p className={classes.footer__sort__query}>All</p>
                <p className={classes.footer__sort__query}>Active</p>
                <p className={classes.footer__sort__query}>Completed</p>
            </div>
            <div className={classes.footer__clear} onClick={() => clear()}>
                <p className={classes.footer__clear__text}>Clear Completed</p>
            </div>
        </div>
    );
};

export default Footer;
