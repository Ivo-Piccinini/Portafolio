import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/React-icon.svg.png"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.png'
import navIcon3 from '../assets/img/netlify-logo-png-transparent.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img className="logo-footer" src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ivo-piccinini-7423a324b/"><img src={navIcon1} alt="Linkedin"/></a>
                            <a href="https://github.com/Ivo-Piccinini"><img src={navIcon2} alt="Github"/></a>
                            <a href="https://app.netlify.com/teams/ivo-piccinini/overview"><img src={navIcon3} alt="Netlify"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}