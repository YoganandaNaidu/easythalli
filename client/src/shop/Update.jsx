import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Update() {
    const {id} = useParams();
    const navigate = useNavigate();    
    useEffect(() => {
        axios.get(process.env.REACT_APP_HOST + ":" + process.env.REACT_APP_PORT + '/read/'+id)
        .then(res => {
            console.log(res);
            setValues({...values, name: res.data[0].name, contactname: res.data[0].contactname, 
                contactnumber:res.data[0].contactnumber, remarks:res.data[0].remarks, 
                isActive:res.data[0].isActive })
        })
        .catch(err => console.log(err)); 
    },[]);

    const [values, setValues] = useState({
        name: '',
        contactname: '',
        contactnumber: '',
        remarks: '',
        isactive: '',
    })

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(process.env.REACT_APP_HOST + ":" + process.env.REACT_APP_PORT + '/update/'+ id, values)
        .then(res => {
                        {/*res => console.log(res)*/}
            console.log(res)
            navigate('/shop');
        })
        .catch(err => console.log(err))
    } 
    
    return ( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleUpdate}>
            <h2>Edit the record</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter name" className="form-control" value={values.name}
                        onChange={e => setValues({...values, name:e.target.value})} />
                </div>
                
                <div className="mb-2">
                    <label htmlFor="">Contact Name</label>
                    <input type="text" placeholder="Enter description" className="form-control" value={values.contactname}
                        onChange={e => setValues({...values, contactname:e.target.value})} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Contact Number</label>
                    <input type="text" placeholder="Enter description" className="form-control" value={values.contactnumber}
                        onChange={e => setValues({...values, contactnumber:e.target.value})} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Remarks</label>
                    <input type="text" placeholder="Enter description" className="form-control" value={values.remarks}
                        onChange={e => setValues({...values, remarks:e.target.value})} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Is Active</label>
                    <input type="text" placeholder="Enter description" className="form-control" value={values.isActive}
                        onChange={e => setValues({...values, isActive:e.target.value})} />
                </div>
            <button className="btn btn-success">Update</button>
            <Link to={`/`} className="btn btn-primary mx-2">Back</Link>
            </form>
        </div>
        </div>
  )
}

export default Update;
