import avatar1 from '@/assets/images/avatars/1.png'
import avatar2 from '@/assets/images/avatars/2.png'
import avatar3 from '@/assets/images/avatars/3.png'
import avatar4 from '@/assets/images/avatars/4.png'
import avatar5 from '@/assets/images/avatars/5.png'

interface dataRecord {
  id: number
  vehicle_name: string
  owner_name:string
  number_plate:string
  asset_type:string
  type:string
  contact:string
  category: string
  make: string
  modal: string
  year: string
  site:string
  imei: string
  sim: string  
  dob: string
  status:string
}

const VehicleMasterTableData: dataRecord[] = [
  {
    id: 1,
    vehicle_name: 'MH12QN2206 - SHINE',
    owner_name:'SHRI S M AUTADE PVT LTD',
    number_plate:'MH12QN2206',
    asset_type:'vehicle',
    type:'owned',
    contact:'7020905934',
    category:'Two Wheeler',
    make:"Honda",
    modal:'Shine',
    year:'2016',
    site:'Pune',
    imei:'868003034511274',
    sim:'5754120432625',
    dob: '15/06/2023',
    status:'offline'
  },
  {
    id: 2,
    vehicle_name: 'Ertiga',
    owner_name:'SHRI S M AUTADE PVT LTD',
    number_plate:'MH24V6439',
    asset_type:'vehicle',
    type:'owned',
    contact:'',
    category:'',
    make:"Maruti Suzuki",
    modal:'Ertiga',
    year:'',
    site:'Pune',
    imei:'868003033830907',
    sim:'5754120099740',
    dob: '15/06/2023',
    status:'stopped'
  },
  {
    id: 3,
    vehicle_name: 'Foulty MH10Z1848',
    owner_name:'SHRI S M AUTADE PVT LTD',
    number_plate:'MH10Z1848',
    asset_type:'vehicle',
    type:'owned',
    contact:'',
    category:'',
    make:"TATA MOTORS",
    modal:'TIPPER-LPK 2516 HYWA',
    year:'2008',
    site:'Pune',
    imei:'868003033828075',
    sim:'5754120099739',
    dob: '15/06/2023',
    status:'moving'
  },
  {
    id: 4,
    vehicle_name: 'Removed MH13CU1495',
    owner_name:'SHRI S M AUTADE PVT LTD',
    number_plate:'MH13CU1495',
    asset_type:'vehicle',
    type:'owned',
    contact:'',
    category:'10 TYRE HYWA',
    make:"TATA MOTORS",
    modal:'TIPPER-LPK 2516 HYWA',
    year:'2018',
    site:'Pune',
    imei:'868003033824918',
    sim:'5754120099738',
    dob: '15/06/2023',
    status:'idle'
  },
  {
    id: 5,
    vehicle_name: 'Excavator Hitachi 210',
    owner_name:'Laxman Maske',
    number_plate:'SP21 - 45116',
    asset_type:'machine',
    type:'Hired',
    contact:'',
    category:'EXCAVATOR',
    make:"TATA MOTORS",
    modal:'',
    year:'',
    site:'Shivmoga',
    imei:'354018110619487',
    sim:'5754120432631',
    dob: '15/06/2023',
    status:'moving'
  },
]

export { VehicleMasterTableData }
