import React from 'react';
import Card from './Card';

const CardList = ({robots, removeRobot}) => {
    /*if (true) {
        throw new Error('NOOOOOO!');
    }*/
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            index={i}
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                            removeRobot={removeRobot}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;