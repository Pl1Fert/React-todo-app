import React from "react";
import classes from "./Footer.module.css";

const Footer = ({ listLength }) => {

    return (
        <div className={classes.footer}>
            <div className={classes.footer__items__counter}>
                {listLength} items left
            </div>
            <div className={classes.footer__sort__queries}>
                <p className={classes.footer__sort__query}>All</p>
                <p className={classes.footer__sort__query}>Active</p>
                <p className={classes.footer__sort__query}>Completed</p>
            </div>
            <div className={classes.footer__clear}>
                <p className={classes.footer__clear__text}>Clear Completed</p>
            </div>
        </div>
    );
};

export default Footer;
