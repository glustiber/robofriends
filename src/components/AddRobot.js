import React from 'react';
import './AddRobot.css';

const AddRobot = () => {
    return (
        <div className='addRobotForm'>
            <p>Add New Robot:</p>
            <form>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    //value={name}
                    //onChange={this.handleChange} 
                    />
                    <br/>
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    //value={job}
                    //onChange={this.handleChange} 
                    />
            </form>
            <a class="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib bg-lightest-blue" href="#0">Add Robot</a>
        </div>
    );
}

export default AddRobot;