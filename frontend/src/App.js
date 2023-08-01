import './App.css';
import {BrowserRouter}  from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Mainpage from './pages/Mainpage';


function App() {
  return (
    <BrowserRouter>
    <div class="app-style">
          <div classname="container">
          <div style={{color:"coral",fontStyle:"normal",textAlign:"center"}}><h2>Employee Management System</h2></div>
              <br></br>
            <Mainpage />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
