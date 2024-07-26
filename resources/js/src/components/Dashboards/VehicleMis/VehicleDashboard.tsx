import { Link } from 'react-router-dom'
import { Card, Col, Dropdown, DropdownDivider, Row } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar'
import { Text } from 'recharts'
import { useThemeContext } from '@/common/context'
import colors from '@/constants/colors'
import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
    DangerPath,
} from 'react-speedometer';
import { Summery, Detailed } from '@/components/UiElements/Base/Modals'

const VehicleDashboard = () => {
    const { settings } = useThemeContext()
    const selectedColor = settings.color as keyof typeof colors
    const themeColor = colors[selectedColor] || selectedColor
    return (
        <>
            <Card>
                <Card.Header className="py-3 pe-3 d-flex justify-content-between align-items-center">
                    <Card.Title>MH12QN2206</Card.Title>
                    {/* <Dropdown className="ms-auto" drop="down">
                        <Dropdown.Toggle variant="light" className="p-0 btn-icon btn-md arrow-none">
                            <i className="fi fi-bs-menu-dots-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end" style={{ marginTop: '0.875rem' }}>
                            <Dropdown.Item>
                                <i className="fi fi-rr-share"></i>
                                <span className="ms-3">Share</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="fi fi-rr-refresh"></i>
                                <span className="ms-3">Refresh</span>
                            </Dropdown.Item>
                            <DropdownDivider />
                            <Dropdown.Item>
                                <i className="fi fi-rr-stats"></i>
                                <span className="ms-3">All Channels</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </Card.Header>
                <Card.Body>
                    <div className="text-center">

                        <Speedometer
                            value={30}
                            fontFamily='squada-one'
                        >
                            <Background />
                            <Arc />
                            <Needle />
                            <DangerPath angle={110} />
                            <Progress />
                            <Marks />
                            <Indicator>
                                {(value, textProps) => (
                                    <Text
                                        {...textProps}
                                        fontSize={45}
                                        fill="#fff"
                                        x={250 / 2}
                                        y={210}
                                        textAnchor="middle"
                                        fontFamily='squada-one'
                                        className='dialer'
                                    >
                                        {value+' km/h'}
                                    </Text>
                                )}
                            </Indicator>
                        </Speedometer>
                        {/* <CircularProgressbar
              value={60}
              text={`${60}%`}
              styles={{
                root: {
                  height: '12.75rem',
                  width: '12.75rem',
                },
                path: {
                  stroke: themeColor,
                  strokeWidth: '0.375rem',
                  strokeLinecap: 'round',
                },
                trail: {
                  stroke: '#EDEFF1',
                  strokeWidth: '0.15rem',
                },
                text: {
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  fill: themeColor,
                },
              }}
            /> */}
                    </div>
                </Card.Body>
                <p className='text-center'>Current Location : 5X47+573, Shirwal, Maharashtra 412801, India</p>
                <Row className="g-0 border-top">
                    <Col xl={12} className="p-4 text-center border-bottom border-end">
                        <div className='d-flex text-center border-bottom bg-purple py-2 justify-content-center'>
                            <div className="fs-18 fw-bold text-white" >179.6 KM<br /><span className='fs-13 text-white fw-normal'>Total Running Today</span></div>
                            {/* <div className="fs-13 text-white"></div> */}

                        </div>

                    </Col>
                    <Col xl={12} className="px-4 ">
                        <div className='d-flex text-center border-bottom bg-success py-4 justify-content-center'>
                            <div className="fs-16 fw-normal text-white text-center" style={{ color: '#fff' }}>18m : 26s Moving</div>

                        </div>
                    </Col>
                    <Col xl={6} className="p-4 text-center border-end">
                        {/* <button type="button" className="btn btn-primary">Summery Report</button> */}
                        <Summery />
                    </Col>
                    <Col xl={6} className="p-4 text-center">
                        {/* <button type="button" className="btn btn-secondary">Detailed Report</button> */}
                        <Detailed />
                    </Col>
                </Row>
                {/* <Card.Footer className="text-center">
                    <Link to="" className="ms-auto icon-link icon-link-hover link-primary">
                        <span>View Details</span>
                        <i className="fi fi-rr-arrow-small-right bi"></i>
                    </Link>
                </Card.Footer> */}
            </Card>
        </>
    )
}

export default VehicleDashboard
