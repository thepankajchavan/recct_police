import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

// import { tableUserData } from './UserTableData'
import { useEffect, useState } from 'react'
import axios from 'axios';

function History() {

    const [users, setUsers] = useState([
        {
            id: '1',
            date: 'Mon 12 Jul 2024 23:57:48 IST',
            notes: '',
            url_title: 'ABCDEFG',
            url: 'https://google.com'
        },
        {
            id: '2',
            date: 'Mon 12 Jul 2024 23:57:48 IST',
            notes: '',
            url_title: 'ABCDEFG',
            url: 'https://google.com'
        },
        {
            id: '3',
            date: 'Mon 12 Jul 2024 23:57:48 IST',
            notes: '',
            url_title: 'ABCDEFG',
            url: 'https://google.com'
        }
    ]);
    let token = document.head.querySelector('meta[name="csrf-token"]');
    useEffect(() => {
        /* axios.get('/admin/fetch-events')
            .then((res) => {
                setUsers(res.data)
            }) */
    }, [])

    return (
        <Table responsive bordered hover className="mb-0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date/Time</th>
                    <th>URL</th>
                    <th>Notes</th>
                    <th>Action</th>
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
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>

                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div>{data.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <Link to={data.url} className="d-flex gap-3 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                                        <div>{data.url_title}</div>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="flex-shrink-0" style={{ flexShrink: 0 }}>

                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div>{data.notes}</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <form method='post' action={'/admin/news-and-events/' + data.id}>
                                    <input type='hidden' value={token.content} name='_token' />
                                    <input type='hidden' value='DELETE' name='_method' />
                                    
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

export default History
