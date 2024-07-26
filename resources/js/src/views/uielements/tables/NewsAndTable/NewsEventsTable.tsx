import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableNewsAndEvents } from '@/components/UiElements/Tables/Bootstrap'
import { Link } from 'react-router-dom'

const NewsEventsTable = () => {
  return (
    <>
      <PageBreadcrumbButton
        title="News And Events"
        subName="News And Events"
        url={'https://react-bootstrap.netlify.app/docs/components/table'}
      />
      <Row className="g-3 g-md-4">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>News And Events <Link to='/admin/news-and-events/create' className='btn btn-primary float-end'><i className='fi fi-rr-plus pe-1'></i> Create</Link></Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <TableNewsAndEvents />
            </Card.Body>
          </Card>
        </Col>
        {/* End:: Col */}
      </Row>
    </>
  )
}

export default NewsEventsTable
