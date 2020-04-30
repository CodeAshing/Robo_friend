import React, { Component, } from 'react';
import './App.css';
import {connect} from 'react-redux'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import { setSearchField } from '../actions';


const mapStateToProps=state=>{
  return{
    searchField:state.searchField
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      searchChange:(event)=>dispatch(setSearchField(event.target.value ))
  }

}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      robots:[]
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

  

  render(){

    const {robots}=this.state
    const {searchField,searchChange}=this.props
      const filterRobots=robots.filter(robot=>{
        return(  
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        )
    })

    return !robots.length? 
    <h1 className='tc'>Loading</h1> :    
       (
        <div className="tc">
          <h1 className='f1'>RoboFriend</h1>
          <SearchBox searchChange={searchChange}/>
          <Scroll>
              <CardList robots={filterRobots}/>
          </Scroll>
        </div>
      );
    }
      
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
