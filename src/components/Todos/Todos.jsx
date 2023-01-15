import React from "react";
import classes from "./Todos.module.css";
import sunIcon from "../../images/icon-sun.svg";
import moonIcon from "../../images/icon-moon.svg";
import MyInput from "../Input/MyInput";
import NoteList from "../NoteList/NoteList";
import Footer from "../Footer/Footer";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";

const Todos = ({ mode, changeMode }) => {
    const [notes, setNotes] = useState([]);
    const [query, setQuery] = useState("all");

    const createNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    const removeNote = (note) => {
        setNotes(notes.filter((n) => n.id !== note.id));
    };

    const changeNoteStatus = (note) => {
        const newNotes = notes.map((n) =>
            n.id === note.id
                ? note.status === "active"
                    ? { ...note, status: "completed" }
                    : { ...note, status: "active" }
                : n
        );

        setNotes(newNotes);
    };

    const clearCompletedNotes = () => {
        setNotes(notes.filter((n) => n.status === "active"));
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (
            result.source.droppableId === result.destination.droppableId &&
            result.source.index === result.destination.index
        ) {
            return;
        }

        const newNotes = [...notes];
        const draggedItem = newNotes[result.source.index];
        newNotes.splice(result.source.index, 1);
        newNotes.splice(result.destination.index, 0, draggedItem);

        setNotes(newNotes);
    };

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <h1 className={classes.container__header__title}>T O D O</h1>
                {mode === "dark" ? (
                    <img
                        src={sunIcon}
                        alt="sun"
                        className={classes.change__theme__icon}
                        onClick={() => changeMode("light")}
                    />
                ) : (
                    <img
                        src={moonIcon}
                        alt="moon"
                        className={classes.change__theme__icon}
                        onClick={() => changeMode("dark")}
                    />
                )}
            </div>
            <MyInput create={createNote} mode={mode} />
            <DragDropContext onDragEnd={onDragEnd}>
                <NoteList
                    notes={notes}
                    remove={removeNote}
                    changeNoteStatus={changeNoteStatus}
                    mode={mode}
                    query={query}
                />
            </DragDropContext>
            <Footer
                listLength={notes.length}
                clear={clearCompletedNotes}
                mode={mode}
                query={query}
                setQuery={setQuery}
            />
        </div>
    );
};

export default Todos;
