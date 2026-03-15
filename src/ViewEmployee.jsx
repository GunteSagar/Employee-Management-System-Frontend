import React from "react";
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
export default function ViewEmployee() {
  let [employees, setEmployees] = useState([]);
  let [showform, setShoform] = useState(false);
  
   let [profile,setProfile]=useState("");
      let [firstname,setFirstname]=useState("");
      let [middlename,setMiddlename]=useState("");
      let [lastname,setLastname]=useState("");
      let [email,setEmail]=useState("");
      let [contactno,setContactno]=useState(0);
      let [gender,setGender]=useState("");
      let [dob,setDob]=useState("");
      let [edu,setEducation]=useState("");
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
      let [empid,setEmpid]=useState("");
     

  useEffect(() => {
    axios
      .get(`http://localhost:8080/findallemp`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch(() => {
        alert("Error in Fetching");
      });
  }, []);

  let deleteemployee = (empid) => {
    axios
      .delete(`http://localhost:8080/deletebyempid?id=${empid}`)
      .then((response) => {
        if (response.data == "Employee deleted successfully") {
          alert(response.data);
        }
      })
      .catch((error) => {
        alert("Error in deleting employee data");
      });
  };

  let readytoupdate = (emp) => {
    setShoform(true);
    setFirstname(emp.firstname);
    setMiddlename(emp.middlename);
    setLastname(emp.lastname);
    setEmail(emp.email);
    setContactno(emp.contactno);
    setGender(emp.gender);
    setDob(emp.dob);
    setEducation(emp.edu);
    setCaddress(emp.caddress);
    setPaddress(emp.paddress);
    setAdharno(emp.adharno);
    setPanno(emp.panno);
    setExp(emp.exp);
    setSalary(emp.salary);
    setStatus(emp.status);
    setDesignation(emp.designation);
    setDepartment(emp.department);
    setReportingmanager(emp.reportingmanager);
    setWorklocation(emp.worklocation);
    setJoiningdate(emp.joiningdate);
    setEmpid(emp.empid);
    setProfile(emp.profile);
  };

  let handleprofile=(event)=>{
    let file=event.target.files[0];
    console.log(file);
    let filepath=`/img/${file.name}`;
    console.log(filepath);
    setProfile(filepath);
}

  let updateEmployee=(e)=>{
    e.preventDefault();
       let employee={empid,firstname,middlename,lastname,dob,profile,
    gender,caddress,paddress,adharno,panno,edu,contactno,
    email,exp,salary,status,designation,department,reportingmanager,
    worklocation,joiningdate};

    axios.put(`http://localhost:8080/update?id=${empid}`,employee)
    .then((response)=>{
      if(response.data=="Record updated successfully"){
        alert(response.data);
      }
    })
    .catch((error)=>{
      alert("Error in Updating the Employee info");
    })
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {employees.map((emp) => (
            <div class="card col-4 m-2" style={{width: "18rem"}}>
              <img src={emp.profile} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  {emp.firstname} {emp.middlename} {emp.lastname}
                </h5>
                <div className="card-text">
  <p>Email: <strong>{emp.email}</strong></p>
  <p>Contactno: <strong>{emp.contactno}</strong></p>
  <p>Department: <strong>{emp.department}</strong></p>
  <p>Designation: <strong>{emp.designation}</strong></p>
  <p>Worklocation: <strong>{emp.worklocation}</strong></p>
</div>
             
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      deleteemployee(emp.empid);
                    }}
                  >
                    Delete
                  </button>
                  <button  className="btn btn-danger"  onClick={() => {  readytoupdate(emp);  }} >  Update  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showform ? (
        <div class="modal start d-block" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Update Employee Form</h5>
                <button type="button" onClick={() => { setShoform(false); }}
                  class="btn-close" data-bs-dismiss="modal"  aria-label="Close" ></button>
              </div>
              <div class="modal-body">

                <form onSubmit={updateEmployee}>
                  <h5>Personal Information</h5>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label>First Name</label>
                      <input type="text" value={firstname} onChange={(e)=>{setFirstname(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Middle Name</label>
                      <input type="text" value={middlename} onChange={(e)=>{setMiddlename(e.target.value);}}className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Last Name</label>
                      <input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Email</label>
                      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Contact Number</label>
                      <input type="text" value={contactno} onChange={(e)=>{setContactno(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Gender</label>
                      <select value={gender} onChange={(e)=>{setGender(e.target.value);}} className="form-control">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Date of Birth</label>
                      <input type="date" value={dob} onChange={(e)=>{setDob(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Education</label>
                      <input type="text" value={edu} onChange={(e)=>{setEducation(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Current Address</label>
                      <input type="text" value={caddress} onChange={(e)=>{setCaddress(e.target.value);}}  className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Permanent Address</label>
                      <input type="text" value={paddress} onChange={(e)=>{setPaddress(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Aadhar Number</label>
                      <input type="text" value={adharno} onChange={(e)=>{setAdharno(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>PAN Number</label>
                      <input type="text" value={panno} onChange={(e)=>{setPanno(e.target.value);}} className="form-control" />
                    </div>
                  </div>

                  <h5 className="mt-3">Work Information</h5>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label>Experience</label>
                      <input type="number"  value={exp} onChange={(e)=>{setExp(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Salary</label>
                      <input type="number"value={salary} onChange={(e)=>{setSalary(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Status</label>
                      <select value={status} onChange={(e)=>{setStatus(e.target.value);}} className="form-control">
                        <option>Select Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Designation</label>
                      <input type="text"  value={designation} onChange={(e)=>{setDesignation(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Department</label>
                      <input type="text" value={department} onChange={(e)=>{setDepartment(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Reporting Manager</label>
                      <input type="text" value={reportingmanager} onChange={(e)=>{setReportingmanager(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Work Location</label>
                      <input type="text"  value={worklocation} onChange={(e)=>{setWorklocation(e.target.value);}} className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Joining Date</label>
                      <input type="date"  value={joiningdate} onChange={(e)=>{setJoiningdate(e.target.value);}} className="form-control" />
                    </div>
                  </div>

                  <h5 className="mt-3">Profile Image</h5>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Upload Profile</label>
                      <input  type="file" accept="image/*"  onChange={(e)=>{handleprofile(e)}}  className="form-control"  />
                    </div>
                    <div className="cold-md-6 mb-3">
                      <label>Profile Preview</label>
                      <p>{profile}this is profile</p>
                      <img src={profile} />
                    </div>
                  </div>
                  <button className="btn btn-primary mt-3">Update</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

