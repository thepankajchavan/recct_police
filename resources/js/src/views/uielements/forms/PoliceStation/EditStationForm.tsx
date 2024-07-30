import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { EditPoliceStationFrm } from '@/components/UiElements/Forms/Elements'

const EditStationForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Edit Police Station"
                subName="Police Station"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Edit Police Station</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <EditPoliceStationFrm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EditStationForm
