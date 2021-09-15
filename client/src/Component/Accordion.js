import React,{useState,useRef} from 'react'

function Accordion (props)
{
    const [Active, setActive] = useState("");
    const [Height, setHeight] = useState("0px");
    const [Rotate, setRotate] = useState("accordion__icon");
    const content = useRef(null);
    // const prop=props.accordion;

    function toggleclassactive()
    {
      setActive(Active===""?"active":"");
      setHeight(Active==="active"?"0px":`${content.current.scrollHeight}px`);
      setRotate(Active === "active" ? "accordion__icon" : "accordion__icon rotate");
    }
  
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
      <i className="bi bi-chevron-down "></i>
    </div>
</button>

           <div className="InsideAcc" ref={content} style={{maxHeight:`${Height}`}}>
            <p>
                {(props.contents).map(content=>(
                    <li>{content}</li>
                ))}
            </p>
            </div>
            </div>
    )
}
export default Accordion;
