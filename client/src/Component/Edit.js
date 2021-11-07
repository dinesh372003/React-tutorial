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
    
    const changerole = (e) =>
    {
        e.preventDefault();
        console.log(e);
    }

    if(Ownerstatus=="mainteacher")
    {
        return(
            <div className="d-inline-block ms-2 fs-0">
                {/* Hello    */}
                {Status?
                <div>
                    <Form>
                        Change role to 
                        <Form.Select className="ms-2" aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="mainteacher">Main Teacher</option>
                            <option value="subteacher">Subject Teacher</option>
                            <option value="">Student</option>
                        </Form.Select>
                        <button type="submit" className="ms-2"onClick={()=>{changerole()}}>Change</button>
                        <i className="ms-2 bi bi-x-lg" onClick={changestatus}></i>
                    </Form> 
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
