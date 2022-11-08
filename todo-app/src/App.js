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

    return (
        <div className="App">
            <Header />
            <Todos notes={notes} create={createNote} remove={removeNote} />
        </div>
    );
};

export default App;
