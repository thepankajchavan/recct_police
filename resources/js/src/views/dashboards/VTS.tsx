import PageDashBreadcrumb from '@/components/Common/PageDashBreadcrumb'
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton'
import { Col, Row, Card } from 'react-bootstrap'
import { VehicleDashboard } from '@/components/Dashboards/VehicleMis'
import { useParams } from 'react-router-dom'
import { Expenses,Fuel } from '@/components/UiElements/Base/Modals'
import { VtsDashboard } from '@/components/UiElements/Base/NavTabs'


const VTS = () => {
    const { vehicle_number } = useParams();
    return (
        <>
            {/* <PageDashBreadcrumb title="Dashboard" subName="Dashboards" /> */}
            <PageBreadcrumbButton title={'' + vehicle_number} subName='Assets' url='dashboards/site-wise' />
            <Row>
                <Col xl={12}>
                    <VtsDashboard/>
                    {/* <VehicleDashboard /> */}
                </Col>
                {/*  */}
                {/* <Col xl={6} className='mt-5'>
                    <Expenses />
                </Col>
                <Col xl={6} className='mt-5'>
                    <Fuel />
                </Col> */}
            </Row>
        </>
    )
}

export default VTS;