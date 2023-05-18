// import suicideBoys from "../assets/img/Screenshot 2023-03-14 044050.png";
import ExpenseTracker from "../assets/img/Expense-tracker.png";
import haileysbot from "../assets/img/haileysbot.PNG";
import snakeGame from "../assets/img/snakegame.png";
import spaceSlappies from "../assets/img/spaceinvaders.png";
import deepQuotes from "../assets/img/deep-quotes.PNG";
import location from "../assets/img/Location.PNG";
import keyboard from "../assets/img/Screenshot 2023-03-14 054816.png";
import quote from "../assets/img/quotes site.png";
// import firstPort from "../assets/img/FirstPort.png";
import flappy from "../assets/img/flappy.png";
import rnExpenseProjImg from "../assets/img/expensesrnapp.PNG";
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
      title: "Message Site",
      description: "---Message board for quotes made in React.",
      imageUrl: quote,
      url: "https://quote-site-14461.web.app/quotes",
    },
    {
      title: "Snake",
      description: "---Snake made in JS and HTML5 Canvas",
      imageUrl: snakeGame,
      url: "http://anthonywoodworth.huskisites.com/spec%20apps/snakge/",
    },
    {
      title: "Space Invaders Clone",
      description: "---Space Invaders. Single level game loop.",
      imageUrl: spaceSlappies,
      url: "http://anthonywoodworth.huskisites.com/spec%20apps/space%20invaders/",
    },
    {
      title: "Keyboard",
      description: "---Fun little keyboard",
      imageUrl: keyboard,
    },
    // {
    //   title: "First Portfolio HTML CSS",
    //   description: "---",
    //   imageUrl: firstPort,
    // },
    {
      title: "Flappy Bird Clone",
      description: "---Flappy Bird Clone project I worked on in school.",
      imageUrl: flappy,
      url: "https://flappy-bread-git-main-anthony-eng21.vercel.app/",
    },
  ];

  const projects1 = [
    {
      title: "Hailey's Bot",
      description: "---chat bot made in React Native using an OpenAI Rest endpoint.",
      imageUrl: haileysbot,
      url: "https://expo.dev/@awoodworth554/haileys-bot",
    },
    {
      title: "Location",
      description: "---Location app made using React Native, Context, and, SQLite",
      imageUrl: location,
    },
    {
      title: "Deep Quotes",
      description: "---Deep Quote generator, option to share on Twitter account",
      imageUrl: deepQuotes,
      url: "https://expo.dev/@awoodworth554/deep-quotes?serviceType=classic&distribution=expo-go",
    },
    {
      title: "Expense Tracker",
      description: "---Expense Tracker, nice flow to this UI.",
      imageUrl: rnExpenseProjImg,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Some of My Projects</h2>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">React Native</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">React + JS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">My Github</Nav.Link>
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

                {/* TODO FIX THIS FOR MOBILE  */}
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <div className="social-icon" style={{marginBottom: 3}}>
                          <a href="https://github.com/Anthony-eng21?tab=repositories">
                            <img src={github} alt="github account" />
                          </a>
                        </div>
                        <a href="https://github.com/Anthony-eng21?tab=repositories">
                          💣 Github 💣
                        </a>
                        <p>More Frontend, PHP, SQL, REST APIs, and, Fullstack projects on my Github.</p>
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
