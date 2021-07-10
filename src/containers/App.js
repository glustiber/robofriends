import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import AddRobot from '../components/AddRobot';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
            nameField: '',
            emailField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => this.setState({robots:users}))
    }

    /* CLEAN UP - DRY - TOO MUCH REPETITION */
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    onNameChange = (event) => {
        this.setState({ nameField: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ emailField: event.target.value })
    }

    onButtonSubmit = () => {
        const { robots, nameField, emailField } = this.state;
        const robotEntry = [{
            id: robots[robots.length - 1].id + 1,
            name: nameField,
            username: 'test',
            email: emailField
        }];

        this.setState({robots: [...robots, ...robotEntry] })
    }

    removeRobot = (key) => {
        const {robots} = this.state;
        const {index} = key;

        this.setState({
            robots: robots.filter((robot, i) => {
                return i !== index;
            }),
        })
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        
        if (!robots.length) {           // if (robots.length === 0). Ternary?
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <AddRobot 
                        onNameChange={this.onNameChange} 
                        onEmailChange={this.onEmailChange} 
                        onButtonSubmit={this.onButtonSubmit}
                    />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filteredRobots } removeRobot={this.removeRobot} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );    
                            
        }
    }
}

export default App;