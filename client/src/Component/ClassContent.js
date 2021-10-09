import React , { useState , useEffect }  from 'react'
import Classdetails from './Classdetails';
import Navbar from './Navbar.js';
import { useParams } from 'react-router-dom';

function ClassContent(props) {
const { id } = useParams()
const isLoaded = props.isLoaded;
const Class = props.Classes;
const Users = props.Users;
const [place,setPlace] = useState("POST");
useEffect(()=>
    {
        setPlace("POST");
    },[id])
const Change=(evt)=>
{
    setPlace(evt.target.id);
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
