import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

import { tableUserData } from './UserTableData'
import { useEffect, useState } from 'react'
import axios from 'axios';

function TableAdminMenuEle() {

    const [roles, setRoles] = useState([]);
    let token = document.head.querySelector('meta[name="csrf-token"]');
    useEffect(() => {
        axios.get('/admin/fetch-menus')
            .then((res) => {
                // console.log(res.data);
                setRoles(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <Table responsive bordered hover className="mb-0" id='myTable'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {(roles || []).map((data, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                {data.id}

                            </td>
                            <td>
                                <Link to="#!" className="d-flex gap-3 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div>{data.name}</div>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>

                                        <Link to={data.url}><i className="fi fi-rr-link"></i></Link>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div>{data.position}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div className={ data.status == "active" ? 'text-capitalize badge bg-success':'text-capitalize badge bg-danger'}>{data.status}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <form method='post' action={'/admin/admin-menus/' + data.id}>
                                    <input type='hidden' value={token.content} name='_token' />
                                    <input type='hidden' value='DELETE' name='_method' />
                                    <Link to={"/admin/admin-menus/" + data.id + "/edit"} className='btn px-0 py-0' >
                                        <span className="badge bg-info ">
                                            <i className="fi fi-rr-edit"></i>

                                        </span>
                                    </Link>
                                    <button type='submit' className='btn px-0 py-0'>
                                        <span className="badge bg-info">
                                            <i className="fi fi-rr-trash"></i>

                                        </span>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TableAdminMenuEle
