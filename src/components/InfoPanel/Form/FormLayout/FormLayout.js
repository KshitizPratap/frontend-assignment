import React, {useState} from "react";
import classes from './FormLayout.module.css'
import Form from "../Form";
import axios from "axios";


function FormLayout(props){

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);

    const onTitleChangeHandler = (value) => {
        setTitle(value);
    }

    const onBodyChangeHandler = (value) => {
        setBody(value);
    }
    
    const showFormHandler = () => {
        const temp = showForm;
        setShowForm(!temp);
    }

    const submitHandler = () => {
        const id = props.user.id;
        const item = {title, body, id};

        axios.post("https://jsonplaceholder.typicode.com/posts", item)
            .then(res => console.log(res.data))

        showFormHandler();
    }

    return(
        <div className={classes.MessageContainer}>
            
            <div className={classes.Message}>
                <p style={{fontWeight : "400"}}>Want to send a message?</p>
                <p 
                    className={classes.p1}
                    onClick={showFormHandler}>Message</p>
            </div>
        
            <div 
                className={classes.Form}
                style = {{
                    transform : showForm ? 'translateX(0)' : 'translateX(-50vw)',
                }}>

                <h4>Message</h4>
                <Form label = "title" validation = {(event) => onTitleChangeHandler(event.target.value)}/>
                <Form label = "body" validation = {(event) => onBodyChangeHandler(event.target.value)}/>

                <div className={classes.ButtonContainer}>
                    <button onClick={showFormHandler}>Back</button>
                    <button onClick={submitHandler}>Submit</button>
                </div>
            
            </div>
    </div>
    )
}

export default FormLayout;