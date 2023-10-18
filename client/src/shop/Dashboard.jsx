import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return ( 
    <div> 
      <h1>Welcome to Easythalli</h1>
      <Link to={`/shop`} className="btn btn-sm btn-primary mx-2">Vist Shop</Link>
      <br/><br/>
      <Link to={`/shop`} className="btn btn-sm btn-primary mx-2">Vist Vendor</Link>
      <br/><br/>
      <Link to={`/shop`} className="btn btn-sm btn-primary mx-2">Vist Measurement</Link>
    </div>  
  );
}

export default Dashboard;
