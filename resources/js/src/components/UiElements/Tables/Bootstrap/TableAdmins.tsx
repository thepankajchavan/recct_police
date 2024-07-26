import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

import { tableUserData } from './UserTableData'
import { useEffect, useState } from 'react'
import axios from 'axios';

function TableAdmins() {

    const [users, setUsers] = useState();
    let token = document.head.querySelector('meta[name="csrf-token"]');
    useEffect(() => {
        axios.get('/admin/fetch-admins')
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <Table responsive bordered hover className="mb-0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {(users || []).map((data, idx) => {
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

                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div>{data.username}</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div>{data.email}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div className='badge bg-primary'>{data.role_name}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div>{data.created_at.split('T')[0]}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <form method='post' action={'/admin/admins/' + data.id}>
                                    <input type='hidden' value={token.content} name='_token' />
                                    <input type='hidden' value='DELETE' name='_method' />
                                    <Link to={"/admin/admins/" + data.id + "/edit"} className='btn px-0 py-0'>
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

export default TableAdmins
