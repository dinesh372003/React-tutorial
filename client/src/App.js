import React,{Component} from 'react';
import Check from './Component/Check.js';
import Sidebar from './Component/Sidebar.js';
import './Styles/Sidebar.css';
import axios from 'axios';
class App extends Component 
{
    state=
    {
      Users:[],
    };

  fetchBooks=()=> 
  {
    fetch('/users')
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
        console.log(this.state);    
      })
  }

  componentDidMount() 
  {
    this.fetchBooks(this);
  }
    
  render()
  {  

  return <div> 

      <Sidebar />
      {/* {Users.map(book => (
        <li key={book.id}>{book.name}</li>  
       ))} */}
    </div>
}}
export default App;

//state
//redux
//road side coder
//git lens