import { useState } from 'react'
import { Button, Modal, Card, Row, Col, Form } from 'react-bootstrap'
import { FuelMaster } from '../../Tables/Bootstrap'

const Fuel = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>

            <Card>
                <Card.Header>
                    <Card.Title className='d-flex justify-content-between'>
                        <span >Fuel Refilled This Month = 0 ltr</span>
                        <Button variant="primary" onClick={handleShow}>
                            <i className='fi fi-sr-plus-small'></i> Add
                        </Button>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <FuelMaster />
                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Removed Fuel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={6}>
                            <Form.Label htmlFor="basiInput">Expense</Form.Label>
                            <Form.Control type="text" id="basiInput" />
                        </Col>
                        <Col xs={6} className='mt-0'>
                            <Form.Label htmlFor="valueInput">Date</Form.Label>
                            <Form.Control className='w-50' type="date" id="valueInput" />
                        </Col>
                        <Col xs={6}>
                            <Form.Label>Add/Remove</Form.Label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                
                                <option value="add">Add</option>
                                <option value="removed">Removed</option>
                                {/* <option value="3">Three</option> */}
                            </Form.Select>
                        </Col>
                        <Col xs={6}>
                            <Form.Label >Remarks</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="soft-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Fuel