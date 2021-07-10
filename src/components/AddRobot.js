import React from 'react';
import './AddRobot.css';

const AddRobot = ({ onNameChange, onEmailChange, onButtonSubmit }) => {
    return (
        <div className='addRobotForm'>
            <p>Add New Robot:</p>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    onChange={onNameChange} 
                    />
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    onChange={onEmailChange} 
                    />
                <button type="submit" onClick={onButtonSubmit} >Submit</button>
            </div>
        </div>
    );
}

export default AddRobot;