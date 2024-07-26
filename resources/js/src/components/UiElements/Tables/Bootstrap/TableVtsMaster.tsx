import { Link } from 'react-router-dom'
import { Table, Image, Accordion, Row, Col } from 'react-bootstrap'
import { VehicleMasterTableData } from './VehicleMasterData'

function TableVtsMaster() {
    return (
        <Table responsive bordered className="mb-0">
            <thead>
                <tr>
                    {/* <th>#ID</th> */}
                    <th>Vechile</th>
                    <th>Status</th>
                    <th>Sensor Data</th>
                    <th>Other Details</th>
                    {/* <th>Make | Modal | Year</th>
                    
                    <th className="text-end">Actions</th> */}
                </tr>
            </thead>
            <tbody>
                {(VehicleMasterTableData || []).map((data, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                <div className='fw-bold w-100 text-center'><Link to={"/vehicle/"+data.number_plate} className='fs-16 btn btn-outline-success fw-bold w-100'>{data.vehicle_name}</Link></div>
                                <div className="fs-13 fw-normal mt-1 w-100 badge bg-warning" ref={(el) => {
                                    if (el) {
                                        el.style.setProperty('background-color', '#ffc107', 'important')
                                    }
                                }}><span className=''>Odometer: {data.number_plate}</span></div><br />
                                <div className="fs-13 fw-normal mt-1 badge bg-dark w-100"><span className=''>Number Plate: {data.number_plate}</span></div>

                            </td>
                            <td>
                                {data.status == 'offline' && <div className='d-flex align-items-center justify-content-center fs-15 badge bg-info w-100' style={{ height: 67, }}><span  > Offline 20d 4h 54min 9s </span></div>}
                                {data.status == 'stopped' && <div className='d-flex align-items-center justify-content-center fs-15 badge bg-danger w-100' style={{ height: 67 }}><span className='' > Stopped 20d 4h 54min 9s </span></div>}
                                {data.status == 'moving' && <div className='d-flex align-items-center justify-content-center fs-15 badge bg-success w-100' style={{ height: 67 }}><span > Moving 20d 4h 54min 9s </span></div>}
                                {data.status == 'idle' && <div className='d-flex align-items-center justify-content-center fs-15 badge bg-warning w-100' style={{ height: 67, }} ref={(el) => {
                                    if (el) {
                                        el.style.setProperty('background-color', '#ffc107', 'important')
                                    }
                                }}><span > Engine Idle 20d 4h 54min 9s </span></div>}
                                <span className='badge bg-dark mt-1 w-100'> Insurance Exp. : {data.dob} </span>

                            </td>
                            <td>
                                <div >

                                    {data.status == 'offline' && <span className='badge bg-danger w-100'> Ignition OFF </span>}
                                    {data.status == 'stopped' && <span className='badge bg-danger w-100'> Ignition OFF </span>}
                                    {data.status == 'moving' && <span className='badge bg-success w-100'> Ignition ON </span>}
                                    {data.status == 'idle' && <span className='badge bg-warning w-100' ref={(el) => {
                                        if (el) {
                                            el.style.setProperty('background-color', '#ffc107', 'important')
                                        }
                                    }}> Ignition ON </span>}
                                    <br /><span className='badge bg-primary mt-1 w-100'> Type: {data.type} </span>
                                    <br /><span className='badge bg-dark mt-1 w-100'> Sim: {data.sim} </span>
                                    <br /><span className='badge bg-info mt-1 w-100'> Billing Type: Monthly </span>

                                </div>
                            </td>
                            <td>
                                <div className="flex-shrink-0">

                                    <div className="fs-13 fw-normal mt-1">Vendor: {data.owner_name}</div>
                                    <div className="fs-13 fw-normal mt-1">Vendor: {data.make}</div>
                                    <div className="fs-13 fw-normal mt-1">{data.asset_type} <span className='badge bg-dark'>{data.category}</span></div>
                                    <div className="fs-13 fw-normal mt-1">Agreement Exp.:{data.dob}</div>
                                </div>
                            </td>



                            {/* <td><div className="flex-shrink-0">
                                <div>Modal: {data.modal}</div>
                                <div className="fs-13 fw-normal">Make: {data.make}</div>
                                <div className="fs-13 fw-normal">Year: {data.year}</div>
                            </div></td> */}

                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TableVtsMaster
