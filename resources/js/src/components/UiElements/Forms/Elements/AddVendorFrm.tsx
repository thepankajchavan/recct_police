import Select from 'react-select'
import { Row, Col, Form, Button } from 'react-bootstrap'

const AddVendorFrm = () => {
  const StatesAndUTs = [
    { value: 'andaman-and-nicobar-islands', label: 'Andaman and Nicobar Islands' },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
    { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
    { value: 'assam', label: 'Assam' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chandigarh', label: 'Chandigarh' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    {
      value: 'dadra-and-nagar-haveli-and-daman-and-diu',
      label: 'Dadra and Nagar Haveli and Daman and Diu',
    },
    { value: 'delhi', label: 'Delhi' },
    { value: 'goa', label: 'Goa' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
    { value: 'jammu-and-kashmir', label: 'Jammu and Kashmir' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'ladakh', label: 'Ladakh' },
    { value: 'lakshadweep', label: 'Lakshadweep' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'manipur', label: 'Manipur' },
    { value: 'meghalaya', label: 'Meghalaya' },
    { value: 'mizoram', label: 'Mizoram' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'puducherry', label: 'Puducherry' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'sikkim', label: 'Sikkim' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'tripura', label: 'Tripura' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'west-bengal', label: 'West Bengal' },
  ]

  return (
    <>
      <Row className="gy-6 gy-sm-8 gy-md-12">
        <Col xs={12} md={6}>
          <Form.Label htmlFor="vendorNameInput">Vendor Name</Form.Label>
          <Form.Control type="text" id="vendorNameInput" placeholder="Vendor Name" />
          <Form.Label className="mt-3" htmlFor="exampleDataList">
            State
          </Form.Label>
          {/* <Form.Control
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Search your state..."
          />
          <datalist id="datalistOptions">
            {statesAndUTs.map((state) => (
              <option key={state} value={state} />
            ))}
          </datalist> */}
          <Select
            isSearchable
            options={StatesAndUTs}
            classNamePrefix="select"
            styles={{
              container: (base) => ({
                ...base,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#b9babc',
                padding: 3,
              }),
            }}></Select>
          <Form.Label className="mt-3" htmlFor="contactInput">
            Contact Number
          </Form.Label>
          <Form.Control
            type="tel"
            id="contactInput"
            placeholder="Contact Number"
            pattern="[0-9]{10}"
            required
          />
          <Form.Label className="mt-3" htmlFor="emailInput">
            Email
          </Form.Label>
          <Form.Control type="text" id="emailInput" placeholder="Email" />
        </Col>
        <Col xs={12} md={6}>
          <Form.Label htmlFor="gstNumberInput">GST Number</Form.Label>
          <Form.Control type="text" id="gstNumberInput" placeholder="GST Number" />
          <Form.Label className="mt-3" htmlFor="panNumberInput">
            PAN Number
          </Form.Label>
          <Form.Control type="text" id="panNumberInput" placeholder="PAN Number" />
          <Form.Label className="mt-3" htmlFor="addressInput">
            Address
          </Form.Label>
          <Form.Control as="textarea" id="addressInput" placeholder="Address" rows={5} />
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Button>Submit</Button>
        </Col>
      </Row>
    </>
  )
}

export default AddVendorFrm
