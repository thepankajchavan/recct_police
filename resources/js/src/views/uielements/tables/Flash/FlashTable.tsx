import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableFlash } from '@/components/UiElements/Tables/Bootstrap'
import { AddFlashFrm } from '@/components/UiElements/Forms/Elements'
import { Link } from 'react-router-dom'

const FlashTable = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Police Flash"
                subName=""
                url={'https://react-bootstrap.netlify.app/docs/components/table'}
            />
            <Row className="g-3 g-md-4">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Police Flash</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AddFlashFrm />
                            <TableFlash />
                        </Card.Body>
                    </Card>
                </Col>
                {/* End:: Col */}
            </Row>
        </>
    )
}

export default FlashTable
