import {  useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const values={email,password};

    async function login(e) {
        e.preventDefault();
    
        try {
            await axios.post("http://localhost:8081/api/register/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
                if(values.email ==="" && values.password===""){
                    alert("Please fill all the inputs");
                }
                else if(values.email ==="" || values.password===""){
                    alert("Email or Password not Exists");
                }
                else if(res.data.Status === "Success"){
                    navigate('/Employees');
                }
                else{
                    alert ("Incorrect Email or Password");
                }
            }, fail => {
                console.error(fail);
            });
            }catch (err) {
            alert(err);
          }
    }
  
    return (
        <div>
        <div className="container">
            <div className="d-flex justify-context-center align-items-center">
            <div className="card col-md-2 offset-md-3 offset-md-3 w-40 boarder loginform">
                <div className="card-body">
                    <h2 className="text-center" style={{fontStyle:"System,900,bold"}}>Login</h2>
                    <form >
                        <div className="form-group mb-2">
                            <label classname="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}>
                            </input>
                            
                        </div>
                        <div className="form-group mb-2">
                            <label classname="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}>
                            </input>
                        </div>
                        <br></br>
                        <div className='d-grid'>
                        <button type="submit" className="btn btn-primary" onClick={login}  style={{backgroundColor:"coral"}}>Login</button>
                        </div>
                        <br></br>
                        <div className="text-center">
                             Don't have an Account?
                            &nbsp;
                            <Link to='/Register' style={{color:"purple"}}> Sign Up </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
     </div>
    )
  }
  
  export default Login;