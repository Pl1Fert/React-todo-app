import React from "react";
import classes from "./MyInput.module.css";

const MyInput = () => {
    return (
        <input 
            className={classes.myInput} 
            placeholder="Create a new todo..." 
        />
    );
};

export default MyInput;
