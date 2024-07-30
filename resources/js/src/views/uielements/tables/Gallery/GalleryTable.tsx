import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableGallery } from '@/components/UiElements/Tables/Bootstrap'
import { GalleryFrm } from '@/components/UiElements/Forms/Elements'
import { Link } from 'react-router-dom'

const GalleryTable = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Gallery"
                subName=""
                url={'https://react-bootstrap.netlify.app/docs/components/table'}
            />
            <Row className="g-3 g-md-4">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Gallery</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <GalleryFrm />
                            <TableGallery />
                        </Card.Body>
                    </Card>
                </Col>
                {/* End:: Col */}
            </Row>
        </>
    )
}

export default GalleryTable
