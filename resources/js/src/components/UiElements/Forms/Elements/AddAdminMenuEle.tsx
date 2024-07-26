import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-select'

const AddAdminMenuEle = () => {

    const [permissions, setPermissions] = useState([]);
    let token = document.head.querySelector('meta[name="csrf-token"]');

    const fetchRoles = () => {
        axios.get('/admin/fetch-permissions')
            .then((res) => {
                setPermissions(res.data);
                // console.log(res.data);
            })
    }
    useEffect(() => {
        fetchRoles();
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
            <Form method='post' action='/admin/permissions'>
                <Form.Control type='hidden' name='_token' value={token.content} />
                <Row className="gy-6 gy-sm-8 gy-md-6">
                    <Col lg={12} sm={12}>
                        <Row>

                            <Col sm={6} >
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control type="text" id="name" placeholder="Name" name='name' />
                            </Col>
                            <Col sm={6} >
                                <Form.Label htmlFor="icon_name">Icon Name</Form.Label>
                                <Form.Control type="text" id="icon_name" placeholder="Icon Name e.g. fi fi-rr-dashboard" name='icon_name' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="link_type">Link Type</Form.Label>
                                <Form.Select name='link_type' aria-label="Default select example" id="link_type">
                                    <option value='route'>Route</option>
                                    <option value='url'>URL</option>
                                    <option value='external'>External Link</option>

                                </Form.Select>
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="url">URL</Form.Label>
                                <Form.Control type="text" id="url" placeholder="URL" name='url' />
                            </Col>

                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="link_order">Link Order</Form.Label>
                                <Form.Control type="text" id="link_order" placeholder="Link Order" name='link_order' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="exampleDataList">Permissions</Form.Label>
                                <Form.Select name='permission[]' aria-label="Default select example" multiple>
                                    {permissions.map((obj) =>
                                        (<option value={'' + obj.id}>{obj.name}</option>)
                                    )}
                                </Form.Select>
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="position">Position</Form.Label>
                                <Form.Select name='position' aria-label="Default select example bw-1" id="position">
                                    <option value='sidebar'>Sidebar</option>
                                    <option value='navbar_left'>Navbar Left</option>
                                    <option value='navbar_right'>Navbar Right</option>

                                </Form.Select>
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control type="text" id="name" placeholder="Name" name='name' />
                            </Col>
                            
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control type="text" id="name" placeholder="Name" name='name' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="gurardName">Guard Name</Form.Label>
                                <Form.Select name='guard_name' aria-label="Default select example" id="gurardName">
                                    <option value='admin'>Admin</option>
                                    <option value='web'>Web</option>
                                    <option value='sanctum'>Sanctum</option>

                                </Form.Select>
                            </Col>


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

export default AddAdminMenuEle
