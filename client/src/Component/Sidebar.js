import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import '../Styles/Sidebar.css';
function Sidebar() {
    return (
        <>
  <Navbar id="sidebar" className="ms-0 p-0"style={{width:"17rem",height:"100vh",display:"block"}}>
  <div style={{minHeight: "15vh"}} className="asd py-4 px-3 mb-4 ms-0 mb-0 bg-dark">
        <div className="media ">
            <div className="media-body">
                <h2 className="m-0 name"style={{color: "Orange"}} ><strong>Hi Dinesh</strong></h2>
            </div>
        </div>
  </div>

      <div className="fs-2 fw-bold py-2 px-3 mb-3 bg-light jkl">
        <a href="/" className="jk"><i className="fas fa-home"></i>
          Dashboard</a>
      </div>
  </Navbar>
</>
    )
}

export default Sidebar
