import { Tab, Nav, Row, Col } from 'react-bootstrap'
import { vtsTabsData } from './data/vtsTabsData'
import { tabsData } from './data/tabsData'
import { VehicleDashboard } from '@/components/Dashboards/VehicleMis'
import { Expenses, Fuel } from '@/components/UiElements/Base/Modals'
const VtsDashboard = () => {
    const colors = ['Primary']

    return (
        <>
            {colors.map((variant, idx) => (
                <Tab.Container defaultActiveKey="home" key={idx}>
                    <Nav fill variant="pills" className={`mb-3`}>
                        {/* {vtsTabsData.map(({ eventKey, icon, title, isActive }, index) => (
                            <Nav.Item key={index}>
                                <Nav.Link eventKey={eventKey} disabled={false} >
                                    <i className={icon}></i>
                                    <span className="ms-2">{title}</span>
                                </Nav.Link>
                            </Nav.Item>
                        ))} */}
                        <Nav.Item key={0}>
                            <Nav.Link eventKey={vtsTabsData[0].eventKey} disabled={false} >
                                <i className={vtsTabsData[0].icon}></i>
                                <span className="ms-2">{vtsTabsData[0].title}</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item key={1}>
                            <Nav.Link eventKey={vtsTabsData[1].eventKey} disabled={false} >
                                <i className={vtsTabsData[1].icon}></i>
                                <span className="ms-2">{vtsTabsData[1].title}</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item key={2}>
                            <Nav.Link eventKey={vtsTabsData[2].eventKey} disabled={false} >
                                <i className={vtsTabsData[2].icon}></i>
                                <span className="ms-2">{vtsTabsData[2].title}</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item key={3}>
                            <Nav.Link eventKey={vtsTabsData[3].eventKey} disabled={false} >
                                <i className={vtsTabsData[3].icon}></i>
                                <span className="ms-2">{vtsTabsData[3].title}</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane key={0} eventKey={'VTS'}>
                            <Row>
                                <Col xl={4}>
                                    <VehicleDashboard />
                                </Col>
                                <Col xl={8}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156091!2d73.78056543154418!3d18.52459859950238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sjp!4v1719228118911!5m2!1sen!2sjp" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane key={1} eventKey={'expenses'}>
                            <Row>
                                <Col xl={6} className='mt-5'>
                                    <Expenses />
                                </Col>
                                <Col xl={6} className='mt-5'>
                                    <Fuel />
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane key={2} eventKey={'Billing'}>
                            <Row>
                                <Col xl={6} className='mt-5'>
                                    Billing Data
                                </Col>
                                <Col xl={6} className='mt-5'>

                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane key={3} eventKey={'Logs'}>
                            <Row>
                                <Col xl={6} className='mt-5'>
                                    Vehicle Logs
                                </Col>
                                <Col xl={6} className='mt-5'>
                                    {/* <Fuel /> */}
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    <hr className="my-12" />
                </Tab.Container>
            ))}

            {/* {colors.map((variant, idx) => (
                <Tab.Container defaultActiveKey="home" key={idx}>
                    <Nav fill variant="pills" className={`mb-3 nav-theme-tabs-${variant.toLowerCase()}`}>
                        {tabsData.map(({ eventKey, icon, title, disabled }, index) => (
                            <Nav.Item key={index}>
                                <Nav.Link eventKey={eventKey} disabled={disabled} className="hstack">
                                    <i className={icon}></i>
                                    <span className="ms-2">{title}</span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Tab.Content>
                        {tabsData.map(({ eventKey, content }, index) => (
                            <Tab.Pane key={index} eventKey={eventKey}>
                                {content}
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                    <hr className="my-12" />
                </Tab.Container>
            ))} */}
        </>
    )
}

export default VtsDashboard
