import React from 'react';
import './AddRobot.css';

const AddRobot = ({handleSubmit}) => {
    return (
        <div className='addRobotForm'>
            <p>Add New Robot:</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    //value={formChange}
                    //onChange={this.handleFormChange} 
                    />
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    //value={formChange}
                    //onChange={this.handleFormChange} 
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddRobot;