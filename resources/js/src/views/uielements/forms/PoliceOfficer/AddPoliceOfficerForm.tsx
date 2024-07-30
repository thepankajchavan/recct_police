import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { AddPoliceOfficersFrm } from '@/components/UiElements/Forms/Elements'

const AddPoliceOfficerForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Add Police Officer"
                subName="Police Officer"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Add Poice Officer</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AddPoliceOfficersFrm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AddPoliceOfficerForm
