import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Dashboard.css';
function ClassList(props) 
{
return (
<div>
{props.isLoaded?
    <div>
    <div className="wrapper mt-4">
        {/* <Router> */}
        {(props.Classes).map(classs=>(
            <div key={`${classs._id}`} className="grids">
                <Link to={`${classs._id}`} className="text-dec-none" style={{color:"black"}} >
                    {classs.classname} 
                </Link>
            </div>
        ))}
        {/* </Router> */}
        </div>
    <div className="m-4"></div>
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

