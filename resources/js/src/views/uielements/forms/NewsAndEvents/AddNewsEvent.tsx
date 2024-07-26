import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { AddNewsAndEventsFrm } from '@/components/UiElements/Forms/Elements'

const AddNewsEvent = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Add News and Events"
                subName="News and Events"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Add News and Events</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AddNewsAndEventsFrm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AddNewsEvent
