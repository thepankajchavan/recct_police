import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import {
    TableVehicle
} from '@/components/UiElements/Tables/Bootstrap'

const VehicleTables = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Vehicle Master"
                subName="Assets"
                url={'https://react-bootstrap.netlify.app/docs/components/table'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Vehicle Master</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <TableVehicle />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default VehicleTables
