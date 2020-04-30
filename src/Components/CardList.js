import React from 'react'
import Card from './Card'
const CardList = ({robots}) => {

      const list= robots.map(item=>{
      return(
        <Card key={item.id} 
        id={item.id}  
        name={item.name} 
        username={item.username} 
        email={item.email}/>
      )
    })  
    return (
        <div>            
         {list}
        </div>
    )
}

export default CardList
