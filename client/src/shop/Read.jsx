import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Read() {
    const {id} = useParams();
    const [shop, setShop] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/read/'+id)
        .then(res => {
            console.log(res);
            setShop(res.data[0]);
        })
        .catch(err => console.log(err)); 
    },[]);

  return ( 
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
        
        <h2><u>Shop Details</u></h2>
        <h2>Shop Name: {shop.name}</h2>
        <h2>Contact Name: {shop.contactname}</h2>
        <h2>Contact Number: {shop.contactnumber}</h2>
        <h2>Remarks: {shop.remarks}</h2>
        <h2>isActive: {shop.isActive}</h2>
        <Link to="/shop" className="btn btn-primary me-2">Back</Link>
        <Link to={`/shop/edit/${shop.id}`} className="btn btn-info">Edit</Link>
        </div>
    </div>
    </div>
  )
}

export default Read;
