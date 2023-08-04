import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios";
import './LoginStyle.css';


const AddEmployee = () =>{
    
    const [empName, setEmpName]=useState('')
    const [sex, setSex]=useState('')
    const [dob, setDob]=useState('')
    const [salary, setSalary]=useState('')
    const [department, setDepartment]=useState('')
    const [userInfo, setUserInfo]=useState({
        file:[],
        filepreview:null,
    });
    
    const navigate = useNavigate();
    
    const handleFileChange=(e)=>{
        setUserInfo({
            ...userInfo,
            file:e.target.files[0],
            filepreview:URL.createObjectURL(e.target.files[0]),
        });
    }

    const saveEmployee=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('empName', empName);
        formData.append('sex', sex);
        formData.append('dob', dob);
        formData.append('salary', salary);
        formData.append('department', department);
        formData.append('image', userInfo.file);
        
        if(formData.empName !== "" && formData.sex !== "" && formData.dob !== "" && formData.salary !== "" && formData.department !== "" && formData.image !==""){
            
            axios.post("http://localhost:8081/api/post", formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => 
            {
                console.log(res.data);
                navigate("/Employees");
            }).catch(err=> console.log(err));
           
            }else{
                alert("Please fill all the inputs");
            }
    }
    

    return(
        <div>
        <div classname="container">
            <div className="d-flex justify-context-center align-items-center">
                <div className="card col-md-6 offset-md-3 offset-md-3 w-50 boarder addemployeeform">
                    <div className="card-body">
                    <h2 className="text-center" style={{fontStyle:"System,900,bold"}}>Add Employee</h2>
                        <form>
                            <div className="form-group mb-2">
                                <label classname="form-label">Name</label>
                                <input
                                    type="text"
                                    placeHolder="Enter Employee Name"
                                    name="empName"
                                    className="form-control"
                                    value={empName}
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
                                    onChange={(e)=>setSex(e.target.value)}/>Male
                                &nbsp;
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Female"
                                    onChange={(e)=>setSex(e.target.value)}></input>Female
                                
                            </div>
                            <div className="form-group mb-2">
                                <label classname="form-label">DOB</label>
                                <input
                                    type="date"
                                    name="dob"
                                    className="form-control"
                                    value={dob}
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
                                    value={salary}
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
                                    value={department}
                                    onChange={(e)=>setDepartment(e.target.value)}>
                                </input>
                            </div>
                            <div className="col-12 mb-3">
                                <label classname="form-label">Photo</label>
                                <input
                                    type="file"
                                    name='image'
                                    className="form-control"
                                    onChange={handleFileChange}>
                                </input>
                            </div>
                            <div>
                                <button className="btn btn-success" onClick={(e)=> saveEmployee(e)}>Submit</button>
                                &nbsp;
                                <Link  to="/Employees" className="btn btn-danger">Cancel</Link>
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
export default AddEmployee;