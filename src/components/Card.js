import React from 'react';

const Card = ({ name, email, id, index, removeRobot }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
            <button onClick={() => removeRobot({index}) }>Delete</button>
        </div>
    );
}

export default Card;