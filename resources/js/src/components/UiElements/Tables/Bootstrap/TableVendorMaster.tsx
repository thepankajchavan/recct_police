import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

import { tableData } from './VendorMasterData'

function TableVendorMaster() {
  function splitAddress(address: any) {
    const lines = []
    let start = 0
    while (start < address.length) {
      let end = start + 25
      if (end < address.length) {
        end = address.lastIndexOf(' ', end)
        if (end === -1 || end <= start) {
          end = start + 25
        }
      }
      lines.push(address.slice(start, end).trim())
      start = end + 1
    }
    return lines
  }

  return (
    <Table responsive bordered hover className="mb-0">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>GST & PAN Details</th>
          <th>Contact Details</th>
        </tr>
      </thead>
      <tbody>
        {(tableData || []).map((data, idx) => {
          return (
            <tr key={idx}>
              <td>
                <Link to="#!">
                  <span className="badge bg-info align-items-center gap-2 d-flex">
                    <i className="fi fi-rr-edit"></i>
                    {data.id}
                  </span>
                </Link>
              </td>
              <td>
                <Link to="#!" className="d-flex gap-3 align-items-center">
                  <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                    <div>{data.name}</div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <span className={`badge m-1 bg-success`}>Vehicles : {data.vehicles}</span>
                      <span className={`badge m-1 bg-warning`}>Machines: {data.machines}</span>
                    </div>
                  </div>
                </Link>
              </td>
              <td>
                <div className="d-flex gap-2 align-items-center">
                  <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                    <div>
                      {splitAddress(data.address).map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div>{data.state}</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex gap-2 align-items-center">
                  <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                    <div>GST No : {data.gstNumber}</div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div>PAN No. : {data.panNumber}</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex gap-2 align-items-center">
                  <div className="flex-shrink-0" style={{ flexShrink: 0 }}>
                    <div>{data.email}</div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div>{data.contactNumber}</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableVendorMaster
