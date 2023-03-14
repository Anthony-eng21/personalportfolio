import suicideBoys from "../assets/img/Screenshot 2023-03-14 044050.png";
import haileysbot from "../assets/img/haileysbot.PNG";
import snakeGame from "../assets/img/snakegame.png";
import spaceSlappies from "../assets/img/spaceinvaders.png";
import guessingGame from "../assets/img/guessinggame.PNG";
import location from "../assets/img/Location.PNG";
import keyboard from "../assets/img/Screenshot 2023-03-14 054816.png";
import quote from "../assets/img/quotes site.png"
import firstPort from "../assets/img/FirstPort.png"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects1 = [
    {
      title: "$uicide Boy$",
      description: "----$uicide Boys Tic Tac Toe",
      imageUrl: suicideBoys,
    },
    {
      title: "Snake Game",
      description:
        "----Snake made with JS and HTML5 Canvas",
      imageUrl: snakeGame,
    },
    {
      title: "Space Invaders Game",
      description:
        "-----Space Invaders",
      imageUrl: spaceSlappies,
    },
    {
      title: "Keyboard",
      description: "----Fun little keyboard",
      imageUrl: keyboard,
    },
    {
        title: "Quote Site",
        description: "-----Quote Site made with React",
        imageUrl: quote,
      },
      {
        title: "First Portfolio HTML CSS",
        description: "----I've come so far ;)",
        imageUrl: firstPort,
      },
  ];

  const projects2 = [
    {
      title: "Hailey's Bot",
      description:
        "---Fun chat model I made for my girlfriend",
      imageUrl: haileysbot,
    },
    {
      title: "Location",
      description:
        "--Location app made in RN & SQLite",
      imageUrl: location,
    },
    {
      title: "Guessing Game",
      description: "---Guessing game made in React Native",
      imageUrl: guessingGame,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>A taste of my Projects</h2>
            <p>Some of my favorite Projects I've worked on lately</p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Taste of my Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Some of my favorite React Native projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">More on my Github</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      <a href="https://github.com/Anthony-eng21?tab=repositories">
                        Github
                      </a>
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
