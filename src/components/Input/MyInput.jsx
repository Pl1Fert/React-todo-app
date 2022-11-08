import React from "react";
import { useState } from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ create }) => {
    const [note, setNote] = useState({ content: "" });

    const addNewNote = () => {
        const newNote = {
            ...note,
            id: Date.now(),
            status: "active"
        };

        create(newNote);
        setNote({ content: "" });
    };

    return (
        <input
            type="text"
            value={note.content}
            className={classes.myInput}
            placeholder="Create a new todo..."
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    addNewNote();
                }
            }}
        />
    );
};

export default MyInput;
