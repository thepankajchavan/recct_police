import { Link } from 'react-router-dom'
import { Table, Image, Modal, Button } from 'react-bootstrap'

// import { tableUserData } from './UserTableData'
import { useEffect, useState } from 'react'
import axios from 'axios';

function TableLostFound() {

    const [users, setUsers] = useState([]);
    const [data, setData] = useState();
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = (id) => {
        axios.get('/admin/fetch-report/' + id)
            .then((res) => {
                setData(res.data)
                console.log(res.data);
                setShow(true)
            })

    }
    let token = document.head.querySelector('meta[name="csrf-token"]');
    useEffect(() => {
        axios.get('/admin/fetch-reports')
            .then((res) => {
                setUsers(res.data)
            })
    }, [])

    return (
        <>
            <Table responsive bordered hover className="mb-0">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Contact No.</th>
                        <th>Report Type</th>
                        <th>Station Name</th>
                        <th>Document Name</th>
                        <th>Document Number</th>
                        <th>Date/Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data, idx) => {
                        return (
                            <tr key={idx}>

                                <td>
                                    <Link to="#!" className="d-flex gap-3 align-items-center">
                                        <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                            <div>{data.name}</div>

                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#!" className="d-flex gap-3 align-items-center">
                                        <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                            <div>{data.contact}</div>

                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#!" className="d-flex gap-3 align-items-center">
                                        <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                            <div>{data.report_type}</div>

                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#!" className="d-flex gap-3 align-items-center">
                                        <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                            <div>{data.police_station_name}</div>

                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#!" className="d-flex gap-3 align-items-center">
                                        <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                            <div>{data.document_name}</div>

                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#!" className="d-flex gap-3 align-items-center">
                                        <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                            <div>{data.document_number}</div>

                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="flex-shrink-0" style={{ flexShrink: 0 }}>

                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div>{data.datetime}</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <form method='post' action={'/admin/police-station/' + data.id}>
                                        <input type='hidden' value={token.content} name='_token' />
                                        <input type='hidden' value='DELETE' name='_method' />
                                        <button type='button' className='btn px-0 py-0' onClick={()=>handleShow(data.id)}><span className="badge bg-info"><i className="fi fi-rr-eye"></i></span></button>
                                        {/* <Link to={"/admin/police-station/" + data.id + "/edit"} className='btn px-0 py-0'>
                                            <span className="badge bg-info ">
                                                <i className="fi fi-rr-edit"></i>

                                            </span>
                                        </Link> */}
                                        <button type='submit' className='btn px-0 py-0'><span className="badge bg-info"><i className="fi fi-rr-trash"></i></span></button>
                                    </form>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Lost and Found Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data && <table>
                        <tbody>
                            <tr><td>Report Type</td><td>:  {data.report_type} </td></tr>
                            <tr><td>Article Type</td><td>:  {data.document_name} </td></tr>
                            <tr><td>Police Station</td><td>:  {data.police_station_name} </td></tr>
                            <tr><td>Lost / Found Date & Time</td><td>:  {data.datetime} </td></tr>
                            <tr><td>Full Name</td><td>:  {data.name} </td></tr>
                            <tr><td>E-mail ID</td><td>:  {data.email} </td></tr>
                            <tr><td>Contact Number</td><td>:  {data.contact} </td></tr>
                            <tr><td>Address</td><td>:  {data.address} </td></tr>
                            <tr><td>Pin code</td><td>:  {data.pincode} </td></tr>
                            <tr><td>Aadhar Card No</td><td>:  {data.document_number} </td>

                            </tr>
                        </tbody>
                    </table>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="soft-danger" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TableLostFound
