import VehicleStats from '../../components/Dashboards/CRM/VehicleStats'
import { siteData } from './Sites'
import PageBreadcrumb from '@/components/Common/PageBreadcrumb'

const SitewiseVehicles = () => {
  return (
    <>
      <PageBreadcrumb title='Sitewise Vehicles' subName='Assets'/>
      <VehicleStats data={siteData} />
    </>
  )
}

export default SitewiseVehicles
