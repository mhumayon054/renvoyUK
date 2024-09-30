import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { BsThreeDots } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { FiEdit } from "react-icons/fi";

export default function Tablebox() {
    return (
        <div className='container-fluid'>
                <div className='table_box'>
                    <div className="Form-table">
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='flex-box-table'><Form.Check aria-label="option 1" /> <span> LOAD</span></th>
                                        <th>CUSTOMER</th>
                                        <th>DRIVER </th>
                                        <th>PICK UP DATE </th>
                                        <th>DROP OFF</th>
                                        <th>RATE</th>
                                        <th>DOCUMENTS</th>
                                        <th>STATUS</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            <Form.Check aria-label="option 1" />
                                            <div className="username_data">
                                                <div className="icon_box square">
                                                <img src="/images/profile.png" alt="" />
                                                </div>
                                                <div className="dashboard_side-bar-footer_usernames">
                                                    <p>333123</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Bank of America</td>
                                        <td>
                                            <div  className="username_data">
                                            <div className="icon_box">
                                                <img src="/images/profile.png" alt="" />
                                            </div>
                                            <div className="dashboard_side-bar-footer_usernames">
                                                <p>Fullname</p>
                                            </div>
                                            </div>
                                            
                                        </td>
                                        <td>Springfield, OH</td>

                                        <td>Springfield, OH</td>
                                        <td>$928.41</td>
                                        <td><img src="" alt="" /></td>
                                        <td><div className='status'>Complete</div> </td>


                                        <td className='dropdown_td'>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" className='btn btn-light btn-sm calculator-list-dropdown' >
                                                    <BsThreeDots />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">

                                                        <FiEdit /> Download

                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1">

                                                        <FiEdit /> Download

                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </div>
    )
}