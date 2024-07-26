import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-select'

const AddStationFrm = () => {


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
            <Form method='post' action='/admin/police-station' enctype="multipart/form-data">
                <Form.Control type='hidden' name='_token' value={token.content} />

                <Row className="gy-6 gy-sm-8 gy-md-6">
                    <Col lg={12} sm={12}>
                        <Row>
                            <Col sm={12} className='mt-3'>
                                <h2>Police Station Details</h2>
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="name">Police Station Name</Form.Label>
                                <Form.Control type="text" id="name" placeholder="Police Station Name" name='station_name' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="station_image">Upload Police Station Image</Form.Label>
                                <Form.Control type="file" name='station_image' id="station_image" />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="station_map">Police Station Map</Form.Label>
                                <Form.Control type="text" id="station_image" placeholder="Police Station Map" name='station_map' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="email">Police Station Email address</Form.Label>
                                <Form.Control type="email" id="email" placeholder="Police station Email address" name='email' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="patil">Police Patil(PDF Only)</Form.Label>
                                <Form.Control type="file" name='patil' id="patil" name="patil" />
                            </Col>

                            <Col sm={12} className='mt-5 pt-5'>
                                <h2>Police Station Contact</h2>
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="jurisdiction_map">Jurisdiction Map(Upload Image)</Form.Label>
                                <Form.Control type="file" name='jurisdiction_map' id="station_image" />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="division">Police Station Division</Form.Label>
                                <Form.Control type="text" id="division" placeholder="Police Station Division" name='station_division' />
                            </Col>

                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="station_address">Police Station Address</Form.Label>
                                <Form.Control type="text" id="station_address" placeholder="Police Station Address" name='station_address' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="phone">Police Station Telephone no.</Form.Label>
                                <Form.Control type="phone" id="phone" placeholder="Police station Telephone no." name='phone' />
                            </Col>

                            <Col sm={12} className='mt-5 pt-5'>
                                <h2>Contact Persion Details</h2>
                            </Col>

                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="pname">Police Name</Form.Label>
                                <Form.Control type="text" id="pname" placeholder="Police Name" name='pname' />
                            </Col>

                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="designation">Police Designation</Form.Label>
                                <Form.Control type="text" id="designation" placeholder="Police Deisgnation" name='designation' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="mobile">Police Phone no.</Form.Label>
                                <Form.Control type="phone" id="mobile" placeholder="Police Phone no." name='mobile' />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="police_photo">Police Photo(Upload Image)</Form.Label>
                                <Form.Control type="file" name='police_photo' id="police_photo" />
                            </Col>




                        </Row>
                    </Col>

                    <Col sm={12}>
                        <Button type='submit' variant={'primary'}>{'Add Station'}</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default AddStationFrm
