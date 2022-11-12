import React from "react";
import classes from "./NoteItem.module.css";
import cross from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";

const NoteItem = ({ note, remove, changeNoteStatus }) => {
    const textClasses = [classes.note__text];
    
    if (note.status === "done") {
        textClasses.push(classes.done);
    }

    return (
        <div className={classes.note}>
            <div
                className={classes.note__circle}
                onClick={() => changeNoteStatus(note)}
            >
                {note.status === "done" && (
                    <img
                        src={check}
                        alt="check"
                        className={classes.note__check__img}
                    />
                )}
            </div>
            <div className={classes.note__content}>
                <p className={textClasses.join(" ")}>{note.content}</p>
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
