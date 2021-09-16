import React,{useState,useRef,useEffect } from 'react'

function Accordion (props)
{
    const [Active, setActive] = useState("active");
    const [Rotate, setRotate] = useState("accordion__icon");
    const [Height, setHeight] = useState("0px");
    const content = useRef(null);

    //Toggling the Accordion
    function toggleclassactive()
    {
        setActive(Active===""?"active":"");
        setHeight(Active==="active"?"0px":`${content.current.scrollHeight}px`);
        setRotate(Active === "active" ? "accordion__icon rotate" : "accordion__icon");
    }

    //Setting the initial state of the accordion
    useEffect(()=>
    {
        setHeight(`${content.current.scrollHeight}px`);
    },[props.isLoaded])

    
return (
        <div>
        <button 
            style={{textAlign:"start",marginBottom:"1px"}}
            className="Accordion w-100 fs-1 fw-bold py-2 px-3 mb-2 bg-light d-flex"
            onClick={toggleclassactive}>
                <i className={`${props.icon}`}></i> 

            <div className="px-3 d-inline-block">
      
            {props.title}
    
    </div> 
    <div className={`${Rotate}`}>
    <i className={"bi bi-chevron-up"}></i> 
    </div>
</button>

<div className="InsideAcc" ref={content} style={{maxHeight:`${Height}`}}>
    {props.isLoaded?
        <div >
        {(props.contents).map(content=>(
            <li key={content}>
                {content}
            </li>
        ))}
        </div>
    :<div>Loading...</div>}
</div>
</div>
    )
// return (
//     <div>
//     <button 
//         style={{textAlign:"start",marginBottom:"1px"}}
//         className="Accordion w-100 fs-1 fw-bold py-2 px-3 mb-2 bg-light d-flex"
//         onClick={toggleclassactive}>

//         <i className={`${props.icon}`}></i> 
//         <div className="px-3 d-inline-block">
    
//         {props.title}

// </div> 
// <div className={`${Rotate}`}>
//     <i className="bi bi-chevron-down "></i>
// </div>
// </button>

//         <div className="InsideAcc" ref={content} style={{maxHeight:`${Height}`}}>
//         <p>
//             Loading....
//         </p>
//         </div>
//         </div>
// )

// }
}
export default Accordion;
