import React from "react";


function AuditorsDropdown()
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

   <label className="mb-2">Year* &nbsp;</label>
   <select name="year" className="form-control">
   <option>2019</option>
   <option>2020</option>
   <option>2021</option>
   <option>2022</option>
   </select>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <label className="mb-2">Frequency* &nbsp;</label>
   <select name="frequency" className="form-control">
   <option>Monthly</option>
   <option>Quarterly</option>
   </select>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <label className="mb-2">Period* &nbsp;</label>
   <select name="period" className="form-control">
   <option>January</option>
   <option>February</option>
   <option>March</option>
   <option>April</option>
   <option>May</option>
   <option>June</option>
   <option>July</option>
   <option>August</option>
   <option>September</option>
   <option>October</option>
   <option>November</option>
   <option>December</option>
   <option>January-March</option>
   <option>April-June</option>
   <option>July-September</option>
   <option>October-December</option>
   </select>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <div className="abc">
       <label className="ab-c">Collection Type *&nbsp;</label>
       <select name="period" className="form-control">
   <option>RA</option>
   <option>RES</option>
   </select>
   &nbsp; &nbsp; &nbsp; &nbsp;

   <label className="ab-c">Cluster Id&nbsp;</label>
       <select name="cluster-id" className="form-control">
       </select>   
       &nbsp; &nbsp; &nbsp; &nbsp;

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
   </div>

   <label className="ab-c">Auditor Id&nbsp;</label>
       <textarea name="auditor-id" className="form-control">
       </textarea> 
       &nbsp; &nbsp; &nbsp; &nbsp;

       <label className="ab-c">Auditor Name&nbsp;</label>
       <textarea name="auditor-name" className="form-control">
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
   </div>
   
   
  );

} 
export default AuditorsDropdown ;