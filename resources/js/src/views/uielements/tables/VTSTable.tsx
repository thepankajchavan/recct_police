import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Row, Col, Card } from 'react-bootstrap'


import {
    TableVtsMaster
} from '@/components/UiElements/Tables/Bootstrap'
import { useParams } from 'react-router-dom'
// import {VtaAccordion} from '@/components/UiElements/Base/Accrodions'

const VTSTable = () => {

    const { sitename } = useParams();
    console.log(sitename)
    return (
        <>
            <PageBreadcrumbButton
                title={sitename + ''}
                subName={"Assets"}
                url={'https://react-bootstrap.netlify.app/docs/components/table'}
            />
            <Row className="g-3 g-md-4">
                {/* Start:: Col */}
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            {/* <Card.Title>Vehicle Master</Card.Title> */}
                            <Row>
                                <Col xs={3} className='badge bg-secondary m-1'>
                                    <h5 style={{ color: '#fff' }}>Total Vehicles: 9</h5>
                                    <h6 style={{ color: '#fff' }}>Hired: 4 | Owned: 5</h6>
                                    {/* <span style={{color:'#fff'}}></span> */}
                                </Col>
                                <Col xs={2} className='badge bg-success m-1'>
                                    <h5 style={{ color: '#fff' }}>Moving:</h5>
                                    <h5 style={{ color: '#fff' }}>9</h5>
                                </Col>
                                <Col xs={2} className='badge bg-danger m-1'>
                                    <h5 style={{ color: '#fff' }}>Stopped:</h5>
                                    <h5 style={{ color: '#fff' }}>2</h5>
                                </Col>
                                <Col xs={2} className='badge bg-warning m-1' ref={(el) => {
                                    if (el) {
                                        el.style.setProperty('background-color', '#ffc107', 'important')
                                    }
                                }}>
                                    <h5 style={{ color: '#fff' }}>Idle:</h5>
                                    <h5 style={{ color: '#fff' }}>3</h5>
                                </Col>
                                <Col xs={2} className='badge bg-info m-1'>
                                    <h5 style={{ color: '#fff' }}>No Network:</h5>
                                    <h5 style={{ color: '#fff' }}>4</h5>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <TableVtsMaster />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default VTSTable
