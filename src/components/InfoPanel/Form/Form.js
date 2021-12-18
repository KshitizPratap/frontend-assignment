import React from "react";

import classes from './Form.module.css'

const Form = ({label, validation}) => {

    let inputField = null;

    if(label === "title"){
        inputField = (
            <div className={classes.Title}>
                <label htmlFor={`${label}`}>Title</label><br/>
                <input onChange={validation} type = "text" name={`${label}`} maxLength="25"/>
            </div> 
        )
    }

    else if(label === 'body'){
        inputField = (
            <div className={classes.Body}>
                <label htmlFor={`${label}`}>Body</label><br/>
                <textarea onChange={validation} type = "text" name={`${label}`} maxLength="250"/>
            </div>
        ) 
    }

    return inputField
}

export default Form;