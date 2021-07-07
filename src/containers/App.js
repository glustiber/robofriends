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
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    handleSubmit = newRobot => {
        const { robots } = this.state;
        const robotEntry = [{
            id: robots[robots.length - 1].id + 1,
            name: newRobot.name,
            username: 'test',
            email: newRobot.email
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
                    <AddRobot handleSubmit={this.handleSubmit}/>
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