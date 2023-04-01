import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import imgVetVite from "../assets/img/proyecto-vetVite.png"
import imgTodoList from "../assets/img/proyecto-todoList.png"
import imgMoneyManager from "../assets/img/proyecto-moneyManager.png"
import imgCrypto from "../assets/img/proyecto-cotizadorCriptos.png"

export const Projects = () => {

    const projects = [
        {
            title: "Vet Vite",
            description: "Manejo de pacientes de una veterinaria",
            imgUrl: imgVetVite
        },
        {
            title: "Todo Machine",
            description: "Manejo de 'to do's'",
            imgUrl: imgTodoList
        },
        {
            title: "Money Manager",
            description: "Controlador de presupuesto",
            imgUrl: imgMoneyManager
        },
        {
            title: "Cryptos React",
            description: "Cotizador de criptomonedas",
            imgUrl: imgCrypto
        }
    ]

     return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Estos son algunos de mis proyectos hechos en React </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                        Lorem Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                        Lorem Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
            />
        </section>
     )
}