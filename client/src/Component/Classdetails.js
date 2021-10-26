import React,{ useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { OverlayTrigger , Tooltip , Button } from 'react-bootstrap';
import '../Styles/Dashboard.css';
function Classdetails(props) 
{
const { id } = useParams()
var ownerstatus;
const Classes = props.Classes;
const [Classs,setClasss] = useState({});
const [Copy,setCopy] = useState("Click to Copy");
const Users = props.Users;

const changecopy = ()=>
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

            Classes[i].subteacher.forEach(teacher => 
                {
                    if(teacher.email==Users.email)    
                    {
                        ownerstatus="subteacher";
                    }
                });
    
            Classes[i].mainteacher.forEach(teacher =>
                {
                    if(teacher.email==Users.email)
                    {
                        ownerstatus="mainteacher";
                    }
                })

            Classes[i].students.forEach(students => 
            {
                if(students.email==Users.email)    
                {
                    ownerstatus="student";
                }
            });
            console.log(ownerstatus);
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

const list = (content)=>
{
    if(content.length==0)
    {
        return(
            <div className="d-inline-block">

            </div>
            )
    }
    else
    {
        return(
            <div className="d-inline-block">
                {content.map(things=>
                    (
                        <li key={things.email}>
                            {things.name} - {things.email}
                        </li>
                    ))
                }
            </div>
        )
    }
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
        <div className="content">
            Teachers:
                <br />
            <div className="inside-1">
                Main Teacher:
            </div>
            <div className="inside-2">
                {
                    list(Classs.mainteacher)
                }
            </div>
                <br />
            <div className="inside-1">
                Subject Teachers:
            </div>
             <div className="inside-2">
                {
                    list(Classs.subteacher)
                }
            </div> 
                <br />
            <div className="inside-1">
                Students:
            </div>
            <div className="inside-2">
                {
                    list(Classs.students)
                }
            </div>

            <br />
     </div>
</div>
)
}
}
export default Classdetails