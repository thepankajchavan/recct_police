import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { EditPermissionEle } from '@/components/UiElements/Forms/Elements'

const EditPermissionForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Edit Permission"
                subName="Access Manger"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Edit Permission</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <EditPermissionEle />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EditPermissionForm
