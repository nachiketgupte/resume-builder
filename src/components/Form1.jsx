import React from "react";
import { useState } from "react";


function Form1({ onSubmit }) {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

    const handleFNameChange = (e) => {
        setFName(e.target.value);
    }
    const handleLNameChange = (e) => {
        setLName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(fName, lName);
        // setFName('');
        // setLName('');
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Enter your Name</h2>
                <input type="text" value={fName} onChange={handleFNameChange} placeholder="First name"></input>
                <input type="text" value={lName} onChange={handleLNameChange} placeholder="Last name"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form1;