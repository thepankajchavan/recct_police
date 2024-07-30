import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { EditPoliceOfficerFrm } from '@/components/UiElements/Forms/Elements'

const EditPoliceOfficer = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Edit Police Officer"
                subName="Police Officer"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Edit Poice Officer</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <EditPoliceOfficerFrm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EditPoliceOfficer
