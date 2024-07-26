import { useState } from 'react'
import { Button, Modal, Row, Col, Form } from 'react-bootstrap'

const Summery = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Summery Report
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Summery Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>

                        <Col xs={6} className='mt-0'>
                            <Form.Label htmlFor="valueInput">Date</Form.Label>
                            <Form.Control className='w-50' type="date" id="valueInput" />
                        </Col>
                        <Col xs={6} className='mt-0'>
                            <Form.Label htmlFor="valueInput">Date</Form.Label>
                            <Form.Control className='w-50' type="date" id="valueInput" />
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

export default Summery
