import './App.css';
import {BrowserRouter}  from 'react-router-dom';
import Mainpage from './pages/Mainpage';
//textAlign:"center"

function App() {
  return (
    <BrowserRouter>
    <div class="app-style">
          <div classname="container">
          <div className="text-center" style={{color:"coral",fontStyle:"normal"}}><h2>Employee Management System</h2></div>
              <br></br>
            <Mainpage />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
