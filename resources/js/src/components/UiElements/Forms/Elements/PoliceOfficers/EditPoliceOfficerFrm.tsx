import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useParams } from 'react-router-dom'
import Select from 'react-select'

const EditPoliceOfficerFrm = () => {

    const { id } = useParams();
    const [data, setData] = useState();
    let token = document.head.querySelector('meta[name="csrf-token"]');

    function fetchOfficer() {
        axios.get('/admin/fetch-officer/' + id)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchOfficer();
    },[])
    if (data) {
        return (
            <>
                <Form method='post' action={'/admin/police-officer/' + id} enctype="multipart/form-data">
                    <Form.Control type='hidden' name='_token' value={token.content} />
                    <Form.Control type='hidden' name='_method' value='put' />
                    <Row className="gy-6 gy-sm-8 gy-md-6">
                        <Col lg={12} sm={12}>
                            <Row>




                                <Col sm={6} className="mt-3">
                                    <Form.Label htmlFor="pname">Police Officer Name</Form.Label>
                                    <Form.Control type="text" id="pname" placeholder="Police Name" name='name' value={data.name} onChange={(e) => setData(data.name = e.target.value)} />
                                </Col>

                                <Col sm={6} className="mt-3">
                                    <Form.Label htmlFor="designation">Police Designation</Form.Label>
                                    <Form.Control type="text" id="designation" placeholder="Police Deisgnation" name='designation' value={data.post} onChange={(e) => setData(data.post = e.target.value)}/>
                                </Col>
                                <Col sm={6} className="mt-3">
                                    <Form.Label htmlFor="desc">Description</Form.Label>
                                    <Form.Control as="textarea" id="desc" placeholder="Description" name='desc' rows={5} value={data.description} onChange={(e) => setData(data.description = e.target.value)}/>
                                </Col>
                                <Col sm={6} className="mt-3">
                                    <Form.Label htmlFor="police_photo">Police Photo(Upload Image)</Form.Label>
                                    <Form.Control type="file" name='police_photo' id="police_photo" />
                                </Col>
                                <Col sm={6} className="mt-3">
                                    <Form.Label htmlFor="pom">Police of the Month</Form.Label>
                                    <Form.Select name='pom' aria-label="Default select example" id="pom" value={data.pom} onChange={(e) => setData(data.pom = e.target.value)}>
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
    else{
        return(
            <>
            </>
        )
    }
}

export default EditPoliceOfficerFrm
