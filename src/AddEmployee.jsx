import React from 'react'

export default function AddEmployee() {
  return (
    <div>
      <div className="container mt-4">

<h3 className="mb-3">Add Employee</h3>

<form>

<h5>Personal Information</h5>

<div className="row">

<div className="col-md-4 mb-3">
<label>First Name</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Middle Name</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Last Name</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Email</label>
<input type="email" className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Contact Number</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Gender</label>
<select className="form-control">
<option>Select Gender</option>
<option>Male</option>
<option>Female</option>
</select>
</div>

<div className="col-md-4 mb-3">
<label>Date of Birth</label>
<input type="date" className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Education</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Current Address</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Permanent Address</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Aadhar Number</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>PAN Number</label>
<input type="text" className="form-control"/>
</div>

</div>


<h5 className="mt-3">Work Information</h5>

<div className="row">

<div className="col-md-4 mb-3">
<label>Experience</label>
<input type="number" className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Salary</label>
<input type="number" className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Status</label>
<select className="form-control">
<option>Select Status</option>
<option>Active</option>
<option>Inactive</option>
</select>
</div>

<div className="col-md-4 mb-3">
<label>Designation</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Department</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-4 mb-3">
<label>Reporting Manager</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Work Location</label>
<input type="text" className="form-control"/>
</div>

<div className="col-md-6 mb-3">
<label>Joining Date</label>
<input type="date" className="form-control"/>
</div>

</div>


<h5 className="mt-3">Profile Image</h5>

<div className="row">

<div className="col-md-6 mb-3">
<label>Upload Profile</label>
<input type="file" accept="image/*" className="form-control"/>
</div>

</div>

<button className="btn btn-primary mt-3">Add Employee</button>

</form>

</div>  
    </div>
  )
}
