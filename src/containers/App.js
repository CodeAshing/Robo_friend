import React, { Component, } from 'react';
import './App.css';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      search:''
    }
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>{
      this.setState({
        robots:users
      })
    })   
  }

  searchChange=(event)=>{
    this.setState({ search:event.target.value})
    }

  render(){

    const {robots,search}=this.state
      const filterRobots=robots.filter(robot=>{
        return(  
            robot.name.toLowerCase().includes(search.toLowerCase())
        )
    })

    return !robots.length? 
    <h1 className='tc'>Loading</h1> :    
       (
        <div className="tc">
          <h1 className='f1'>RoboFriend</h1>
          <SearchBox searchChange={this.searchChange}/>
          <Scroll>
          <CardList robots={filterRobots}/>
          </Scroll>
        </div>
      );
    }
      
}


export default App;
