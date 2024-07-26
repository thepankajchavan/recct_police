import avatar1 from '@/assets/images/avatars/1.png'
import avatar2 from '@/assets/images/avatars/2.png'
import avatar3 from '@/assets/images/avatars/3.png'
import avatar4 from '@/assets/images/avatars/4.png'
import avatar5 from '@/assets/images/avatars/5.png'

interface dataRecord {
  id: number
  avatar: string
  name: string
  vehicles: number
  machines: number
  panNumber:string
  gstNumber:string
  address: string
  state: string
  email: string
  contactNumber: string
}

const tableData: dataRecord[] = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Shri S M Autade Pvt Ltd',
    vehicles: 89,
    machines: 37,
    panNumber: '27SUJKE90279J',
    gstNumber: '27SUJKE90279J21A',
    address: 'Pune',
    state: 'Maharashtra',
    email: 'smautade@gmail.com',
    contactNumber: '9902809290'
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'PRASHANT S PAIKEKAR - KA',
    vehicles: 12,
    machines: 2,
    panNumber: '29ABAFP0867B',
    gstNumber: '29ABAFP0867B1ZE',
    address: 'PLOT NO.8-1-112-29E, HANABAR GALLI, NIPANI, BELGAVI -591237',
    state: 'Karnataka',
    email: 'mspspaikekar@gmail.com',
    contactNumber: '9422458588'
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'SUHAS SURESH PAWAR',
    vehicles: 5,
    machines: 3,
    panNumber: '27AMGPP0984N',
    gstNumber: '27AMGPP0984N1ZD',
    address: 'SR NO. 16, PLOT 13, NEAR NISSAN SHOWROOM, P B ROAD, UJALAIWADI, KOLHAPUR - 416004',
    state: 'Maharashtra',
    email: 'sspawar@gmail.com',
    contactNumber: '9922636999'
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Shri S M Autade Pvt Ltd',
    vehicles: 89,
    machines: 37,
    panNumber: '27SUJKE90279J',
    gstNumber: '27SUJKE90279J21A',
    address: 'Ashiyana Park 2, Opp. Gaikwad Petrol Pump, Aundh, Pune',
    state: 'Maharashtra',
    email: 'smautade@gmail.com',
    contactNumber: '9902809290'
  },
  {
    id: 5,
    avatar: avatar5,
    name: 'Shri S M Autade Pvt Ltd',
    vehicles: 89,
    machines: 37,
    panNumber: '27SUJKE90279J',
    gstNumber: '27SUJKE90279J21A',
    address: 'Giriraj Housing Society, Sakal Nagar, Aundh, Pune',
    state: 'Maharashtra',
    email: 'smautade@gmail.com',
    contactNumber: '9902809290'
  },
]

export { tableData }