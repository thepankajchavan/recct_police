import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-select'

const GalleryFrm = () => {


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
            <Form method='post' action='/admin/gallery' enctype="multipart/form-data">
                <Form.Control type='hidden' name='_token' value={token.content} />

                <Row className="gy-6 gy-sm-8 gy-md-6">
                    <Col sm={6}>
                        <Row>
                            
                            
                            <Col sm={12} className="mt-3">
                                <Form.Label htmlFor="pfile">Upload Image</Form.Label>
                                <Form.Control type="file" name='gallery' id="pfile" />
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

export default GalleryFrm