import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'

import { TableRecruitment } from '@/components/UiElements/Tables/Bootstrap'
import { AddRecruitmentFrm } from '@/components/UiElements/Forms/Elements'
import { Link } from 'react-router-dom'

const RecruitmentTable = () => {
    return (
        <>
            <PageBreadcrumbButton
                title="Police Recruitment"
                subName=""
                url={'https://react-bootstrap.netlify.app/docs/components/table'}
            />
            <Row className="g-3 g-md-4">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Police Recruitment</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AddRecruitmentFrm />
                            <TableRecruitment />
                        </Card.Body>
                    </Card>
                </Col>
                {/* End:: Col */}
            </Row>
        </>
    )
}

export default RecruitmentTable
