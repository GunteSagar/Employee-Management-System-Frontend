import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
export default function AdminNav() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-info bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EMS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" className="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/addemp" className="nav-link">Add Employee</Link>
        </li>
        <li class="nav-item">
          <Link to="/viewemp" className="nav-link">View Employee</Link>
        </li>
        <li class="nav-item">
          <Link to="/aboutus" className="nav-link">About us</Link>
        </li>
        <li class="nav-item">
          <Link to="/contactus" className="nav-link">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link to="/service" className="nav-link">Services</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
