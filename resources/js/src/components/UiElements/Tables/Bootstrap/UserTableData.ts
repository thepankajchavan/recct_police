import avatar1 from '@/assets/images/avatars/1.png'
import avatar2 from '@/assets/images/avatars/2.png'
import avatar3 from '@/assets/images/avatars/3.png'
import avatar4 from '@/assets/images/avatars/4.png'
import avatar5 from '@/assets/images/avatars/5.png'

interface dataRecord {
  id: number
  avatar: string
  name: string
  username: string
  role: string
  email:string
  created:string
  
}

const tableUserData: dataRecord[] = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Shri S M Autade Pvt Ltd',
    username: 'SMA',
    role: 'Super Admin',
    created: '2024-06-26 08:00:09',
    email: 'mspspaikekar@gmail.com',
    
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'PRASHANT S PAIKEKAR - KA',
    
    username: 'prashant',
    role: 'Admin',
    created: '2024-06-26 08:00:09',
    email: 'mspspaikekar@gmail.com',
    
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'SUHAS SURESH PAWAR',
    
    username: 'suhas',
    role: 'Admin',
    created: '2024-06-26 08:00:09',
    
    email: 'sspawar@gmail.com',
    
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Shri S M Autade Pvt Ltd',
    username: 'SMA',
    role: 'Super Admin',
    created: '2024-06-26 08:00:09',
    email: 'mspspaikekar@gmail.com',
    
  },
  {
    id: 5,
    avatar: avatar5,
    name: 'Shri S M Autade Pvt Ltd',
    email: 'mspspaikekar@gmail.com',
    username: 'SMA',
    role: 'Super Admin',
    created: '2024-06-26 08:00:09',    
  },
]

export { tableUserData }