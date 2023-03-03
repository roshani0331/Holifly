import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate} from "react-router-dom";
 
function Home(){

let history = useNavigate();

     const handleDelete = (id) => {
           var index = Employees.map(function(e) {
            return e.id
           }).index(id);
           Employees.splices(index, 1);
console.log("hii");
           history('/');
     }

    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table>
                    <thread>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                 Actions
                            </th>
                        </tr>
                    </thread>
                    <tbody>
                        {
                            Employees&& Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                        {/* <link to = {'/edit'}> */}
                                            <button onClick={() => alert(item.id)}>EDIT</button>
                                            {/* </link> */}
                                            &nbsp;
                                            <button onClick={() => handleDelete(item.id)}>DELETE</button>
                                        </td>
                                     </tr>
                                )
                            })
                            :
                            "NO data available"
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}

export default Home;