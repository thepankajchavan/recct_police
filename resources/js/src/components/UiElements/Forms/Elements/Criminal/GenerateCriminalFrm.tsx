import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Accordion } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-select'
import browseCriminalData from './browseCriminalData'

const GenerateCriminalFrm = () => {

    let token = document.head.querySelector('meta[name="csrf-token"]');



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

                            <Col sm={8} className="mt-3">
                                {/* <Form.Label htmlFor="name">Name</Form.Label> */}
                                <Form.Control type="text" id="link" placeholder="Link" name='link' />
                            </Col>
                            <Col sm={4} className='mt-3'>
                                <Button type='button' variant={'primary'}><i className='fi fi-rr-copy pe-3'></i>{' Copy this URL'}</Button>
                            </Col>
                            <Col sm={6} className="mt-3">
                                {/* <Form.Label htmlFor="gurardName">Guard Name</Form.Label> */}
                                <Form.Select name='guard_name' aria-label="Default select example" id="gurardName">
                                    <option value='Change Domain'>Change Domain</option>

                                </Form.Select>
                            </Col>
                            <Col sm={6} className='mt-3'>
                                <Button type='button' variant={'success'}>{'Generate Link'}</Button>
                            </Col>


                            {/* <Col sm={12} className="mt-3">

                                <input className={`form-check-input`} type="checkbox" name='reset_2fa' id="reset_2fa" />
                                <label className="form-check-label" htmlFor={'reset_2fa'}>
                                    {'Reset Two Factor Authentication'}
                                </label>
                            </Col> */}

                        </Row>
                    </Col>


                </Row>
            </Form>
            <Col sm={12} className='my-3'>
                <Form.Control type="text" id="notes" name="notes" placeholder="Save notes here (Text will be autosaved)"/>
            </Col>
            <Accordion defaultActiveKey="0">
                {browseCriminalData.map(({ id, ip, agent }) => (
                    <Accordion.Item key={id} eventKey={id}>
                        <Accordion.Header>{'Browser Details'}</Accordion.Header>
                        <Accordion.Body>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>IP</td><td>: {ip}</td>
                                    </tr>
                                    <tr>
                                        <td>User Agent</td><td>: {agent}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    )
}

export default GenerateCriminalFrm
