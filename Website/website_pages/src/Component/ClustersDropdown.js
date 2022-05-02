import React from "react";


function ClustersDropdown()
{
  return(

    <div classname="content">
   <div className="row">
    <div className="col-sm-12">
    <h2 className="mt-4 mb-4 fw-bold">Clusters {}</h2>

    </div></div><div className="row mb-3">
    <div className="form-group col-md-4">
    <label className="mb-2">Region* &nbsp;</label>
    <select name="region" className="form-control">
        <option>EUROPE</option> 
        <option>GREATER CHINA</option>
        <option>GREATER INDIA</option>
        <option>LATAM</option>
        <option>MENAP</option>
        <option>NORTH AMERICA</option>
        <option>SA & SSA</option>
        <option>SEANAP</option> 
    </select>
 &nbsp; &nbsp; &nbsp; &nbsp;
   
   <label className="mb-2">Country* &nbsp;</label>
   <select name="country" className="form-control">
   <option>INDIA</option>
   </select>
   &nbsp; &nbsp; &nbsp; &nbsp; 

   <button className="btn btn-success mt-2">SEARCH</button>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <button className="btn btn-success mt-2">RESET</button>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <button className="btn btn-success mt-2">DOWNLOAD TEMPLATE</button>
   &nbsp; &nbsp; &nbsp; &nbsp;

   </div>
   </div>
   </div>
   
   
  );

} 
export default ClustersDropdown ;