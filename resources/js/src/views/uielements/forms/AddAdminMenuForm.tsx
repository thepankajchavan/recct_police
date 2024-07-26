import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { AddAdminMenuEle } from '@/components/UiElements/Forms/Elements'

const AddAdminMenuForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Add Admin Menu"
                subName="Admin Menus"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Add Admin Menu</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AddAdminMenuEle />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AddAdminMenuForm
