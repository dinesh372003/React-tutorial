import React,{ useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { OverlayTrigger , Tooltip , Button } from 'react-bootstrap';
import '../Styles/Dashboard.css';
function Classdetails(props) {
const { id } = useParams()
const Classes =props.Classes;
const [Classs,setClasss] = useState({});
const [Copy,setCopy] = useState("Click to Copy");
const Users = props.Users;
const changecopy=()=>
{
    navigator.clipboard.writeText(`${Classs.classcode}`);
    setCopy("Copied!")
}
useEffect(()=>
{
    for(var i=0;i<Classes.length;i++)
    {
        if(id===Classes[i]._id)
        {
            setClasss(Classes[i]);
        }
    }     
})

useEffect(()=>
{
    setCopy("Click to Copy");
},[id])

const top=()=>
{
return( 
<div style={{marginLeft:"10px", marginTop:"5px"}} className="fs-2 fw-bold">
    Class Name- 
    <div className="d-inline-block" style={{color:"red"}}>
        {Classs.classname}
    </div>

    <div className="d-inline-block" style={{marginLeft:"20px"}}>
        Class Code-
    </div>

    <div className="d-inline-block">
    <OverlayTrigger
    placement="bottom"
    varient="light"
    style={{bacgroundColor:"white"}}
    overlay={
    <Tooltip>
        {Copy}
    </Tooltip>
    }
    >
    <div 
        className="fs-1 fw-bold pointer" 
        style={{color:"red"}}
        onClick={changecopy}      
    >
        {Classs.classcode}
    </div>
    </OverlayTrigger>
    </div>
</div>
)
}
if(props.place=="POST")
{
return (
<div style={{marginLeft:"10px", marginTop:"5px"}} className="fs-2 fw-bold">
        {top()}
            In POST
        </div>
        )
}

else if(props.place=="TIMETABLE")
{
    return(
<div style={{marginLeft:"10px", marginTop:"5px"}} className="fs-2 fw-bold">
    {top()}
    In TIMETABLE
</div>
)
}

else if(props.place=="ASSIGNMENT")
{
    return(
<div style={{marginLeft:"10px", marginTop:"5px"}} className="fs-2 fw-bold">
    {top()}
    In ASSIGNMENT
</div>
)
}

else if(props.place=="PEOPLE")
{
    return(
<div style={{marginLeft:"10px", marginTop:"5px"}} className="fs-2 fw-bold">
    {top()}
    In PEOPLE
</div>
)
}
}
export default Classdetails