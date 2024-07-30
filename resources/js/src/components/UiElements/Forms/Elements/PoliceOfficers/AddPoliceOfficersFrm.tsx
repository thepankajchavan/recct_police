import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-select'

const AddPoliceOfficersFrm = () => {


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
            <Form method='post' action='/admin/police-officer' enctype="multipart/form-data">
                <Form.Control type='hidden' name='_token' value={token.content} />

                <Row className="gy-6 gy-sm-8 gy-md-6">
                    <Col lg={12} sm={12}>
                        <Row>
                            

                            

                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="pname">Police Officer Name</Form.Label>
                                <Form.Control type="text" id="pname" placeholder="Police Name" name='name' />
                            </Col>

                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="designation">Police Designation</Form.Label>
                                <Form.Control type="text" id="designation" placeholder="Police Deisgnation" name='designation' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="desc">Description</Form.Label>
                                <Form.Control as="textarea" id="desc" placeholder="Description" name='desc' rows={5} />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="police_photo">Police Photo(Upload Image)</Form.Label>
                                <Form.Control type="file" name='police_photo' id="police_photo" />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="pom">Police of the Month</Form.Label>
                                <Form.Select name='pom' aria-label="Default select example" id="pom">
                                    <option value='0'>No</option>
                                    <option value='1'>Yes</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={12}>
                        <Button type='submit' variant={'primary'}>{'Save'}</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default AddPoliceOfficersFrm
