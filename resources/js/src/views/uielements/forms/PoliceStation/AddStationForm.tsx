import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { AddStationFrm } from '@/components/UiElements/Forms/Elements'

const AddStationForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Add Police Station"
                subName="Police Station"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Add Police Station</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AddStationFrm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AddStationForm
