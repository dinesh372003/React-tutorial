import React,{Component} from 'react';
// import Check from './Component/Check.js';
import Sidebar from './Component/Sidebar.js';
import './Styles/Sidebar.css';
// import axios from 'axios';
class App extends Component 
{
    state=
    {
      Users:[],
      User:{},
      isLoaded:false
    };

  getUsers=async()=> 
  {
    await fetch('/api/users')
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
if(this.state.isLoaded)
{  return <div> 
      <Sidebar Users={this.state.User} />
    </div>
}
else
{
  return <div>
    Loading...
  </div>
}}}
export default App;

//state
//redux
//road side coder
//git lens