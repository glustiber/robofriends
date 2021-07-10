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
                    onChange={(e) => onNameChange('nameField', e)} 
                    />
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    onChange={(e) => onEmailChange('emailField', e)} 
                    />
                <button type="submit" onClick={onButtonSubmit} >Submit</button>
            </div>
        </div>
    );
}

export default AddRobot;