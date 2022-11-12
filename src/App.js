import { useState } from "react";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import "./styles/App.css";

const App = () => {
    const [notes, setNotes] = useState([]);

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
                    ? { ...note, status: "done" }
                    : { ...note, status: "active" }
                : n
        );

        setNotes(newNotes);
    };

    const clearDoneNotes = () => {
        setNotes(notes.filter((n) => n.status === "active"));
    };

    return (
        <div className="App">
            <Header />
            <Todos
                notes={notes}
                create={createNote}
                remove={removeNote}
                changeNoteStatus={changeNoteStatus}
                clear={clearDoneNotes}
            />
        </div>
    );
};

export default App;
