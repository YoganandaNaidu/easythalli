import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(res => setData(res.data))
        .catch(err => console.log(err)); 
    },[])
  
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(res => {
            window.location.reload(false);
        })
        .catch(err => console.log(err)); 
    }
    
    return ( 
    <div className="d-flex vh-100 bg-secondary p-3 justify-content-center align-items-center">
        <div className="bg-white rounded p-3">
            <h2>List of shops</h2>
            <div className="d-flex justify-content-end">
                <Link to="/shop/create" className="btn btn-success">Create + </Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact Name</th>
                        <th>Contact Number</th>
                        <th>Remarks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((shop, index) => {
                        return <tr key={index}>
                            <td>{shop.id}</td>
                            <td>{shop.name}</td>
                            <td>{shop.contactname}</td>
                            <td>{shop.contactnumber}</td>
                            <td>{shop.remarks}</td>
                            <td>
                                <Link to={`/shop/read/${shop.id}`} className="btn btn-sm btn-into">Read</Link>
                                <Link to={`/shop/edit/${shop.id}`} className="btn btn-sm btn-primary mx-2">Edit</Link>
                                <button onClick={ () => handleDelete(shop.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    })

                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home;
