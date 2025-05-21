"use client"
import { Container, Row, Col } from "reactstrap"
import { SocialIcon } from "react-social-icons"


export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    "https://www.youtube.com/channel/UCMenlcxSCikSwN1Z2eYPpkg",
    "https://www.instagram.com/association_ballade/",
    "https://www.facebook.com/associationballade",
  ]

  return (
    <footer style={{ backgroundColor: "#1A4484" }} className="py-5 mt-5 text-white">
      {/* Top Section */}
      <Container className="mb-4">
        <Row className="gy-4">
          <Col xs={12} className="text-center">
            <h5 className="mb-3 text-white">© Association Ballade</h5>
          </Col>
          <Col xs={12} className="text-center">
            <div className="d-flex gap-4 justify-content-center">
              {socialLinks.map((url, index) => (
                <SocialIcon
                  key={index}
                  url={url}
                  style={{ height: 40, width: 40 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="transparent"
                  fgColor="white"
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="text-center border-top border-white border-opacity-25 pt-4">
            <p className="text-white opacity-80 small mb-0">&copy; {currentYear} Association Ballade. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
