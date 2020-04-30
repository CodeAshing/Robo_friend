import React from 'react'

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--yellow bg-lightest-yellow'
                onChange={searchChange}
                type='search' 
                placeholder='Search Robots'
            />            
        </div>
    )
}

export default SearchBox
