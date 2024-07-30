import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { EditPageFrm } from '@/components/UiElements/Forms/Elements'

const EditPageForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Edit Page"
                subName="Manage Pages"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Edit Page</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <EditPageFrm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EditPageForm
