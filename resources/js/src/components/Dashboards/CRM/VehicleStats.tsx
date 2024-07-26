import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'


const VehicleStats = ({ data }) => {
  return (
    <Row className="row-cols-1 row-cols-md-3 g-4">
      {data.map((site) => (
        <Col key={site.ID}>
          <Card>
            <Card.Header className="py-3 pe-3 d-flex justify-content-between align-items-center">
              <Card.Title className={`fs-4`}>{site.SiteName}</Card.Title>
              <span className={`badge m-1 bg-info fs-5`}>{site.TotalAssets}</span>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xl={6} className="text-center">
                  <span className={`badge m-1 bg-success fs-6`}>
                    Vehicles: {site.TotalVehicles}
                  </span>
                </Col>
                <Col xl={6} className="text-center">
                  <span className={`badge m-1 bg-warning fs-6`}>
                    Machinery: {site.TotalMachinery}
                  </span>
                </Col>
              </Row>
            </Card.Body>
            <Row className="g-0 border-top">
              <Col xl={6} className="text-center border-bottom border-end">
                <div className="fs-18 fw-bold text-dark">{site.OwnedVehicles}</div>
                <div className="fs-13 text-muted">Owned Vehicles</div>
              </Col>
              <Col xl={6} className="text-center border-bottom">
                <div className="fs-18 fw-bold text-dark">{site.HiredVehicles}</div>
                <div className="fs-13 text-muted">Owned Machinery</div>
              </Col>
              <Col xl={6} className="text-center border-end">
                <div className="fs-18 fw-bold text-dark">{site.OwnedMachinery}</div>
                <div className="fs-13 text-muted">Hired Vehicles</div>
              </Col>
              <Col xl={6} className="text-center">
                <div className="fs-18 fw-bold text-dark">{site.HiredMachinery}</div>
                <div className="fs-13 text-muted">Hired Machinery</div>
              </Col>
            </Row>
            <Card.Footer className="text-center">
              <Link
                to={`/vts-details/${site.SiteName}`}
                className="ms-auto icon-link icon-link-hover link-primary">
                <span>View Details</span>
                <i className="fi fi-rr-arrow-small-right bi"></i>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default VehicleStats
