import { Row, Col, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-select'

const AddVehiFrm = () => {
  const colors = ['Vehicle', 'Machine' /* , 'Success', 'Info', 'Warning', 'Danger' */]

  const vtype = ['Hired', 'Owned']
  const billingtype = ['Monthly', 'Hour', 'Per KM']
  const idealType = ['Yes', 'No']
  const colourOptions = [
    { value: 'occccccean', label: 'Occcccccean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ]

  const radioButtons = colors.map((variant, idx) => ({
    id: `flexRadio${variant}`,
    name: `flexRadioSolidColor${variant}`,
    label: variant,
    checkedId: `flexRadio${variant}Checked`,
  }))

  /* const styleSelect = {
        control: base =>({
            ...base,
            border:1,
            borderColor
        })
    } */
  return (
    <>
      <Row className="gy-6 gy-sm-8 gy-md-6">
        <Col lg={6} sm={12}>
          <Row>
            <Col sm={12}>
              <Form.Label htmlFor="basiInput">Asset Type</Form.Label>
              {/* <Form.Control type="text" id="basiInput" /> */}
              <div className="form-check mt-2">
                {radioButtons.map(({ id, name, label, checkedId }) => (
                  <div className="form-check-inline pe-4">
                    <input
                      className={`form-check-input form-radio-${label.toLowerCase()}`}
                      type="radio"
                      name={'name'}
                      id={id}
                    />
                    <label className="form-check-label" htmlFor={id}>
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="VehicleName">Vehicle Name</Form.Label>
              <Form.Control type="text" id="VehicleName" placeholder="Vehicle Name" />
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="exampleDataList">Vendor</Form.Label>

              <Select
                isSearchable
                options={colourOptions}
                classNamePrefix="select"
                styles={{
                  container: (base) => ({
                    ...base,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#b9babc',
                  }),
                }}></Select>
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="VehicleName">Vehicle Type</Form.Label>
              <div className="form-check mt-2">
                {vtype.map((obj) => (
                  <div className="form-check-inline pe-4">
                    <input
                      className={`form-check-input form-radio-${obj}`}
                      type="radio"
                      name={'vtype'}
                      id={obj}
                    />
                    <label className="form-check-label" htmlFor={obj}>
                      {obj}
                    </label>
                  </div>
                ))}
              </div>
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="numberPlate">Number Plate</Form.Label>
              <Form.Control type="text" id="numberPlate" placeholder="Number Plate" />
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="VehicleName">Billing Type</Form.Label>
              <div className="form-check mt-2">
                {billingtype.map((obj) => (
                  <div className="form-check-inline pe-4">
                    <input
                      className={`form-check-input form-radio-${obj}`}
                      type="radio"
                      name={'vtype'}
                      id={obj}
                    />
                    <label className="form-check-label" htmlFor={obj}>
                      {obj}
                    </label>
                  </div>
                ))}
              </div>
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="readonlyInput">Billing Rate</Form.Label>
              <Row>
                <Col lg={6} sm={12}>
                  <div className="form-check ps-0">
                    <Form.Label
                      htmlFor="readonlyInput"
                      style={{ fontWeight: 'normal', backgroundColor: '#d0d0d0', padding: 5 }}>
                      Day ₹
                    </Form.Label>
                    <div className="form-check-inline me-0 w-50">
                      <Form.Control type="text" id="readonlyInput" placeholder="Rate" />
                    </div>
                  </div>
                </Col>
                <Col lg={6} sm={12}>
                  <div className="form-check ps-0">
                    <Form.Label
                      htmlFor="readonlyInput"
                      style={{ fontWeight: 'normal', backgroundColor: '#d0d0d0', padding: 5 }}>
                      Night ₹
                    </Form.Label>
                    <div className="form-check-inline me-0 w-50">
                      <Form.Control type="text" id="readonlyInput" placeholder="Rate" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="VehicleName">Idel Days Allowed</Form.Label>
              <div className="form-check mt-2">
                {idealType.map((obj) => (
                  <div className="form-check-inline pe-4">
                    <input
                      className={`form-check-input form-radio-${obj}`}
                      type="radio"
                      name={'ideltype'}
                      id={obj}
                    />
                    <label className="form-check-label" htmlFor={obj}>
                      {obj}
                    </label>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={6} sm={12}>
          <Row>
            <Col sm={12} className="mt-lg-3">
              <Form.Label htmlFor="FuelMillage">Fuel Millage</Form.Label>
              <Form.Control type="text" id="FuelMillage" placeholder="Fuel Millage" />
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="exampleDataList">Vehicel Category</Form.Label>
              <Select
                isSearchable
                options={colourOptions}
                classNamePrefix="select"
                styles={{
                  container: (base) => ({
                    ...base,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#b9babc',
                  }),
                }}></Select>
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="valueInput">Insurance Expiry</Form.Label>
              <Form.Control className="w-50" type="date" id="valueInput" />
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="valueInput">Agreement Expiry</Form.Label>
              <Form.Control className="w-50" type="date" id="valueInput" />
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="valueInput">Installation</Form.Label>
              <Form.Control className="w-50" type="date" id="valueInput" />
            </Col>

            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="exampleDataList">Site</Form.Label>
              <Select
                isSearchable
                options={colourOptions}
                classNamePrefix="select"
                styles={{
                  container: (base) => ({
                    ...base,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#b9babc',
                  }),
                }}></Select>
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="exampleDataList">GPS Device</Form.Label>
              <Select
                isSearchable
                options={colourOptions}
                classNamePrefix="select"
                styles={{
                  container: (base) => ({
                    ...base,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#b9babc',
                  }),
                }}></Select>
            </Col>
            <Col sm={12} className="mt-3">
              <Form.Label htmlFor="simNumber">Sim Number</Form.Label>
              <Form.Control type="text" id="simNumber" placeholder="Sim Number" />
            </Col>
          </Row>
        </Col>
        <Col lg={6} sm={12}>
          <Col sm={12} className="mt-3">
            <Form.Label htmlFor="exampleDataList">Make</Form.Label>
            <Select
              isSearchable
              options={colourOptions}
              classNamePrefix="select"
              styles={{
                container: (base) => ({
                  ...base,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#b9babc',
                }),
              }}></Select>
          </Col>
          <Col sm={12} className="mt-3">
            <Form.Label htmlFor="exampleDataList">Modal</Form.Label>
            <Select
              isSearchable
              options={colourOptions}
              classNamePrefix="select"
              styles={{
                container: (base) => ({
                  ...base,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#b9babc',
                }),
              }}></Select>
          </Col>
          <Col sm={12} className="mt-3">
            <Form.Label htmlFor="exampleDataList">Year</Form.Label>
            <Select
              isSearchable
              options={colourOptions}
              classNamePrefix="select"
              styles={{
                container: (base) => ({
                  ...base,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#b9babc',
                }),
              }}></Select>
          </Col>
        </Col>
        <Col lg={6} sm={12}>
          <Form.Label>Remarks</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Col>
        <Col sm={12}>
          <Button variant={'primary'}>{'Add Vehicle'}</Button>
        </Col>
      </Row>
    </>
  )
}

export default AddVehiFrm
