import { useState } from "react";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import "./styles/App.css";

const App = () => {
    const [mode, setMode] = useState("dark");

    return (
        <div
            className="App"
            style={{
                backgroundColor:
                    mode === "dark" ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
            }}
        >
            <Header mode={mode} />
            <Todos mode={mode} changeMode={setMode} />
        </div>
    );
};

export default App;
