import { Link } from 'react-router-dom'
import { Table, Image } from 'react-bootstrap'

// import { tableUserData } from './UserTableData'
import { useEffect, useState } from 'react'
import axios from 'axios';

function TableGallery() {

    const [users, setUsers] = useState([]);
    let token = document.head.querySelector('meta[name="csrf-token"]');
    useEffect(() => {
        axios.get('/admin/fetch-gallery')
            .then((res) => {
                setUsers(res.data)
            })
    }, [])

    return (
        <Table responsive bordered hover className="mb-0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
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
                                    <Image src={'/uploads/gallery/' + data.image} alt="" className="img-fluid" style={{height:50,}}/>

                                    </div>
                                </Link>
                            </td>
                            <td>
                                <form method='post' action={'/admin/gallery/' + data.id}>
                                    <input type='hidden' value={token.content} name='_token' />
                                    <input type='hidden' value='DELETE' name='_method' />
                                    
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

export default TableGallery
