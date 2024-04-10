import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
import './style.css'

const TableData = () => {
    const [input, setInput] = useState([
        { name: '', email: '', salary: '' },
    ])
    const addMore = () => {
        let newfield = { name: '', phone: '', salary: '' }
        setInput([...input, newfield])
    }
    const removeFiled = (index) => {
        let olddata = [...input];
        olddata.splice(index, 1);
        setInput(olddata)
    }
    return (
        <>
            <center>
                <div>
                    <h1>React-Add & Delete Table Rows Dynamically</h1>
                </div>
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email Address</th>
                                <th>Salary</th>
                                <th>
                                <button type="button" onClick={() => addMore()} className='btn btn-success'><i className="fa-regular fa-square-plus"></i></button>
                                </th>
                            </tr>
                        </thead>
                        {/* <br /> */}
                        <tbody>
                            {
                                input.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td><input type='text' /></td>
                                            <td><input type='email' /></td>
                                            <td><input type='number' /></td>
                                            <td>
                                                <button type='button' className='btn btn-danger' onClick={() => removeFiled(i)}>
                                                    <i className="fa-regular fa-rectangle-xmark"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </form><br></br>
                
            </center>
        </>
    )
}

export default TableData