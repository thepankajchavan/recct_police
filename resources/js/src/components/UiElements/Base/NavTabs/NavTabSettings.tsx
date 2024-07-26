import { Tab, Nav } from 'react-bootstrap'
import { tabsData } from './data/tabsData'
import { tabSetting } from './data/tabSetting'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const NavTabSettings = () => {

    const [name, setName] = useState('');
    let token = document.head.querySelector('meta[name="csrf-token"]');

    function fetchSettings()
    {
        axios.get('/admin/fetch-settings')
        .then((res)=>{
            // console.log(res);
            setName(res.data.general.site_name)            ;
        })
    }
    useEffect(() => {
        fetchSettings()
    },[]);
    return (
        <>
            <Form method='post' action={'/admin/settings'}>
                <Tab.Container defaultActiveKey="home">
                    <Nav className="mb-3 nav-underline">
                        {tabSetting.map(({ eventKey, title }) => (
                            <Nav.Item key={eventKey}>
                                <Nav.Link eventKey={eventKey}>
                                    {title}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Tab.Content>

                        <Tab.Pane key={'general'} eventKey={'general'}>


                            <Form.Control type='hidden' name='_method' value='put' />
                            <Form.Control type='hidden' name='_token' value={token.content} />
                            <Row className="gy-6 gy-sm-8 gy-md-6">
                                <Col lg={12} sm={12}>
                                    <Row>

                                        <Col sm={12} className="mt-3">
                                            <Form.Label htmlFor="name">Site Name</Form.Label>
                                            <Form.Control type="text" id="name" placeholder="Name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col sm={12}>
                                    <Button type='submit' variant={'primary'}>{'Save'}</Button>
                                </Col>
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane key={'maintenance'} eventKey={'maintenance'}>
                            <h1>Inside Maintenance</h1>
                        </Tab.Pane>

                    </Tab.Content>
                </Tab.Container>
            </Form>
        </>
    )
}

export default NavTabSettings
