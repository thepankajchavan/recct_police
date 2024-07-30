import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TablePressRelease } from '@/components/UiElements/Tables/Bootstrap'
import { PressReleaseFrm } from '@/components/UiElements/Forms/Elements'
import { Link } from 'react-router-dom'

const PressReleaseTable = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Press Release"
                subName=""
                url={'https://react-bootstrap.netlify.app/docs/components/table'}
            />
            <Row className="g-3 g-md-4">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Press Release</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PressReleaseFrm />
                            <TablePressRelease />
                        </Card.Body>
                    </Card>
                </Col>
                {/* End:: Col */}
            </Row>
        </>
    )
}

export default PressReleaseTable
