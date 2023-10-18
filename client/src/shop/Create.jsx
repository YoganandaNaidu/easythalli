import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const [isChecked, setIsChecked] = useState(false); // Initialize the checkbox state

    const [values, setValues] = useState({
        name: '',
        contactname: '',
        contactnumber: '',
        remarks: '',
        isactive: 0,
    })
        
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/shopcreate', values)
        .then(res => {
            console.log(res)
            navigate('/shop');
        })
        .catch(err => console.log(err))
    } 

  return ( 
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
        <h2>Add a record</h2>

        <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter name" className="form-control" 
                onChange={e => setValues({...values, name:e.target.value})} />
        </div>
        <div className="mb-2">
            <label htmlFor="">Contact Name</label>
            <input type="text" placeholder="Enter description" className="form-control"
                onChange={e => setValues({...values, contactname:e.target.value})} />
        </div>
        <div className="mb-2">
            <label htmlFor="">Contact Number</label>
            <input type="text" placeholder="Enter description" className="form-control"
                onChange={e => setValues({...values, contactnumber:e.target.value})} />
        </div>
        <div className="mb-2">
            <label htmlFor="">Remarks</label>
            <input type="text" placeholder="Enter description" className="form-control"
                onChange={e => setValues({...values, remarks:e.target.value})} />
        </div>
        <div className="mb-2">
            <label htmlFor="">Active</label>
            <input type="checkbox" name="isactive"   // Use the checked attribute to set the value to 1 (true)
            onChange={e=> setValues({...values,isactive:e.target.checked ? 1 : 0})}/>
        </div>
        
        <button className="btn btn-success">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Create;
