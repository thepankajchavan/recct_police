import { Link } from 'react-router-dom'
import { Table, Image } from 'react-bootstrap'

// import { tableUserData } from './UserTableData'
import { useEffect, useState } from 'react'
import axios from 'axios';

function TablePoliceStations() {

    const [users, setUsers] = useState([]);
    let token = document.head.querySelector('meta[name="csrf-token"]');
    useEffect(() => {
        axios.get('/admin/fetch-stations')
            .then((res) => {
                setUsers(res.data)
            })
    }, [])

    return (
        <Table responsive bordered hover className="mb-0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Station Name</th>
                    <th>Station Photo</th>
                    <th>Jurisdiction Map</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Police Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((data, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                {data.id}

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
                                        <Image src={'/uploads/police-station/station_image/' + data.police_station_image} alt="" className="img-fluid" style={{height:50,}}/>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <Link to="#!" className="d-flex gap-3 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <Image src={'/uploads/police-station/jurisdiction_map/' + data.jurisdiction_map} alt="" className="img-fluid" style={{height:50,}}/>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <Link to="#!" className="d-flex gap-3 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div>{data.police_station_email}</div>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <Link to="#!" className="d-flex gap-3 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div>{data.telephone}</div>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <Link to="#!" className="d-flex gap-3 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div>{data.police_name}</div>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>

                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div>{data.police_phone}</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <form method='post' action={'/admin/police-station/' + data.id}>
                                    <input type='hidden' value={token.content} name='_token' />
                                    <input type='hidden' value='DELETE' name='_method' />
                                    <Link to={"/admin/police-station/" + data.id + "/edit"} className='btn px-0 py-0'>
                                        <span className="badge bg-info ">
                                            <i className="fi fi-rr-edit"></i>

                                        </span>
                                    </Link>
                                    <button type='submit' className='btn px-0 py-0'><span className="badge bg-info"><i className="fi fi-rr-trash"></i></span></button>
                                </form>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TablePoliceStations
