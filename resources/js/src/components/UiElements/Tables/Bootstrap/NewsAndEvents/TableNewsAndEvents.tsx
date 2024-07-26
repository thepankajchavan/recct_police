import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

// import { tableUserData } from './UserTableData'
import { useEffect, useState } from 'react'
import axios from 'axios';

function TableNewsAndEvents() {

    const [users, setUsers] = useState([]);
    let token = document.head.querySelector('meta[name="csrf-token"]');
    useEffect(() => {
        axios.get('/admin/fetch-events')
            .then((res) => {
                setUsers(res.data)
            })
    }, [])

    return (
        <Table responsive bordered hover className="mb-0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Created At</th>
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
                                        <div>{data.title}</div>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>

                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div>{data.created_at.split('T')[0]}</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <form method='post' action={'/admin/news-and-events/' + data.id}>
                                    <input type='hidden' value={token.content} name='_token' />
                                    <input type='hidden' value='DELETE' name='_method' />
                                    <Link to={"/admin/news-and-events/" + data.id + "/edit"} className='btn px-0 py-0'>
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

export default TableNewsAndEvents