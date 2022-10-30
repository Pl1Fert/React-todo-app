import React from "react";
import classes from "./NoteItem.module.css";

const NoteItem = () => {
    return (
        <div className={classes.note}>
            <div className={classes.note__content}>
                <div className={classes.note__circle}></div>
                <p className={classes.note__text}>Content</p>
            </div>
        </div>
    );
};

export default NoteItem;
