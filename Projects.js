// import suicideBoys from "../assets/img/Screenshot 2023-03-14 044050.png";
import ExpenseTracker from "../assets/img/Expense-tracker.png";
import haileysbot from "../assets/img/haileysbot.PNG";
import snakeGame from "../assets/img/snakegame.png";
import spaceSlappies from "../assets/img/spaceinvaders.png";
import deepQuotes from "../assets/img/deep-quotes.PNG";
import location from "../assets/img/Location.PNG";
import keyboard from "../assets/img/Screenshot 2023-03-14 054816.png";
import quote from "../assets/img/quotes site.png";
import firstPort from "../assets/img/FirstPort.png";
import flappy from "../assets/img/flappy.png";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import github from "../assets/img/icons8-github-50.png"

export const Projects = () => {
  const projects2 = [
    {
      title: "Expense Tracker",
      description: "---Expense Tracker made with React",
      imageUrl: ExpenseTracker,
    },
    {
      title: "Snake Game",
      description: "---Snake made with JS and HTML5 Canvas",
      imageUrl: snakeGame,
      url: "http://anthonywoodworth.huskisites.com/spec%20apps/snakge/",
    },
    {
      title: "Space Invaders Game",
      description: "---Space Invaders",
      imageUrl: spaceSlappies,
      url: "http://anthonywoodworth.huskisites.com/spec%20apps/space%20invaders/",
    },
    {
      title: "Keyboard",
      description: "---Fun little keyboard",
      imageUrl: keyboard,
    },
    {
      title: "Message Site",
      description: "---Basic message board made with React.",
      imageUrl: quote,
      url: "https://quote-site-14461.web.app/quotes",
    },
    {
      title: "First Portfolio HTML CSS",
      description: "---I've come so far ;)",
      imageUrl: firstPort,
    },
    {
      title: "Flappy Bird Clone",
      description: "---Flappy Bird school project.",
      imageUrl: flappy,
      url: "https://flappy-bread-git-main-anthony-eng21.vercel.app/",
    },
  ];

  const projects1 = [
    {
      title: "Hailey's Bot",
      description: "---Fun chat bot I made for my girlfriend",
      imageUrl: haileysbot,
      url: "https://expo.dev/@awoodworth554/haileys-bot",
    },
    {
      title: "Location",
      description: "---Location app made in RN & SQLite",
      imageUrl: location,
    },
    {
      title: "Deep Quotes",
      description: "---Deep Quote generator, shares to Twitter",
      imageUrl: deepQuotes,
      url: "https://expo.dev/@awoodworth554/deep-quotes?serviceType=classic&distribution=expo-go",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>A taste of my Projects</h2>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Some React Native</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Some React & JS</Nav.Link>
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
                      <div style={{flexDirection: "row"}}>
                        <a href="https://github.com/Anthony-eng21?tab=repositories">
                          Tony's Github
                        </a>
                        <div className="social-icon">
                          <a href="https://github.com/Anthony-eng21?tab=repositories">
                            <img src={github} alt="github account" />
                          </a>
                        </div>
                      </div>
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
