import React , { useEffect , useState } from 'react'
import { Form } from 'react-bootstrap'
function Edit(props) {
    const [ Status , setStatus ] = useState(props.status);
    const [ Ownerstatus , setOwnerstatus ] = useState(props.Ownerstatus) 
    const [ value , setValue ] = useState("");
    // var editstatus=false;
    const changestatus = () =>
    {
        setStatus(!Status);
    }
    
    const valueset = (e) =>
    {
        setValue(e.target.value);
    }

    const changerole = (e) =>
    {
        e.preventDefault();
        console.log(value);
        // setValue(e.target.value);
        // console.log(value,"123");
    }

    if(Ownerstatus=="mainteacher")
    {
        return(
            <div className="d-inline-block ms-2 fs-0">
                {/* Hello    */}
                {Status?
                <div>
                <Form onSubmit={changerole}>
                <Form.Select aria-label="Default select example" value={value} onChange={valueset}>
                    <option value="">Choose the Role</option>
                    <option value="mainteacher">Main Teacher</option>
                    <option value="subteacher">Subject Teacher</option>
                    <option value="student">Student</option>
                </Form.Select>
                <button type="submit" className="ms-2">Change</button>
                <i className="ms-2 bi bi-x-lg" onClick={changestatus}></i>
                </Form>
                    {/* <Form onSubmit={changerole}>
                        Change role to 
                        <Form.Select className="ms-2" aria-label="Default select example">
                            <option onClick={()=>{valueset("")}}>Open this select menu</option>
                            <option name="mainteacher" value="mainteacher" onClick={()=>{valueset("mainteacher")}}>Main Teacher</option>
                            <option name="subteacher" value="subteacher" onClick={()=>{valueset("subteacher")}}>Subject Teacher</option>
                            <option name="student" value="student" onClick={()=>{valueset("student")}}>Student</option>
                        </Form.Select>
                    </Form>  */}
                </div>
                :
                // <div>A</div>
                <i onClick={changestatus}
                    className="bi bi-pencil-fill ms-1"></i>     
                }
            </div>
        )
    }
}

export default Edit
