import React,{ useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Dashboard.css';
function Classdetails(props) {

const { id } = useParams()
const Classes =props.Classes;
const [Classs,setClasss] = useState({});
const Users = props.Users;

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

if(props.place=="POST")
{
return (
    <div>
        <div style={{marginLeft:"10px",marginTop:"5px"}} className="fs-2 fw-bold">
            {Classs.classname}
            <br />
            In POST
        </div>
    </div>
        )
}

else if(props.place=="TIMETABLE")
{
    return(
        <div>
            <div style={{marginLeft:"10px",marginTop:"5px"}} className="fs-2 fw-bold">
                {Classs.classname}
                <br />
                In TIMETABLE
            </div>
        </div>
    )
}

else if(props.place=="ASSIGNMENT")
{
    return(
        <div>
            <div style={{marginLeft:"10px",marginTop:"5px"}} className="fs-2 fw-bold">
                {Classs.classname}
            </div>
            <br />
            In ASSIGNMENT
        </div>
    )
}

else if(props.place=="PEOPLE")
{
    return(
        <div>
            <div style={{marginLeft:"10px",marginTop:"5px"}} className="fs-2 fw-bold">
                {Classs.classname}
            </div>
            <br />
            In PEOPLE
        </div>
    )
}


{/* <a href="/<%-Class._id%>/people" class="fw-bold fs-5 flex-item-middle" id="people" style="color: greenyellow;">People</a>
<a href="/<%-Class._id%>/Timetable" class="fw-bold fs-5 flex-item-middle" style="color: greenyellow;">Timetable</a>
<a href="/<%-Class._id%>/Assignment" class="fw-bold fs-5 flex-item-middle" style="color: greenyellow;">Assignment</a>
<a href="/<%-Class._id%>/Result" class="fw-bold fs-5 flex-item-middle" style="color: greenyellow;">Result</a> */}
}
export default Classdetails
