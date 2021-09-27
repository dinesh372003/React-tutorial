import React,{Component} from 'react';
import Sidebar from './Component/Sidebar.js';
import './Styles/Sidebar.css';
import Navbar from'./Component/Navbar.js';
import ClassList from './Component/ClassList.js';
import Classdetails from './Component/Classdetails.js';
import { 
    BrowserRouter as Router, 
    Route,
    Switch,
} from 'react-router-dom'

class App extends Component 
{
    state=
    {
      User:{},
      Class:[],
      isLoaded:false
    };
//Fetching Users data
  getdatas=()=> 
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
        // Checking for user data and storing it seperately
        for(var i=0;i<data.length;i++)
        {
          if(data[i].email==="dinesh372003@gmail.com")
          {
            this.setState({User:data[i]})
          }
        }
      })

      //Fetching Class datas
      fetch('/api/classes')
      .then(res=>
        {
          if(res.ok)
          {
            return res.json();
          }
        })
      .then(datas=>
        {
          // Checking for user data and storing it seperately
          for(var i=0;i<this.state.User.classes.length;i++)
          {
              for(var j=0;j<datas.length;j++)
              {
                if(datas[j]._id===this.state.User.classes[i])
                {
                  this.setState({ Class:[...this.state.Class,datas[j]]})
                }
              }
              if(i===this.state.User.classes.length-1)
              {
                this.setState({isLoaded:true});
              }
          }
        })
  }

  componentDidMount() 
  {
    //Calling the fetch function
    this.getdatas(this);
  } 
  
   
  render()
  {
    //Style for the content
    // Since it might get changed it is done here
  var contentstyle=
  {
    display:"inline-block",
    position:"fixed",
    width:"calc(100%-17rem)",
    left:"17rem",
    top:"0",
    overflowY:"auto",
    right:"0",
    height:"100%",
  }    
   return(
     <div>
        <Router>
        <Sidebar 
          Users={this.state.User} 
          Classes={this.state.Class} 
          isLoaded={this.state.isLoaded} 
          />
        
        <div className="contents" style={contentstyle}>
                <Switch>
                    <Route exact path="/">
                        <Navbar 
                            isLoaded={this.state.isLoaded}
                            place={"Dashboard"}
                            inDashboard={true}
                        />
                        <ClassList 
                            isLoaded={this.state.isLoaded}
                            Classes={this.state.Class} 
                            Users={this.state.User}
                        />
                    </Route>
                    <Route path="/:id">
                        <Navbar 
                            isLoaded={this.state.isLoaded}
                        />
                        <Classdetails 
                            Classes={this.state.Class} 
                            Users={this.state.User}
                        />
                    </Route>
                </Switch>
        </div>
        </Router>
      </div >
      )
 
 }}
export default App;

//state
//redux
//road side coder
//next js
//spread operator