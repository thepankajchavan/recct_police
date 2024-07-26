import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { EditNewsEventsFrm } from '@/components/UiElements/Forms/Elements'

const EditNewsEvent = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Edit News and Events"
                subName="News and Events"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Edit News and Events</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <EditNewsEventsFrm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EditNewsEvent
