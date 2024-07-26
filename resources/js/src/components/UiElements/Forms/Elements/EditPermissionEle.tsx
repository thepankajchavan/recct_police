import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useParams } from 'react-router-dom'
import Select from 'react-select'

const EditPermissionEle = () => {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [guard, setGuard] = useState('');
    let token = document.head.querySelector('meta[name="csrf-token"]');

    
    const fetchData = () => {
        axios.get('/admin/fetch-permission/' + id)
            .then((res) => {
                setName(res.data.name);
                setGuard(res.data.guard_name);
            })
    }
    useEffect(() => {
        // fetchRoles();
        fetchData();
    }, [])

    /* const styleSelect = {
          control: base =>({
              ...base,
              border:1,
              borderColor
          })
      } */
    return (
        <>
            <Form method='post' action={'/admin/permissions/' + id}>
                
                <Form.Control type='hidden' name='_method' value='put' />
                <Form.Control type='hidden' name='_token' value={token.content} />
                <Row className="gy-6 gy-sm-8 gy-md-6">
                    <Col lg={12} sm={12}>
                        <Row>

                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control type="text" id="name" placeholder="Name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="gurardName">Roles</Form.Label>
                                <Form.Select name='guard_name' aria-label="Default select example" id="gurardName" value={guard} onChange={(e) => setGuard(e.target.value)}>
                                    <option value='admin'>Admin</option>
                                    <option value='web'>Web</option>
                                    <option value='sanctum'>Sanctum</option>

                                </Form.Select>
                            </Col>

                            
                            {/* <Col sm={12} className="mt-3">

                                <input className={`form-check-input`} type="checkbox" name='reset_2fa' id="reset_2fa" />
                                <label className="form-check-label" htmlFor={'reset_2fa'}>
                                    {'Reset Two Factor Authentication'}
                                </label>
                            </Col> */}

                        </Row>
                    </Col>

                    <Col sm={12}>
                        <Button type='submit' variant={'primary'}>{'Add User'}</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default EditPermissionEle
