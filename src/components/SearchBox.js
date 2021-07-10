import React from 'react';

const SearchBox = ({searchField, onSearchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={(e) => onSearchChange('searchField', e)}
            />
        </div>
    );
}

export default SearchBox;