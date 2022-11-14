import React from "react";
import classes from "./NoteItem.module.css";
import cross from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";

const NoteItem = ({ note, remove, changeNoteStatus, mode }) => {
    const textClasses = [classes.note__text];
    const noteClasses = [classes.note];
    const circleClasses = [classes.note__circle];

    if (note.status === "done") {
        textClasses.push(classes.done);
        circleClasses.push(classes.done);
    }

    if (mode === "light") {
        noteClasses.push(classes.light);
        textClasses.push(classes.light);
    }

    return (
        <div className={noteClasses.join(" ")}>
            <div
                className={circleClasses.join(" ")}
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
