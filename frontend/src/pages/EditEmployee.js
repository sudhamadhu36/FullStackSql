import React, {useState,useEffect} from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom'
import axios from "axios";
import './LoginStyle.css';


const EditEmployee = () =>{

    const [empName, setEmpName]=useState('')
    const [sex, setSex]=useState('')
    const [dob, setDob]=useState('')
    const [salary, setSalary]=useState('')
    const [department, setDepartment]=useState('')
    //const[photo,setPhoto]=useState('')

    //const[employee,setEmployee]=useState(null);

    let navigate = useNavigate();
    const {id}=useParams();

    const employee={empName,sex,dob,salary,department};

    useEffect (()=>{

        axios.get(`http://localhost:8081/api/getEmployee/${id}`)
        .then((response)=>{
            setEmpName(response.data.empName);
            setSex(response.data.sex);
            setDob(response.data.dob);
            setSalary(response.data.salary);
            setDepartment(response.data.department);
        }).catch(error =>{
            console.log(error)
        });
    },[id]);

    const editEmployee=(e)=>{

        e.preventDefault();
        if(employee.empName !== "" && employee.sex !== "" && employee.dob !== "" && employee.salary !== "" && employee.department !== "" ){
            if(id){
                axios.put(`http://localhost:8081/api/update/${id}`, {empName, sex, dob, salary, department})
                .then((res)=>
                {
                    console.log(res.data);
                    navigate("/Employees")
                }).catch((error) =>{
                        console.log(error);
                });
            }
        }
    }

    
    return(
        <div>
        <div classname="container">
            <div className="d-flex justify-context-center align-items-center">
                <div className="card col-md-6 offset-md-3 offset-md-3 w-50 boarder addemployeeform">
                    <div className="card-body">
                    <h2 className="text-center" style={{fontStyle:"System,900,bold"}}>Edit Employee</h2>
                        <form>
                            <div className="form-group mb-2">
                                <label classname="form-label">Name</label>
                                <input
                                    type="text"
                                    placeHolder="Enter Employee Name"
                                    name="empName"
                                    className="form-control"
                                    defaultValue={employee?.empName}
                                    //</div>onChange={(e)=>setEmployee({...employee, empName: e.target.value})}
                                    onChange={(e)=>setEmpName(e.target.value)}>
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label classname="form-label">Gender</label>
                                <br></br>
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Male"
                                    //onChange={(e)=>setEmployee({...employee, sex: e.target.value})}/
                                    onChange={(e)=>setSex(e.target.value)}/>Male
                                &nbsp;
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Female"
                                    //onChange={(e)=>setEmployee({...employee, sex: e.target.value})}>Female
                                    onChange={(e)=>setSex(e.target.value)}></input>Female
                            </div>
                            <div className="form-group mb-2">
                                <label classname="form-label">DOB</label>
                                <input
                                    type="date"
                                    name="dob"
                                    className="form-control"
                                    defaultValue={employee?.dob}
                                    onChange={(e)=>setDob(e.target.value)}>
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label classname="form-label">Salary</label>
                                <input
                                    type="text"
                                    placeHolder="Enter Salary"
                                    name="salary"
                                    className="form-control"
                                    defaultValue={employee?.salary}
                                    onChange={(e)=>setSalary(e.target.value)}>
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label classname="form-label">Department</label>
                                <input
                                    type="text"
                                    placeHolder="Enter Department"
                                    name="department"
                                    className="form-control"
                                    defaultValue={employee?.department}
                                    //</div>onChange={(e)=>setEmployee({...employee, department: e.target.value})}>
                                    onChange={(e)=>setDepartment(e.target.value)}>
                                </input>
                            </div>
                            {/*<div className="form-group mb-2">
                                <label classname="form-label">Photo</label>
                                <input
                                    type="file"
                                    name='file'
                                    accept="image/*"
                                    className="form-control"
                                    onChange={(e)=>setPhoto(e.target.files[0])}>
                                </input>
                            </div>*/}
                            <div>
                                <button className="btn btn-success" onClick={editEmployee}>Submit</button>
                                &nbsp;
                                <Link  to="/Employees" className="btn btn-danger"><button>Cancel</button></Link>
                            </div>
                        </form>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}

export default EditEmployee;