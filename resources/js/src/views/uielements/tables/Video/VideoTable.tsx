import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableVideo } from '@/components/UiElements/Tables/Bootstrap'
import { VideoFrm } from '@/components/UiElements/Forms/Elements'
import { Link } from 'react-router-dom'

const VideoTable = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Video Gallery"
                subName=""
                url={'https://react-bootstrap.netlify.app/docs/components/table'}
            />
            <Row className="g-3 g-md-4">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Video Gallery</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <VideoFrm />
                            <TableVideo />
                        </Card.Body>
                    </Card>
                </Col>
                {/* End:: Col */}
            </Row>
        </>
    )
}

export default VideoTable
