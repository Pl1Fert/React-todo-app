import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import "./styles/App.css";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Todos/>
        </div>
    );
}

export default App;
