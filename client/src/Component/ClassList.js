import React from 'react'
import '../Styles/Dashboard.css';
function ClassList(props) 
{
return (
<div>
{props.isLoaded?
<div class="wrapper">
        {props.User.classname.map(classnames=>
        (
            <div class="grids">
                <a href={`${classnames}`} className="text-dec-none" style={{color:"black"}} >
                    {classnames} 
                </a>
            </div>
        ))}
        </div>
        :
        <div>Loading...</div>
    }
<div className="m-4"></div>
</div>

)
}

export default ClassList

