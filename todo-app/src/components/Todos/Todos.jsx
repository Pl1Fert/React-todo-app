import React from "react";
import classes from "./Todos.module.css";
import sunIcon from "../../images/icon-sun.svg";
import moonIcon from "../../images/icon-moon.svg";
import { useState } from "react";
import MyInput from "../Input/MyInput";
import NoteList from "../NoteList/NoteList";
import Footer from "../Footer/Footer";

const Todos = ({ notes, create, remove }) => {
    //TODO: implement change theme

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <h1 className={classes.container__header__title}>T O D O</h1>
                <img
                    src={sunIcon}
                    alt=""
                    className={classes.change__theme__icon}
                />
            </div>
            <MyInput create={create} />
            <NoteList notes={notes} remove={remove} />
            <Footer listLength={notes.length} />
        </div>
    );
};

export default Todos;
