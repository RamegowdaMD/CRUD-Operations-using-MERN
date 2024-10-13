import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center p-4 bg-light rounded shadow">
          <h5 className="mb-3">Hello everyone</h5>
          <h3 className="mb-4">Welcome to PRODIGY_FS_02 Task </h3>
          <p className="mb-4">
            About <strong>CRUD Operations</strong>
          </p>
          <h6 className="mb-4">Do you want to Register</h6>
          <Link to="/Register" className="btn btn-primary btn-lg">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
