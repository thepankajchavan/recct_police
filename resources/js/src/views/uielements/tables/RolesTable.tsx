import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableRolesEle } from '@/components/UiElements/Tables/Bootstrap'
import { Link } from 'react-router-dom'

const RolesTable = () => {
  return (
    <>
      <PageBreadcrumbButton
        title="Access Manager"
        subName="Roles"
        url={'https://react-bootstrap.netlify.app/docs/components/table'}
      />
      <Row className="g-3 g-md-4">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>Roles Table <Link to='/admin/roles/create' className='btn btn-primary float-end'><i className='fi fi-rr-plus pe-1'></i> Create</Link></Card.Title>
              
            </Card.Header>
            <Card.Body className="p-0">
              <TableRolesEle />
            </Card.Body>
          </Card>
        </Col>
        {/* End:: Col */}
      </Row>
    </>
  )
}

export default RolesTable
