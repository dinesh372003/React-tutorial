import React,{useEffect} from 'react';
import {Navbar} from 'react-bootstrap';
import '../Styles/Sidebar.css';
import Accordion from './Accordion';
function Sidebar (props)
{
return (
        <>
  <Navbar id="sidebar" className="ms-0 p-0">
{/*

User Name

*/}
    <div style={{minHeight: "15vh",transition:"0.4s"}} className="w-100 namehead py-4 px-3 mb-4 ms-0 mb-0 bg-dark">
          <div className="media ">
              <div className="media-body">
                  <h2 className="m-0 namebody"style={{color: "Orange"}} ><strong>
                    {props.isLoaded?
                      <div>Hi {props.Users.fname}</div>:
                      <div>Loading...</div>}
                    </strong></h2>
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
      <div className="fs-2 fw-bold py-2 px-3 mb-3 bg-light w-100">
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

<Accordion  
    title={"Classes"}
    icon={"bi bi-collection-fill"}
    contents={props.Users.classname}
    isLoaded={props.isLoaded}
/>

{/* 

Closing List of Classes

*/}



{/* 

List of Assignment

*/}

<Accordion 
  title={"Assignment"}
  icon={"fas fa-tasks mt-2"}
  contents={props.Users.classname}
  isLoaded={props.isLoaded}
/>

{/* 

Closing
List of Assignment

*/}

{/* 

List of Timetable

*/}

<Accordion 
  title="Timetable"
  icon="bi bi-calendar-fill"
  contents={props.Users.classname}
  isLoaded={props.isLoaded}
/>

{/* 

Closing List of Timetable

*/}
<div className="fs-2 fw-bold px-2 py-2 mb-3 bg-light w-100">
  <a href="/users/logout" className="jk">
    <i className="bi bi-box-arrow-in-right fa-lg"></i>
    <div className="px-2 d-inline-block">
      Logout
    </div>
  </a>
</div>


<div className="m-3"></div>

</Navbar>
</>
);
}
export default Sidebar
