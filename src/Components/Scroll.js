import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{overflow:'scroll', border:'1px solid white',height:'500px'}}>
            {props.children}
            
        </div>
    )
}

export default Scroll
