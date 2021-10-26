import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown , Form , Button } from 'react-bootstrap';
import '../Styles/Dashboard.css';
import axios from 'axios';
function ClassList(props) 
{
const [value,setValue] = useState("");
const [state,setState] = useState("false");

const valueChange=(e)=>
{
    setValue(e.target.value);
}

const changestate=(a)=>
{
    setState(a);
}

const submit=(e)=>
{
    if(state==="Create")
    {    
        const data={"teamname":value,teacher:props.Users,userid:props.Users._id};
        axios.post("http://localhost:5000/api/classes/create",data)
        .then(()=>{})
        .catch((err)=>console.log(err));
        changestate("false");
        window.location.reload();
    }
    else if(state==="Join")
    {
        const data={"teamcode":value,student:props.Users,userid:props.Users._id};
        axios.post("http://localhost:5000/api/classes/join",data)
        .then(()=>{})
        .catch((err)=>console.log(err));
        changestate("false");
        window.location.reload();  
    }
}

const render=()=>
{
if(state=="false")
{
    return <Dropdown>
        <Dropdown.Toggle style={{backgroundColor:"#dfe775",border:"0",color:"black"}}>
            <i className="bi bi-plus fa-5x"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item>
                <div className="pointer" onClick={()=>{changestate("Create")}}>Create</div>
            </Dropdown.Item>
            <Dropdown.Item>
                <div className="pointer" onClick={()=>{changestate("Join")}}>Join</div>
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}
else if(state=="Create")
{
    return <div>Create
        <Form>
            <Form.Control type="text" id="Create" placeholder="Team Name" onChange={valueChange} value={value}/>
            <Button type="submit" onClick={submit} variant="light">Create</Button> 
        </Form>
        <div className="fs-0 pointer" onClick={()=>{changestate("Join")}}>Join</div>
    </div>
}
else if(state=="Join")
{
    return <div>Join
        <Form>
            <Form.Control type="text" id="Join" placeholder="Team Code" onChange={valueChange} value={value}/>
            <Button type="submit" onClick={submit} variant="light">Join</Button> 
        </Form>
        <div className="fs-0 pointer" onClick={()=>{changestate("Create")}}>Create</div>
    </div>
}
}
return (
<div>
{props.isLoaded?
    <div>
    <div className="wrapper mt-4">
        {(props.Classes).map(classs=>(
            <div key={`${classs._id}`} className="grids">
                <Link to={`${classs._id}`} className="text-dec-none" style={{color:"black"}} >
                    {classs.classname} 
                </Link>
            </div>
        ))}
        <div className="grids">
            {render()}

        {/* <div className="dropdown">
            <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            </button>
          <ul className="dropdown-menu" style={{color:"red"}} aria-labelledby="dropdownMenuButton1">
          
            <li><a className="dropdown-item" href="/newclass">
            Create Class
          </a></li>

          <li><a className="dropdown-item" href="/joinclass">
            Join Class
          </a></li>
          </ul>
          </div>*/}
        </div> 
        </div>
    <div className="m-5"></div>
    </div>
    :
    <div className="fs-2 fw-bold">
        Loading...
    </div>
    }
</div>
)
}

export default ClassList

