import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <>
      <Stack direction="horizontal" style={{ lineHeight: 'normal' }}>
        <div className="text-muted">
          <span className="fs-12 fw-medium text-uppercase">Copyright&copy;</span>
          <span className="ms-1">{new Date().getFullYear()}</span>
        </div>
        <span className="vr mx-2 bg-secondary bg-opacity-25"></span>
        <span>
          <Link to="#">Autade Fleet Manager </Link>
          {/* <span className="fs-12">❤️</span>{' '} */}
          <Link to="#"> All Rights Reserved</Link>
        </span>
      </Stack>
    </>
  )
}

export default Copyright
