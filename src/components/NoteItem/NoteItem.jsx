import React from "react";
import classes from "./NoteItem.module.css";
import cross from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";

const NoteItem = ({ note, remove }) => {
    //TODO: implement change status onClick
    
    return (
        <div className={classes.note}>
            <div className={classes.note__circle}>
                {note.status === "done" && <img src={check} alt="check" className={classes.note__check__img}/>}
            </div>
            <div className={classes.note__content}>
                <p className={classes.note__text}>{note.content}</p>
            </div>
            <img
                src={cross}
                alt="cross"
                className={classes.note__cross__icon}
                onClick={() => remove(note)}
            />
        </div>
    );
};

export default NoteItem;
