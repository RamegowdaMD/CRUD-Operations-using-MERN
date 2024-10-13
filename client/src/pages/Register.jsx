import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


function Register() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/Register', { fname, lname ,email, number })
        .then(result => {
          toast.success("User created successfully",{position:'top-center'})
            console.log(result);
            navigate('/details');
        })
        .catch(err => console.log(err));
};

return (
    <>  
    <div className='bg-secondary bg-gradient'>
     
     <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="col-md-4 col-sm-6 col-xs-12 p-4 border rounded  bg-light bg-gradient">
      <div className='d-flex justify-content-center align-item-center'>
        <h3>Enter the details to Register</h3>
      </div>
      <hr />
    <form onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="fname" className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your First Name"
          value={fname}
          onChange={e => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lname" className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Last Name"
          value={lname}
          onChange={e => setLname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="number" className="form-label">Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </div>

      <div className="d-flex justify-content-center mb-3">
        <button type="submit" className="btn btn-outline-primary">Register</button>
      </div>

      <div>
        <p>Already registered? Move to details page</p>
          <Link to="/details" className='text-decoration-none'>Click here</Link>
      
      </div>
    </form>
  </div>
</div>
</div>
   
    </>
  )
}

export default Register
