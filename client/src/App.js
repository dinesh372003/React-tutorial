import React,{useState,useEffect} from 'react';
import Check from './Component/Check.js';
import Sidebar from './Component/Sidebar.js';
import './Styles/Sidebar.css';
// import axios from 'axios';
function App() 
{
  const [data,setData]=useState([{
    _id:0,
    name:"",
    teams:"",
  }]);

  useEffect(()=>
  {
    fetch("/abcd")
    .then(res=>{
        if(res.ok)
        {
          return res.json()
        }
      })
      .then(datas=>{
        setData(datas);
        // console.log(data);
        // console.log("Storing Successfull");
      })
  
    },[]);

  return <div> 
      <Sidebar />
      {/* <Check data={data} /> */}
    </div>
}
export default App;

//state
//redux
//road side coder
//git lens