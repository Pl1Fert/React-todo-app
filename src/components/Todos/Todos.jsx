import React from "react";
import classes from "./Todos.module.css";
import sunIcon from "../../images/icon-sun.svg";
import moonIcon from "../../images/icon-moon.svg";
import MyInput from "../Input/MyInput";
import NoteList from "../NoteList/NoteList";
import Footer from "../Footer/Footer";

const Todos = ({
    notes,
    create,
    remove,
    changeNoteStatus,
    clear,
    mode,
    changeMode,
}) => {
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
            <MyInput create={create} mode={mode} />
            <NoteList
                notes={notes}
                remove={remove}
                changeNoteStatus={changeNoteStatus}
                mode={mode}
            />
            <Footer listLength={notes.length} clear={clear} mode={mode} />
        </div>
    );
};

export default Todos;
