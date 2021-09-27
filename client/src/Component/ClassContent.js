import React , { useState }  from 'react'
import Classdetails from './Classdetails';
import Navbar from './Navbar.js';


function ClassContent(props) {
const isLoaded = props.isLoaded;
const Class = props.Classes;
const Users = props.Users;
const [place,setPlace] = useState("POST");

const Change=()=>
{
    setPlace("TIMETABLE");
}

return (
<div>
    <Navbar 
        isLoaded={isLoaded}
        change={Change}
    />
    <Classdetails 
        Classes={Class} 
        Users={Users}
        place={place}
    />
</div>
)
}

export default ClassContent
