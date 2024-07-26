import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useParams } from 'react-router-dom'
import Select from 'react-select'

const EditAdminEle = () => {
    const { id } = useParams();
    const [roles, setRoles] = useState([]);
    const [userRoles, setUserRoles] = useState([]);
    const [user, setUser] = useState();
    let token = document.head.querySelector('meta[name="csrf-token"]');
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    

    const fetchRoles = () => {
        // console.log('uid', id);
        axios.get('/admin/fetch-roles-admin')
            .then((res) => {
                setRoles(res.data);
                // console.log(res.data);
            })
    }
    const fetchUser = () => {
        axios.get('/admin/fetch-admin/' + id)
            .then((res) => {
                // console.log('usr',res.data);
                setUser(res.data);
                setName(res.data.name)
                setUsername(res.data.username)
                setEmail(res.data.email)
                let info = []
                res.data.roles.filter((obj)=> {info.push(obj.id)})
                // console.log('info',info)
                setUserRoles(info)
            })
    }
    function handleChange(event) {
        //this.setState({value: event.option});
        let info= Array.from(event.target.selectedOptions, (item) => item.value);
        setUserRoles(info)
      }
    useEffect(() => {
        fetchRoles();
        fetchUser();
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
            <Form method='post' action={'/admin/admins/' + id}>

                <Form.Control type='hidden' name='_token' value={token.content} />
                <Form.Control type='hidden' name='_method' value='put' />
                <Row className="gy-6 gy-sm-8 gy-md-6">
                    <Col lg={12} sm={12}>
                        <Row>

                            <Col sm={4} className="mt-3">
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control type="text" id="name" placeholder="Name" name='name' value={name} onChange={(e) => {
                                    // console.log(e.target.value);
                                    setName(e.target.value)
                                }} />
                            </Col>
                            <Col sm={4} className="mt-3">
                                <Form.Label htmlFor="username">Username</Form.Label>
                                <Form.Control type="text" id="username" placeholder="Username" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Col>
                            <Col sm={4} className="mt-3">
                                <Form.Label htmlFor="emailInput">
                                    Email
                                </Form.Label>
                                <Form.Control type="text" id="emailInput" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" id="password" placeholder="Password" name='password' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="confirm">
                                    Confirm Password
                                </Form.Label>
                                <Form.Control type="password" id="confirm" placeholder="Confirm Password" name='password_confirmation' />
                            </Col>
                            <Col sm={12} className="mt-3">
                                <Form.Label htmlFor="exampleDataList">Roles</Form.Label>
                                <Form.Select name='roles[]' aria-label="Default select example" multiple={true} value={userRoles} onChange={handleChange}>
                                    {roles.map((obj) =>
                                        (<option value={'' + obj.id} selected>{obj.name}</option>)
                                    )}
                                </Form.Select>
                            </Col>
                            <Col sm={12} className="mt-3">

                                <input className={`form-check-input`} type="checkbox" name='reset_2fa' id="reset_2fa" />
                                <label className="form-check-label" htmlFor={'reset_2fa'}>
                                    {'Reset Two Factor Authentication'}
                                </label>
                            </Col>

                        </Row>
                    </Col>

                    <Col sm={12}>
                        <Button type='submit' variant={'primary'}>{'Update User'}</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )

}

export default EditAdminEle
