import React from "react";
import classes from "./NoteList.module.css";
import NoteItem from "../NoteItem/NoteItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const NoteList = ({ notes, remove, changeNoteStatus, mode }) => {

    return (
        <div className={classes.noteList}>
            <TransitionGroup>
            {notes.map((note) => (
                <CSSTransition
                key={note.id}
                timeout={400}
                classNames='note'
                >
                <NoteItem
                    note={note}
                    remove={remove}
                    changeNoteStatus={changeNoteStatus}
                    mode={mode}
                />
                </CSSTransition>
            ))}
            </TransitionGroup>
            {!notes.length && <h1 className={classes.noNotes__title}>No Notes</h1>}
        </div>
    );
};

export default NoteList;
