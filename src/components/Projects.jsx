import { Container, Row, Col, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
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
        <section className="project" id="projects">
            <Container>

                    <Col>
                        <h2>Proyectos</h2>
                        <p>Estos son algunos de mis proyectos hechos en React. <a className="aProjects" href="https://app.netlify.com/teams/ivo-piccinini/overview">Click aquí para verlos</a></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            <Tab.Content>

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

                            </Tab.Content>
                        </Tab.Container>
                    </Col>

            </Container>
        </section>
     )
}