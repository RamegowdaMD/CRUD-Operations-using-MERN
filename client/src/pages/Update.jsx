import React, { useEffect, useState } from 'react'
import { Link , useNavigate  , useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function Update() {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/Update/${id}`)
      .then(response => {
        const { fname, lname, email, number } = response.data;
        setFname(fname);
        setLname(lname);
        setEmail(email);
        setNumber(number);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { fname, lname, email, number };
    axios.put(`http://localhost:3000/Update/${id}`, updatedUser)
      .then(response => {
        console.log("User updated:", response.data);
        toast.success(response.data.msg , {position:"top-center"})
        navigate('/details'); 
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className='bg-secondary bg-gradient'>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-4 col-sm-6 col-xs-12 p-4 border rounded bg-light bg-gradient">
            <div className='d-flex justify-content-center align-items-center'>
              <h3>Enter the details to Update</h3>
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
                <button type="submit" className="btn btn-outline-primary">Update</button>
              </div>
            </form>
            <div>
              <p>Already Updated? Move to details page</p>
              <Link to="/details" className='text-decoration-none'>Click here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
