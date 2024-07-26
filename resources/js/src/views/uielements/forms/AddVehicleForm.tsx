import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import {
  EleFormControl,
  EleFormSolidCheckbox,
  EleFormSolidRadio,
  EleFormToggleButton,
  AddVehiFrm,
} from '@/components/UiElements/Forms/Elements'

const Elements = () => {
  return (
    <>
      <PageBreadcrumbButton
        title="Add Vehicle/Machineary Details"
        subName="Assets"
        url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
      />
      <Row className="g-3 g-md-4">
        {/* Start:: Col */}
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>Add Asset</Card.Title>
            </Card.Header>
            <Card.Body>
              <AddVehiFrm/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Elements
