import React from "react";
import classes from "./NoteItem.module.css";
import cross from "../../images/icon-cross.svg";

const NoteItem = (props) => {
    return (
        <div className={classes.note}>
            <div className={classes.note__circle}></div>
            <div className={classes.note__content}>
                <p className={classes.note__text}>{props.note.content}</p>
            </div>
            <img
                src={cross}
                alt="cross"
                className={classes.note__cross__icon}
            />
        </div>
    );
};

export default NoteItem;
