import { Link } from 'react-router-dom'
import { Table, Image } from 'react-bootstrap'

import { tableData } from './data'

function FuelMaster() {
    return (
        <Table responsive bordered className="mb-0">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Liters</th>
                    <th>Add/Removed</th>
                    <th>Remart</th>
                    {/* <th className="text-end">Actions</th> */}
                </tr>
            </thead>
            <tbody>
                {(tableData || []).map((data, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{data.dob}</td>
                            <td>
                                <div className="fs-13 fw-normal text-muted">{data.name}</div>
                            </td>
                            <td>
                                <span dangerouslySetInnerHTML={{ __html: data.status }} />
                            </td>
                            <td>
                                <span dangerouslySetInnerHTML={{ __html: data.status }} />
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default FuelMaster
