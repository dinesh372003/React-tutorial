import React,{ useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { OverlayTrigger , Tooltip , Form , CloseButton } from 'react-bootstrap';
import '../Styles/Dashboard.css';
import Edit from './Edit'

function Classdetails(props) 
{
const { id } = useParams()
var ownerstatus;
const Classes = props.Classes;
const [ Classs , setClasss ] = useState({});
const [ Ownerstatus , setOwner ] = useState("");
const [ Copy , setCopy ] = useState("Click to Copy");
const [ Change , setChange ] = useState( false );
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
                        setOwner("subteacher");
                    }
                });
    
            Classes[i].mainteacher.forEach(teacher =>
                {
                    if(teacher.email==Users.email)
                    {
                        setOwner("mainteacher");
                    }
                })

            Classes[i].students.forEach(students => 
            {
                if(students.email==Users.email)    
                {
                    setOwner("student");
                }
            });
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

const form = () =>
{
    console.log("abcd");
    return(
        <div>hello</div>
    )
}


const list = (content,name)=>
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
                            {/* {things.name} - {things.email} */}

                            <OverlayTrigger
                                placement="right"
                                varient="light"
                                style={{bacgroundColor:"black"}}
                                overlay={(props) => (
                                    <Tooltip id="overlay-example" {...props}>
                                      {things.email}
                                    </Tooltip>
                                    )
                                }
                                >
                                <div className="fs-1 fw-bold pointer d-inline-block">
                                    {things.name} 
                                </div>
                                </OverlayTrigger> 
                                {name
                                ?
                                <Edit 
                                    status={false} 
                                    person={things}
                                    Ownerstatus={Ownerstatus}
                                    Classs={Classs}
                                />
                                :
                                <div>
                                </div>
                                }




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
                    list(Classs.mainteacher,false)
                }
            </div>
                <br />
            <div className="inside-1">
                Subject Teachers:
            </div>
             <div className="inside-2">
                {
                    list(Classs.subteacher,true)
                }
            </div> 
                <br />
            <div className="inside-1">
                Students:
            </div>
            <div className="inside-2">
                {
                    list(Classs.students,true)
                }
            </div>

            <br />
     </div>
</div>
)
}
}
export default Classdetails