import configureBackend from './common/api/backend'
import { AuthProvider, ThemeProvider } from './common/context'
import ThemeRoutes from './routes/Routes'

// Flaticons
// import './../../../'
import './../../../node_modules/@flaticon/flaticon-uicons/css/all/all.css'

// Theme.scss
import './assets/scss/theme.scss'
import Login from './views/auth/minimal/Login'

configureBackend()

function App() {
  return (
    <ThemeProvider>
      <Login/>
      {/* <AuthProvider>
        <ThemeRoutes />
      </AuthProvider> */}
    </ThemeProvider>
  )
}

export default App
