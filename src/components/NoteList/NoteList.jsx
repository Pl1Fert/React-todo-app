import React from "react";
import classes from "./NoteList.module.css";
import NoteItem from "../NoteItem/NoteItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Droppable } from "react-beautiful-dnd";

const NoteList = ({ notes, remove, changeNoteStatus, mode, query }) => {
    let newNotes = [];

    if (query === "all") {
        newNotes = notes;
    } else {
        newNotes = notes.filter((n) => n.status === query);
    }

    return (
        <Droppable droppableId={classes.noteList}>
            {(provided) => (
                <div
                    className={classes.noteList}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <TransitionGroup>
                        {newNotes.map((note, index) => (
                            <CSSTransition
                                key={note.id}
                                timeout={400}
                                classNames="note"
                            >
                                <NoteItem
                                    note={note}
                                    remove={remove}
                                    changeNoteStatus={changeNoteStatus}
                                    mode={mode}
                                    index={index}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    {!newNotes.length && (
                        <h1 className={classes.noNotes__title}>No Notes</h1>
                    )}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default NoteList;
