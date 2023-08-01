import React, {Fragment,useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
//import axios from 'axios';
//import {toast} from "react-toastify";
//import {Link} from 'react-router-dom'

function Employee(){
    return(
        <Fragment>
            <div className="container">
                <div className="text-center" style={{color:"black",fontStyele:"normal"}}><h3>List of Employee</h3></div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr style={{color:"black",textalign:"center"}}>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Salary</th>
                            <th>Department</th>
                            <th></th>
                        </tr>
                    </thead>
                </Table>
            </div>
        </Fragment>
    )
}
export default Employee;