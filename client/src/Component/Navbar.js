import React from 'react'
import '../Styles/Sidebar.css'
import {Nav,Container,Navbar} from 'react-bootstrap'
function navbar() 
{
return (
<>
  <Navbar bg="primary" style={{minHeight:"15vh",transition:"0.4s",padding:"13px"}} className="w-100 px-3 mb-4 ms-0 mb-0 navbar" variant="dark">
    <Container>
    <button id="sidebarCollapse" type="button" className="btn flex-item-button">
        <i className="fa fa-bars mr-2 a"></i>
    </button>
    <Navbar.Brand id="sidebarcollapse" className="p-0 fw-bold flex-item-middle" style={{fontSize:"40px",color:"red"}}>
        School
    </Navbar.Brand>

      <a className="flex-item-end" href="/users/logout">
          <i className="bi bi-box-arrow-in-right fa-lg"></i>
          <div className="m-2 fs-1 d-inline-block">
            Logout
          </div>
      </a>
  </Container>
</Navbar>
</>
    // <div style={{minHeight: "15vh"}} className="Navbar w-100 py-4 px-3 mb-4 ms-0 mb-0 ">
    // </div>
)
}

export default navbar