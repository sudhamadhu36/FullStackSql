import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";

function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const reg={name,email,password};
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8081/api/register/save", {
          name: name,
          email: email,
          password: password,
          });
          if(reg.name !== "" && reg.email !== "" && reg.password !== ""){
            alert("Employee Registation Successfully");
            navigate('/Login')
          }else{
            alert("Please Fill all the inputs");
          }
          
        } catch (err) {
          alert(err);
        }
      }


    return(
        <div>
            <div className="container mt-4">
                <div className="d-flex vh-100 bg-dark justify-context-center align-items-center">
                    <div className="card col-md-2 offset-md-3 offset-md-3 w-40 boarder registrationform">
                        <div className="card-body mb-2">
                        <div ><h2 className="text-center" style={{fontStyle:"System,900,bold"}}>Sign Up</h2></div>
                            <form>
                                <div className="form-group  mb-2">
                                    <label classname="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        className="form-control" 
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e)=>{setName(e.target.value)}}>
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label classname="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        className="form-control" 
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e)=>(setEmail(e.target.value))}>
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label classname="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        className="form-control" 
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}>
                                    </input>
                                 </div>
                                <br></br>
                                <div className='d-grid'>
                                    <button type="submit" className="btn btn-primary" onClick={save}  style={{backgroundColor:"coral"}}>Sign Up</button>
                                </div>
                                <br></br>
                                <div className="text-center">
                                    Already have an Account?
                                    &nbsp;
                                    <Link to="/Login" style={{color:"purple"}}>Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;