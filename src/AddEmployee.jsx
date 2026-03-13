import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function AddEmployee() {

    let [profile,setProfile]=useState("");
    let [firstname,setFirstname]=useState("");
    let [middlename,setMiddlename]=useState("");
    let [lastname,setLastname]=useState("");
    let [email,setEmail]=useState("");
    let [contactno,setContactno]=useState(0);
    let [gender,setGender]=useState("");
    let [dob,setDob]=useState("");
    let [education,setEducation]=useState("");
    let [caddress,setCaddress]=useState("");
    let [paddress,setPaddress]=useState("");
    let [adharno,setAdharno]=useState(0);
    let [panno,setPanno]=useState("");
    let [exp,setExp]=useState("");
    let [salary,setSalary]=useState(0);
    let [status,setStatus]=useState("");
    let [designation,setDesignation]=useState("");
    let [department,setDepartment]=useState("");
    let [reportingmanager,setReportingmanager]=useState("");
    let [worklocation,setWorklocation]=useState("");
    let [joiningdate,setJoiningdate]=useState("");



let handleprofile=(event)=>{
    let file=event.target.files[0];
    console.log(file);
    let filepath=`./img/${file.name}`;
    console.log(filepath);
    setProfile(filepath);

}

let addEmp=(event)=>{
event.preventDefault();
let employee={firstname,middlename,lastname,dob,
    gender,caddress,paddress,adharno,panno,education,contactno,
    email,exp,salary,status,designation,department,reportingmanager,
    worklocation,joiningdate};

    axios.post("http://localhost:8080/addemp",employee)
    .then((response)=>{
        if(response.data=="Employee added successfully"){
        alert(response.data);
        }
    })
    .catch((error)=>{
        alert("Failed to add Employee");
    })
}

  return (
    <div>
      <div className="container mt-4">

<h3 className="mb-3">Add Employee</h3>

<form onSubmit={addEmp}>

<h5>Personal Information</h5>

<div className="row">

<div className="col-md-4 mb-3">
<label>First Name</label>
<input type="text" onChange={(e)=>{setFirstname(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Middle Name</label>
<input type="text"onChange={(e)=>{setMiddlename(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Last Name</label>
<input type="text" onChange={(e)=>{setLastname(e.target.value);}}className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Email</label>
<input type="email" onChange={(e)=>{setEmail(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Contact Number</label>
<input type="text" onChange={(e)=>{setContactno(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Gender</label>
<select onChange={(e)=>{setGender(e.target.value);}}className="form-control">
<option>Select Gender</option>
<option>Male</option>
<option>Female</option>
</select>
</div>

<div className="col-md-4 mb-3">
<label>Date of Birth</label>
<input type="date" onChange={(e)=>{setDob(e.target.value);}}className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Education</label>
<input type="text" onChange={(e)=>{setEducation(e.target.value);}}className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Current Address</label>
<input type="text" onChange={(e)=>{setCaddress(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Permanent Address</label>
<input type="text" onChange={(e)=>{setPaddress(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Aadhar Number</label>
<input type="text" onChange={(e)=>{setAdharno(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>PAN Number</label>
<input type="text" onChange={(e)=>{setPanno(e.target.value);}} className="form-control"/>
</div>

</div>


<h5 className="mt-3">Work Information</h5>

<div className="row">

<div className="col-md-4 mb-3">
<label>Experience</label>
<input type="number" onChange={(e)=>{setExp(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Salary</label>
<input type="number" onChange={(e)=>{setSalary(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Status</label>
<select  onChange={(e)=>{setStatus(e.target.value);}} className="form-control">
<option>Select Status</option>
<option>Active</option>
<option>Inactive</option>
</select>
</div>

<div className="col-md-4 mb-3">
<label>Designation</label>
<input type="text" onChange={(e)=>{setDesignation(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Department</label>
<input type="text" onChange={(e)=>{setDepartment(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Reporting Manager</label>
<input type="text" onChange={(e)=>{setReportingmanager(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Work Location</label>
<input type="text" onChange={(e)=>{setWorklocation(e.target.value);}} className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Joining Date</label>
<input type="date" onChange={(e)=>{setJoiningdate(e.target.value);}} className="form-control"/>
</div>

</div>


<h5 className="mt-3">Profile Image</h5>

<div className="row">

<div className="col-md-6 mb-3">
<label>Upload Profile</label>
<input type="file" accept="image/*" onChange={(event)=>{handleprofile(event)}} className="form-control"/>
</div>
<div className="cold-md-6 mb-3">
    <label >Profile Preview</label>
    <img src={profile} />
</div>

</div>

<button className="btn btn-primary mt-3">Add Employee</button>

</form>

</div>  
    </div>
  )
}
