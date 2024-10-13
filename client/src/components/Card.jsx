import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className=''>
      <div className='container-fluid d-flex p-4 '>
        <table border={2} cellPadding={10} cellSpacing={0} className=" table table-info table-striped table-bordered  ">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>User Name</th>
                    <th>User email</th>
                    <th>User number</th>
                    <th colSpan={2}>Actions</th>
                   
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                <tr>
                    <td>1</td>
                    <td>Ramegowda</td>
                    <td>ramegowda@gmail.com</td>
                    <td>7483907232</td>
                    <th><button className='btn btn-outline-primary '><Link to="/update" className='text-decoration-none'>Update</Link></button></th>
                    <th><button className='btn btn-outline-primary '>Delete</button></th>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Card
