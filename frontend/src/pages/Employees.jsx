import React, {Fragment,useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from 'react-bootstrap';
import axios from 'axios';
import {toast} from "react-toastify";
import {Link} from 'react-router-dom'


function Employees(){

    const [employees, setEmployees] = useState([]);


    useEffect(() => {

        getAllEmployees();

    }, [])

    const getAllEmployees =()=>{

        axios.get("http://localhost:8081/api/getEmployee").then((response)=>{
            setEmployees(response.data);
        }).catch(error =>{
            console.log(error)
        });
    };

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        if(window.confirm("Are you sure that you want to delete that employee"))
            axios.delete(`http://localhost:8081/api/remove/${id}`)
            .then((response)=>{
            console.log(response.data);    
            getAllEmployees()
        }).catch((error)=>{
            console.log(error)
        });
        toast.success("Employee Deleted successfully"); 
    };

    return(
        <Fragment>
            <div className="container">
            <div className="text-center" style={{color:"black",fontStyle:"normal",textAlign:"center"}}><h3>List of Employee</h3></div>
                <Table striped bordered hover size="sm" className="center">
                    <thead>
                        <tr style={{color:"black"}}>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>DateOfBirth</th>
                                <th>Salary </th>
                                <th>Department</th>
                                <th>Photo</th>
                                <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            employees.map((employee,index) => (
                                 <tr key={employee.id} >
                                       <th scope="row">{index+1}</th>
                                        <td>{employee.empName}</td>
                                        <td>{employee.sex}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.department}</td>  
                                        <td>{
                                            <img src={`http://localhost:8081/${employee.image_path}`} alt={employee.name} style={{width:'50px',height:'50px'}}/>}
                                        </td>             
                                        <td>
                                            <Link  to={`/edit-employee/${employee.id}`} >
                                                <Button style={{backgroundColor:"violet"}}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <button className="btn btn-danger" onClick={(e) => deleteEmployee(e, employee.id)}
                                            style={{marginLeft:"10px"}}>Delete</button>
                                        </td>
                                    </tr>
                            ))
                        }

                    </tbody>
                    </Table>
                    <br>
                    </br>
                     <div>
                    <Link to="/add-employee">
                        <Button size="lg" style={{backgroundColor:"coral"}}>Add Employee</Button>
                    </Link>
                    </div>
                    <br></br>
                </div>
        </Fragment>
    )

}

export default Employees;