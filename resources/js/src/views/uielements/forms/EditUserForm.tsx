import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import {
  EleFormControl,
  EleFormSolidCheckbox,
  EleFormSolidRadio,
  EleFormToggleButton,
  EditUserEle,
} from '@/components/UiElements/Forms/Elements'

const EditUserForm = () => {
  return (
    <>
      <PageBreadcrumbButton
        title="Edit User"
        subName="Manage Users"
        url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
      />
      <Row className="g-3 g-md-4">
        {/* Start:: Col */}
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>Edit User</Card.Title>
            </Card.Header>
            <Card.Body>
              <EditUserEle/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default EditUserForm
