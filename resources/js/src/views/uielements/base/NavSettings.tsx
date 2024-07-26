import { Link } from 'react-router-dom'
import PageBreadcrumb from '@/components/Common/PageBreadcrumb'
import { Row, Col, Card, Table } from 'react-bootstrap'

import {
  NavTabBasic,
  NavTabDropdown,
  NavTabLineIcon,
  NavTabPills,
  NavTabRichContent,
  NavTabTheme,
  NavTabUnderline,
  NavTabWithIcon,
  NavTabSettings,
} from '@/components/UiElements/Base/NavTabs'

const NavSettings = () => {
  return (
    <>
      <PageBreadcrumb title="NavTabs" subName="Base UI" />
      <Row className="g-3 g-md-4">
        {/* Start:: Col */}
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Basic</Card.Title>
            </Card.Header>
            <Card.Body>
              <NavTabSettings />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default NavSettings
