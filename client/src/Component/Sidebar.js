import React,{Component} from 'react';
import {Navbar,Container} from 'react-bootstrap';
import '../Styles/Sidebar.css';
function Sidebar() 
{
  constructor(props) 
  {
    // super(props);
    this.state = {
      maxHeight:"0px"
    };
    toggleheight=()=>
    {
      this.setstate({maxHeight:"25px"})
    };
  }
  function accordion(a,b)
  {
    const clickedclass=document.getElementsByClassName(a);
    const toggleaccordion=document.getElementsByClassName(b);
    console.log(clickedclass,toggleaccordion);
    clickedclass.style.Color="red";
    // if(toggleaccordion.style.maxHeight==0)
    // {
    //   toggleaccordion.style.maxHeight = toggleaccordion.scrollHeight+"px";
    // }
    // else
    // {
    //   toggleaccordion.style.maxHeight=0;
    // }
  }
  return (
        <>
  <Navbar id="sidebar" className="ms-0 p-0"style={{width:"17rem",height:"100vh",display:"block"}}>
{/*

User Name

*/}
    <div style={{minHeight: "15vh"}} className="w-100 py-4 px-3 mb-4 ms-0 mb-0 bg-dark">
          <div className="media ">
              <div className="media-body">
                  <h2 className="m-0 name"style={{color: "Orange"}} ><strong>Hi Dinesh</strong></h2>
              </div>
          </div>
    </div>
{/* 

Closing
User Name

*/}

{/* 

Link to Dashboard

*/}
      <div className="fs-2 fw-bold py-2 px-3 mb-3 bg-light jkl">
        <a href="/" className="jk">
          <i className="fas fa-home"></i>
          <div className="px-2 d-inline-block">
            Dashboard
            </div>
        </a>
      </div>
{/* 

Closing
Link to Dashboard

*/}

{/* 

List of Classes

*/}
{/* <style>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style> */}

<button 
  style={{textAlign:"start",border:"0"}}
  className="Classes w-100 fs-1 fw-bold py-2 px-3 mb-3 bg-light"
  onClick={this.toggleheight}>
    Classes
</button>

<div className="Inside-C">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="Timetable w-100">Timetable</button>
<div className="Inside-T">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="Assignment w-100">Assignment</button>
<div className="Inside-A">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

{/* <script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
     var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
</script> */}


{/* <Accordion defaultActiveKey="0" >
  <Accordion.Item eventKey="0">
    <Accordion.Header style={{width:"100%"}}>
    <div className="fs-2">
      Classes
    </div>
    </Accordion.Header>
    
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion> */}
{/* 

Closing List of Classes

*/}
  </Navbar>
</>
    )
}

export default Sidebar
