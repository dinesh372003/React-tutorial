import React , { useEffect , useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function Edit(props) {
    const [ Status , setStatus ] = useState(props.status);
    const [ Ownerstatus , setOwnerstatus ] = useState(props.Ownerstatus) 
    const [ value , setValue ] = useState("");
    // var editstatus=false;
    const [Classes , setClass] = useState(props.Classs);
    const email = props.person.email;
    const name = props.person.name;
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
        // e.preventDefault();
        if(value!="")
        {
            const data=
            {
                "person":props.person,
                "value":value,
                "Class":Classes,
            }
            axios.post("http://localhost:5000/api/classes/edit/people",data)
                .then(()=>{})
                .catch((err)=>console.log(err));
            // console.log(value);
        // console.log(email);
        // console.log(name);
        // setValue(e.target.value);
        // console.log(value,"123");
        }
        else
        {
            console.log("In else");
        }

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
