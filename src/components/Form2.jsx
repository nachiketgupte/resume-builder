import React from "react";
import { useState } from "react";


function Form2({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [city, setCity] = useState();
    const [state, setState] = useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setphoneNo(e.target.value);
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    const handleStateChange = (e) => {
        setState(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email, phoneNo, city, state);
        // setFName('');
        // setLName('');
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Enter your Name</h2>
                <input type="text" value={email} onChange={handleEmailChange} placeholder = "example@email.com" ></input>
                <input type="text" value={phoneNo} onChange={handlePhoneChange} placeholder = "9876543210" ></input>
                <input type="text" value={city} onChange={handleCityChange} placeholder = "Mumbai" ></input>
                <input type="text" value={state} onChange={handleStateChange} placeholder = "Maharashtra" ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form2;