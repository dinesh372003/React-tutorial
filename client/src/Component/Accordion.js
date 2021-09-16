import React,{useState,useRef,useEffect } from 'react'

function Accordion (props)
{
    const [Active, setActive] = useState(props.active);
    const [Rotate, setRotate] = useState("accordion__icon");
    const [Height, setHeight] = useState("0px");
    const content = useRef(null);

    // useEffect(()=>
    // {
        // console.log(content.current.scrollHeight);
        // if((props.active==="active")&&(props.isLoaded===true))
        // {
        //     console.log(content.current.scrollHeight);
        //     setHeight(content.current.scrollHeight+"px");
        // }
    // },[])
    function toggleclassactive()
    {
        // console.log(Height);
      setActive(Active===""?"active":"");
      setHeight(Active==="active"?"0px":`${content.current.scrollHeight}px`);
      setRotate(Active === "active" ? "accordion__icon rotate" : "accordion__icon");
    }
    function fixheight()
    {
        if(Active=="active")
        {
            setHeight(content.current.scrollHeight+"px")
        }
    }
  if(props.isLoaded)
  {
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
            {fixheight()}
            <p>
                {(props.contents).map(content=>(
                    <li key={content}>
                        {content}            
                        <hr className="m-2"/>
                    </li>
                ))}
            </p>
            </div>
            </div>
    )
}
else
{
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
            Loading....
            No problem you can wait for some timie 
            And this is Dinesh 
            I am just checking whether the initial height of the class list is actually the height of this!
        </p>
        </div>
        </div>
)

}
}
export default Accordion;
