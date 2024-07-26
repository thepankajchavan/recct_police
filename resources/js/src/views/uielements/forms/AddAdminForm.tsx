import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { AddAdminEle } from '@/components/UiElements/Forms/Elements'

const AddAdminForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Add Admin"
                subName="Manage Admins"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Add User</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AddAdminEle />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AddAdminForm
