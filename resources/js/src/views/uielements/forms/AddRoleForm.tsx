import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { AddRoleEle } from '@/components/UiElements/Forms/Elements'

const AddRoleForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Add Role"
                subName="Access Manger"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Add Role</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AddRoleEle />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AddRoleForm
