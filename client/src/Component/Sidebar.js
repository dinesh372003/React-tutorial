import React,{useState,useRef} from 'react';
import {Navbar} from 'react-bootstrap';
import '../Styles/Sidebar.css';
import Accordion from './Accordion';
function Sidebar ()
{
const accordion=
[
  {
    "key":"C",
    "title":"Classes",
    "icon":"bi bi-collection-fill",
    "contents":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat abcdefghijklmnopqrstuvqxyz"
  },
  {
    "key":"T",
    "title":"Timetable",
    "icon":"bi bi-calendar-fill",
    "contents":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat abcdefghijklmnopqrstuvqxyz"
  },
  {
    "key":"A",
    "title":"Assignment",
    "icon":"fas fa-tasks",
    "contents":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat abcdefghijklmnopqrstuvqxyz", 
  }
]
return (
        <>
  <Navbar id="sidebar" className="ms-0 p-0">
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

<Accordion accordion={accordion}/>
{/* 

List of Classes

*/}

{/* <Accordion 
  title="Classes"
  icon="bi bi-collection-fill"
  contents="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat abcdefghijklmnopqrstuvqxyz"
/> */}

{/* 

Closing
List of Classes

*/}

{/* 

List of Timetable

*/}

{/* <Accordion 
  title="Timetable"
  icon="bi bi-calendar-fill"
  contents="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat abcdefghijklmnopqrstuvqxyz"
/> */}

{/* 

Closing List of Timetable

*/}

{/* 

List of Assignments

*/}
{/* <Accordion 
  title="Assignment"
  icon="fas fa-tasks"
  contents="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat abcdefghijklmnopqrstuvqxyz"
/> */}
{/* 

Closing List of Assignment

*/}


</Navbar>
</>
    );
// }
}
export default Sidebar
