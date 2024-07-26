import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
// import { useAuthContext } from '@/common'
import AuthLayout from '@/Layouts/AuthLayout'
import TitleHelmet from '@/components/Common/TitleHelmet'
import { Button, Form, Stack } from 'react-bootstrap'
import useLogin from '../useAuth/useLogin'
import AuthMinmal from './AuthMinmal'

const Login = (props) => {
  // const { removeSession } = useAuthContext()
  // const { loading, login, redirectUrl, isAuthenticated } = useLogin()
  const [loading,setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('admin')
  const [password, setPassword] = useState<string>('123456789')
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  let token = document.head.querySelector('meta[name="csrf-token"]');


  /* useEffect(() => {
    removeSession()
  }, [removeSession]) */

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const validateEmail = (input: string) => {
    if (!input) {
      setEmailError('Email is required')
      return false
    } else {
      setEmailError(null)
      return true
    }
  }

  const validatePassword = (input: string) => {
    if (!input) {
      setPasswordError('Password is required')
      return false
    } else {
      setPasswordError(null)
      return true
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    if (isEmailValid && isPasswordValid) {
      //login(e, { email, password })
    }
  }

  return (
    <>
      <TitleHelmet title="Login" />
      <AuthLayout>
        <AuthMinmal>
          
          <div className="mb-12">
            <h4 className="fw-bold mb-3">Login to your account</h4>
            <p className="fs-16 lead">Hey, Enter your details to get login to your account.</p>
          </div>
          <Form method="post" action='/admin/login'>
          <input type='hidden' value={token.content} name='_token'/>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Email"
                value={email}
                name='identity'
                onChange={(e) => {
                  setEmail(e.target.value)
                  validateEmail(e.target.value)
                }}
                isInvalid={!!emailError}
                required
              />
              <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                name='password'
                onChange={(e) => {
                  setPassword(e.target.value)
                  validatePassword(e.target.value)
                }}
                isInvalid={!!passwordError}
                required
              />
              <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
              <span
                className="btn btn-icon position-absolute translate-middle top-50"
                style={{ right: '-1rem' }}
                onClick={togglePasswordVisibility}
              >
                <i className={`fi ${showPassword ? 'fi-rr-eye-crossed' : 'fi-rr-eye'}`}></i>
              </span>
            </Form.Group>
            <Stack direction="horizontal">
              <Form.Check type="checkbox" id="check-api-checkbox">
                <Form.Check.Input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <Form.Check.Label>Remember me</Form.Check.Label>
              </Form.Check>
              {/* <Link to="/auth/minimal/forgot-password" className="link-primary ms-auto">
                Forgot password?
              </Link> */}
            </Stack>
            <div className="d-grid gap-2 my-4">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                disabled={loading}
                className="text-white"
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </div>
            <div className='d-none'>
              Don't have an account? {/* <Link to="/auth/minimal/register">Create an Account</Link> */}
            </div>
            <div className="mt-12 mb-6 border-bottom position-relative d-none">
              <span className="small py-1 px-3 text-uppercase text-muted bg-body-tertiary rounded position-absolute translate-middle start-50">
                or
              </span>
            </div>
            <div className="flex-wrap gap-2 d-none">
              <Button variant="neutral" className="px-3 flex-fill">
                <i className="fi fi-brands-google"></i>
                <span className="ms-2">Login with Google</span>
              </Button>
              <Button variant="neutral" className="px-3 flex-fill">
                <i className="fi fi-brands-facebook"></i>
                <span className="ms-2">Login with Facebook</span>
              </Button>
            </div>
          </Form>
        </AuthMinmal>
      </AuthLayout>
    </>
  )
}

export default Login
