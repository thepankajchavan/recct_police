import { Link } from 'react-router-dom'
import { Table, Image } from 'react-bootstrap'
import { VehicleMasterTableData } from './VehicleMasterData'

function TableVehicle() {
    return (
        <Table responsive bordered className="mb-0">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>VechileName | Vendor | Number Plate</th>
                    <th>Type | Category</th>
                    <th>Make | Modal | Year</th>
                    <th>Site | IMEI | Sim</th>
                    <th>Installed Date</th>
                    <th className="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                {(VehicleMasterTableData || []).map((data, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                <Link to="#!">#{data.id}</Link><br/>
                                <Link to="#"><i className="fi fi-bs-file-edit text-primary"></i></Link><br/>
                                <Link to="#"><i className="fi fi-bs-file-invoice-dollar text-primary"></i></Link>

                            </td>
                            <td>
                                <div className="d-flex gap-3 align-items-center">
                                    {/* <div className="avatar avatar-sm flex-grow-0">
                                        <Image src={data.avatar} alt="" className="img-fluid" />
                                    </div> */}
                                    <div className="flex-shrink-0">
                                        <Link to="#!"><div>{data.vehicle_name}</div></Link>
                                        <div className="fs-13 fw-normal">Vendor: {data.owner_name}</div>
                                        <div className="fs-13 fw-normal">Number Plate: <span className='badge bg-dark'>{data.number_plate}</span></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className='badge bg-info '> {data.asset_type} </span>&nbsp;&nbsp;
                                {data.type == 'owned' ? <span className='badge bg-success '> {data.type} </span>
                                    : <span className='badge bg-danger '> {data.type} </span>
                                }
                                <br/>
                                <span className='badge bg-secondary mt-1 w-100'><i className='fi fi-sr-call-outgoing' style={{fontSize:10,marginRight:2,}}></i>&nbsp; {data.contact} &nbsp;</span>
                                <br />
                                <span className='badge bg-warning mt-1 w-100 '>&nbsp; {data.category} &nbsp;</span>
                            </td>
                            <td><div className="flex-shrink-0">
                                <div>Modal: {data.modal}</div>
                                <div className="fs-13 fw-normal">Make: {data.make}</div>
                                <div className="fs-13 fw-normal">Year: {data.year}</div>
                            </div></td>
                            <td><div className="flex-shrink-0">
                                <div>Site: {data.site}</div>
                                <div className="fs-13 fw-normal">IMEI: {data.imei}</div>
                                <div className="fs-13 fw-normal">Sim: {data.sim}</div>
                            </div></td>
                            <td>{data.dob}</td>
                            <td className="text-end">
                                <Link to="#" className="btn btn-icon">
                                    <i className="fi fi-bs-menu-dots-vertical fs-14" />
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TableVehicle
