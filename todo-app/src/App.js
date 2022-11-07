import { useState } from "react";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import "./styles/App.css";

const App = () => {
    const [notes, setNotes] = useState([]);

    const createNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    return (
        <div className="App">
            <Header />
            <Todos notes={notes} create={createNote} />
        </div>
    );
};

export default App;
