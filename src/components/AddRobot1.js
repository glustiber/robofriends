import React, {Component} from 'react';
import './AddRobot.css';

class AddRobot extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            email: ''
        };
        this.state = this.initialState;
    }

    handleFormChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, email } = this.state;

        return (
            <div className='addRobotForm'>
                <p>Add New Robot:</p>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                        value={name}
                        onChange={this.handleFormChange} 
                        />
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={this.handleFormChange} 
                        />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddRobot;