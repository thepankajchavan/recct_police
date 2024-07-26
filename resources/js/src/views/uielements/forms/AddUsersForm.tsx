import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import {
  EleFormControl,
  EleFormSolidCheckbox,
  EleFormSolidRadio,
  EleFormToggleButton,
  AddUserForm,
} from '@/components/UiElements/Forms/Elements'

const AddUsersForm = () => {
  return (
    <>
      <PageBreadcrumbButton
        title="Add User"
        subName="Manage Users"
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
              <AddUserForm/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AddUsersForm
