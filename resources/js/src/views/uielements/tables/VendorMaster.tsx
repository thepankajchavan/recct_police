import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableVendorMaster } from '@/components/UiElements/Tables/Bootstrap'

const VendorMaster = () => {
  return (
    <>
      <PageBreadcrumbButton
        title="Vendor Master"
        subName="Vendors"
        url={'https://react-bootstrap.netlify.app/docs/components/table'}
      />
      <Row className="g-3 g-md-4">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>Vendor Master Table</Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <TableVendorMaster />
            </Card.Body>
          </Card>
        </Col>
        {/* End:: Col */}
      </Row>
    </>
  )
}

export default VendorMaster
