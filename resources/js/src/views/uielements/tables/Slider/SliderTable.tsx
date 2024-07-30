import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableSlider } from '@/components/UiElements/Tables/Bootstrap'
import { SliderFrm } from '@/components/UiElements/Forms/Elements'
import { Link } from 'react-router-dom'

const SliderTable = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Slider"
                subName=""
                url={'https://react-bootstrap.netlify.app/docs/components/table'}
            />
            <Row className="g-3 g-md-4">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Slider</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SliderFrm />
                            <TableSlider />
                        </Card.Body>
                    </Card>
                </Col>
                {/* End:: Col */}
            </Row>
        </>
    )
}

export default SliderTable
