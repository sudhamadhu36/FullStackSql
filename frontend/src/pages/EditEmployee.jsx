import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate,useParams} from 'react-router-dom'
import axios from "axios";
import './LoginStyle.css';


const EditEmployee = () =>{

    const [empName, setEmpName]=useState('')
    const [sex, setSex]=useState('')
    const [dob, setDob]=useState('')
    const [salary, setSalary]=useState('')
    const [department, setDepartment]=useState('')
    const [file, setFile]=useState(null)

    const handleFileChange=(e)=>{
        setFile(e.target.files[0]);
    }

    let navigate = useNavigate();
    const {id}=useParams();

    useEffect (()=>{
        if(id){
        axios.get(`http://localhost:8081/api/getEmployee/${id}`)
        .then((response)=>{
            setEmpName(response.data[0].empName);
            setSex(response.data[0].sex);
            setDob(response.data[0].dob);
            setSalary(response.data[0].salary);
            setDepartment(response.data[0].department);
        }).catch(error =>{
            console.log(error)
        });
    }},[id])

    const editEmployee=(e)=>{

        e.preventDefault();
        const formData=new FormData();
        formData.append('empName', empName);
        formData.append('sex', sex);
        formData.append('dob', dob);
        formData.append('salary', salary);
        formData.append('department', department);
        formData.append('photo', file);

        if(formData.empName !== "" && formData.sex !== "" && formData.dob !== "" && formData.salary !== "" && formData.department !== "" && formData.photo !==""){
            if(id){
                axios.put(`http://localhost:8081/api/update/${id}`, formData,{
                    headers:{
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((res)=>
                {
                    console.log(res.data);
                    navigate("/Employees")
                }).catch((error) =>{
                        console.log(error);
                });
            }else{
                alert("Please fill all the inputs");
            }
        }
    }

    
    return(
        <div>
        <div classname="container">
            <div className="d-flex justify-context-center align-items-center">
                <div className="card col-md-6 offset-md-3 offset-md-3 w-50 boarder editemployeeform">
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
                                    value={dob}
                                    //defaultValue={employee?.dob}
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
                                    //defaultValue={employee?.salary}
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
                                    //defaultValue={employee?.department}
                                    onChange={(e)=>setDepartment(e.target.value)}>
                                </input>
                            </div>
                            <div className="col-12 mb-3">
                                <label classname="form-label">Photo</label>
                                <input
                                    type="file"
                                    name='file'
                                    className="form-control"
                                    onChange={handleFileChange}>
                                </input>
                            </div>
                            <div>
                                <button className="btn btn-success" onClick={(e)=>editEmployee(e)}>Submit</button>
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

export default EditEmployee;