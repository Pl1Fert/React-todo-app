import React from "react";
import classes from "./Todos.module.css";
import sunIcon from "../../images/icon-sun.svg";
import moonIcon from "../../images/icon-moon.svg";
import { useState } from "react";
import MyInput from "../Input/MyInput";
import NoteItem from "../NoteItem/NoteItem";
import NoteList from "../NoteList/NoteList";

const Todos = () => {
    //TODO: implement change theme
    // const [icon, setIcon] = useState([sunIcon, moonIcon]);

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
            <MyInput/>
            <NoteList/>
        </div>
    );
};

export default Todos;
