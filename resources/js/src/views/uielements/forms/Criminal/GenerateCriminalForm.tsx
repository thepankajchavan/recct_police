import { Link } from 'react-router-dom'
import { Row, Col, Card, Table } from 'react-bootstrap'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { GenerateCriminalFrm } from '@/components/UiElements/Forms/Elements'

const GenerateCriminalForm = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Generate"
                subName="Criminal History"
                url={'https://react-bootstrap.netlify.app/docs/forms/overview'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Generate Link</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <GenerateCriminalFrm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default GenerateCriminalForm
