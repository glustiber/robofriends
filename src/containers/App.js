import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import AddRobot1 from '../components/AddRobot1';
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
        //console.log(this.state.formFields.name);
    }
    
    /*handleFormChange = (event) => {
        console.log(event.target);
    }*/

    handleSubmit = newRobot => {
        console.log(newRobot);
        console.log(this.state.robots);
        const { robots } = this.state;
        /*const updatedRobots = robots.push({
            id: robots.length+1,
            name: newRobot.name,
            username: 'test',
            email: newRobot.email
        });
        console.log(updatedRobots);*/
        const robotEntry = [{
            id: robots.length+1,
            name: newRobot.name,
            username: 'test',
            email: newRobot.email
        }];
        console.log(robotEntry);
        //NEED LOGIC TO UPDATE ROBOT LIST WITH NEW ENTRY, MAYBE IN RENDER?
        //this.setState({robots: [...this.state.robots, robotEntry] })
        //this.setState({ robots: updatedRobots } );
        /*this.setState({
            robots: robots.push({
                id: robots.length+1,
                name: newRobot.name,
                username: 'test',
                email: newRobot.email
            })
        })*/
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
        //const { formFields.name, formFields.email } = this.state;
        if (!robots.length) {           // if (robots.length === 0). 
            return <h1>Loading</h1>     // Can also make this into a ternary
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <AddRobot1 handleSubmit={this.handleSubmit}/>
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