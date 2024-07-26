import { Row, Col, Card } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { AddVendorFrm } from '@/components/UiElements/Forms/Elements'

const AddVendorForm = () => {
  return (
    <>
      <PageBreadcrumbButton
        title="Add Vendor"
        subName="Vendors"
        url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
      />
      <Row className="g-3 g-md-4">
        {/* Start:: Col */}
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>Add Vendor</Card.Title>
            </Card.Header>
            <Card.Body>
              <AddVendorFrm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AddVendorForm
