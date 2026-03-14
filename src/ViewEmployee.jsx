import React from "react";
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
export default function ViewEmployee() {
  let [employees, setEmployees] = useState([]);
  let [showform, setShoform] = useState(false);

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

  let readytoupdate = () => {
    setShoform(true);
  };
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
                <p class="card-text">
                  <p>
                    Email:<strong>{emp.contactno}</strong>
                  </p>
                  <p>
                    Contactno: <strong>{emp.contactno}</strong>
                  </p>
                  <p>
                    Department: <strong>{emp.department}</strong>
                  </p>
                  <p>
                    {" "}
                    Designation <strong>{emp.designation}</strong>{" "}
                  </p>
                  <p>
                    {" "}
                    Worklocation <strong>{emp.worklocation}</strong>
                  </p>
                </p>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      deleteemployee(emp.empid);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      readytoupdate();
                    }}
                  >
                    Update
                  </button>
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
                <button
                  type="button"
                  onClick={() => {
                    setShoform(false);
                  }}
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <h5>Personal Information</h5>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label>First Name</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Middle Name</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Last Name</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Email</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Contact Number</label>
                      <input type="text" className="form-control" />
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
                      <input type="date" className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Education</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Current Address</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Permanent Address</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Aadhar Number</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>PAN Number</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <h5 className="mt-3">Work Information</h5>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label>Experience</label>
                      <input type="number" className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Salary</label>
                      <input type="number" className="form-control" />
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
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Department</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label>Reporting Manager</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Work Location</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Joining Date</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>

                  <h5 className="mt-3">Profile Image</h5>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Upload Profile</label>
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                      />
                    </div>
                    <div className="cold-md-6 mb-3">
                      <label>Profile Preview</label>
                      <img src={profile} />
                    </div>
                  </div>

                  <button className="btn btn-primary mt-3">Add Employee</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
