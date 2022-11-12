import React from "react";
import classes from "./NoteList.module.css";
import NoteItem from "../NoteItem/NoteItem";

const NoteList = ({ notes, remove, changeNoteStatus }) => {
    if (!notes.length) {
        return <h1 className={classes.noNotes__title}>No Notes</h1>;
    }

    console.log(notes);

    return (
        <div className={classes.noteList}>
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    remove={remove}
                    changeNoteStatus={changeNoteStatus}
                />
            ))}
        </div>
    );
};

export default NoteList;
