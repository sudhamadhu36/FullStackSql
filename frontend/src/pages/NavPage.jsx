import React from "react";
import { Routes, Route } from "react-router-dom";
import Employees from './Employees';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import Register from './Register';
import Login from './Login';

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path="/Employees" element={<Employees/>}/>
        <Route exact path="/add-employee" element={<AddEmployee/>}/>
        <Route exact path="/edit-employee/:id" element={<EditEmployee/>}/>
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;