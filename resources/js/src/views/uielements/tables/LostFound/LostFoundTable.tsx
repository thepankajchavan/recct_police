import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableLostFound } from '@/components/UiElements/Tables/Bootstrap'
import { Link } from 'react-router-dom'

const LostFoundTable = () => {
  return (
    <>
      <PageBreadcrumbButton
        title="Lost and Found"
        subName=""
        url={'https://react-bootstrap.netlify.app/docs/components/table'}
      />
      <Row className="g-3 g-md-4">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>Lost and Found {/* <Link to='/admin/police-station/create' className='btn btn-primary float-end'><i className='fi fi-rr-plus pe-1'></i> Create</Link> */}</Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <TableLostFound />
            </Card.Body>
          </Card>
        </Col>
        {/* End:: Col */}
      </Row>
    </>
  )
}

export default LostFoundTable
