import React,{Component} from 'react';
import Sidebar from './Component/Sidebar.js';
import './Styles/Sidebar.css';
import Navbar from'./Component/Navbar.js';
import ClassList from './Component/ClassList.js';
class App extends Component 
{
    state=
    {
      Users:[],
      User:{},
      isLoaded:false
    };

  getUsers=()=> 
  {
    fetch('/api/users')
    .then(res=>
      {
        if(res.ok)
        {
          return res.json();
        }
      })
    .then(data=>
      {
        this.setState({Users:data});
        for(var i=0;i<this.state.Users.length;i++)
        {
          if(this.state.Users[i].email==="dinesh372003@gmail.com")
          {
            this.setState({User:this.state.Users[i]})
            this.setState({isLoaded:true})
          }
        }
      })
  }

  componentDidMount() 
  {
    this.getUsers(this);
  } 
  
   
  render()
  {
  var contentstyle=
  {
    display:"inline-block",
    position:"fixed",
    width:"calc(100%-17rem)",
    left:"17rem",
    top:"0",
    right:"0",
    height:"100%",
  }    
   return(
      <div>
        <Sidebar Users={this.state.User} isLoaded={this.state.isLoaded} />
        
        <div className="contents" style={contentstyle}>
            <Navbar isLoaded={this.state.isLoaded}/>
            <ClassList isLoaded={this.state.isLoaded}/>
        </div>
      </div >
      )
 
 }}
export default App;

//state
//redux
//road side coder
//git lens
//next js
//spread operator