import React from "react";


function ReviewideasDropdown()
{
  return(

    <div classname="content">
   <div className="row">
    <div className="col-sm-12">
    <h2 className="mt-4 mb-4 fw-bold">Auditors {}</h2>

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

   <label className="ab-c">Collection Type *&nbsp;</label>
       <select name="period" className="form-control">
   <option>RA</option>
   <option>RES</option>
   </select>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <label className="ab-c">Category&nbsp;</label>
       <select name="category" className="form-control">
       </select>   
       &nbsp; &nbsp; &nbsp; &nbsp;

   <label className="ab-c">Cluster Id&nbsp;</label>
       <select name="cluster-id" className="form-control">
       </select>   
       &nbsp; &nbsp; &nbsp; &nbsp;


   </div>
       
       <label className="ab-c">Cluster Name&nbsp;</label>
       <textarea name="cluster-name" className="form-control">
       </textarea> 
       &nbsp; &nbsp; &nbsp; &nbsp;

       <label className="ab-c">QCTE ID&nbsp;</label>
       <textarea name="qcte-id" className="form-control">
       </textarea> 
       &nbsp; &nbsp; &nbsp; &nbsp;

       <label className="ab-c">QCTE Name&nbsp;</label>
       <textarea name="qcte-name" className="form-control">
       </textarea> 
       &nbsp; &nbsp; &nbsp; &nbsp;
   

   <label className="ab-c">Auditor Id&nbsp;</label>
       <textarea name="auditor-id" className="form-control">
       </textarea> 
       &nbsp; &nbsp; &nbsp; &nbsp;

   <button className="btn btn-success mt-2">SEARCH</button>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <button className="btn btn-success mt-2">RESET</button>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <button className="btn btn-success mt-2">EXPORT</button>
   &nbsp; &nbsp; &nbsp; &nbsp;

   </div>
   </div>
   
   
   
  );

} 
export default ReviewideasDropdown ;