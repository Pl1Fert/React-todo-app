import React from "react";
import { useState } from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ create, mode }) => {
    const [note, setNote] = useState({ content: "" });

    const inputClasses = [classes.myInput];

    if (mode === "light") {
        inputClasses.push(classes.light);
    }

    const addNewNote = () => {
        const newNote = {
            ...note,
            id: Date.now(),
            status: "active",
        };

        create(newNote);
        setNote({ content: "" });
    };

    return (
        <input
            type="text"
            value={note.content}
            className={inputClasses.join(" ")}
            placeholder="Create a new todo..."
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    if (e.target.value.length > 0) {
                        addNewNote();
                    }
                }
            }}
        />
    );
};

export default MyInput;
