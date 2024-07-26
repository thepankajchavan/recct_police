import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'regenerator-runtime/runtime'
// import configureBackend from './common/api/backend'
import { AuthProvider, ThemeProvider } from './../src/common/context'
// import ThemeRoutes from './routes/Routes'

// Flaticons
// import './../../../'
import './../../../node_modules/@flaticon/flaticon-uicons/css/all/all.css'

// Theme.scss
import './../src/assets/scss/theme.scss'
import CRM from "../src/views/dashboards/CRM";
import AuthLayout from "../src/Layouts/AuthLayout";
import ThemeRoutes from "../src/routes/Routes";

const container = document.getElementById('dasbhoard')
if (container) {
    const user = {
        id: '1',
        username: 'admin',
        email: 'admin',
        password: 'string',
        name: 'admin',
        role: 'admin',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJ1c2VybmFtZSI6IndpbmRvdyIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsIm5hbWUiOiJXaW5kb3ciLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.JvoIJ-1OvGQtAQ2mY4F0zoEfiY4cMfvGld87TJePGm4'
    }
    const root = createRoot(container)
    const authSessionKey = 'WINDOW_AUTH_SESSION'
    localStorage.setItem(authSessionKey, JSON.stringify(user))
    root.render(
        <BrowserRouter basename={''}>
            <ThemeProvider>
                <AuthProvider>
                    <ThemeRoutes />
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>,
    )
}

