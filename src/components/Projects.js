// import suicideBoys from "../assets/img/Screenshot 2023-03-14 044050.png";
import ExpenseTracker from "../assets/img/Expense-tracker.png";
import haileysbot from "../assets/img/haileysbot.PNG";
import snakeGame from "../assets/img/snakegame.png";
import spaceSlappies from "../assets/img/spaceinvaders.png";
import deepQuotes from "../assets/img/deep-quotes.PNG";
import location from "../assets/img/Location.PNG";
import Chat_RNC from "../assets/img/React_Nodejs_CHAT_1.jpg"
// import keyboard from "../assets/img/Screenshot 2023-03-14 054816.png";
import quote from "../assets/img/quotes site.png";
import firstPort from "../assets/img/FirstPort.png";
import flappy from "../assets/img/flappy.png";
import rnExpenseProjImg from "../assets/img/expensesrnapp.PNG";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import github from "../assets/img/icons8-github-50.png";
import sb from "../assets/img/suicideboy.png";
import RapNow from "../assets/img/kahoutsxno.jpg";

export const Projects = () => {
  const projects2 = [
    {
      title: "Expense Tracker",
      description:
        "Expense Tracker. Never misbudget your bills again! Very fun and pretty UI on this project.",
      imageUrl: ExpenseTracker,
    },
    {
      title: "Real Time Messaging App",
      description:
        "Create groups and talk with your friends. Built in React, Node/Express and with the flexible Chat Engine library",
      imageUrl: Chat_RNC,
    },
    {
      title: "Message Board",
      description:
        "Message board for Inspirational quotes. Share one of your favorite quotes now! Made in React and many other technologies. use it today!",
      imageUrl: quote,
      url: "https://quote-site-14461.web.app/quotes",
    },
    {
      title: "First Portfolio HTML CSS",
      description:
        "BIG difference between the two. Granted only made in HTML and CSS it was the first project I was ever assigned.",
      imageUrl: firstPort,
    },
    {
      title: "Snake",
      description:
        "Snake made in JS and HTML5 Canvas. Super fun and addicting. Feel free to play!",
      imageUrl: snakeGame,
      url: "http://anthonywoodworth.huskisites.com/spec%20apps/snakge/",
    },
    {
      title: "Space Invaders Clone",
      description:
        "Space Invaders. Single level game loop with axial hit-box detection. Feel free to play!",
      imageUrl: spaceSlappies,
      url: "http://anthonywoodworth.huskisites.com/spec%20apps/space%20invaders/",
    },
    {
      title: "Tic Tac Toe",
      description: "Game in honor of $B",
      imageUrl: sb,
      url: "http://anthonywoodworth.huskisites.com/spec%20apps/%24uicide%20Boy%20gurl/tic%20tac%20toe/",
    },
    {
      title: "Flappy Bird Clone",
      description:
        "Flappy Bird Clone. Site and photo are different due to updates. Feel free to play!",
      imageUrl: flappy,
      url: "https://flappy-bread-git-main-anthony-eng21.vercel.app/",
    },
  ];

  const projects1 = [
    {
      title: "Hailey's Bot",
      description:
        "Introducing a remarkable Chat Bot developed with React Native and Axios. Utilizing a powerful ChatGPT REST endpoint provided by OpenAI this bot can give you very intuitive responses and facts. Seamlessly integrated into the app. Users can effortlessly exchange messages, and the bot generates prompt responses on the fly. With its intuitive interface and smooth integration.",
      imageUrl: haileysbot,
      url: "https://expo.dev/@awoodworth554/haileys-bot",
      // url: "https://github.com/Anthony-eng21/Tony-s-chatbot",
    },
    {
      title: "RapNow!",
      description:
        "Welcome to RapNow!, where you can unleash your creativity and improve your rap skills with our timer and beats! Whether you're a seasoned rapper or just starting out, our app provides a platform for you to practice and enhance your freestyle abilities. As you start the timer, a well produced beat will play. Challenge yourself to deliver your best performance within the time limit and push your boundaries.",
      imageUrl: RapNow,
      url: "https://expo.dev/@awoodworth554/rapnow?serviceType=classic&distribution=expo-go",
    },
    {
      title: "Location",
      description:
        "The Location app is developed with React Native, Context, and SQLite. By harnessing the device's GPS capabilities, it provides precise tracking of the user's current location. With the app's intuitive interface, users can effortlessly visualize their real-time location on an interactive map. Additionally, they have the convenience of exploring and discovering nearby places of interest.",
      imageUrl: location,
    },
    {
      title: "Expense Tracker",
      description:
        "The Expense Tracker is a sleek and efficient mobile app built with React Native. It simplifies expense management with its intuitive user interface and powerful features. Leveraging the Context API, the app ensures smooth data flow and seamless user interactions. The robust Firebase backend provides secure and reliable data storage, while Axios handles seamless HTTP requests. Experience hassle-free expense tracking with this elegant and user-friendly app.",
      imageUrl: rnExpenseProjImg,
    },
    {
      title: "Deep Quotes",
      description:
        "Deep Quote Generator. With the option to share on Twitter account or if you like on my Quote Sharing site! Built with React Native. This app consumes a REST endpoint for the quote generation and many of the responses are quite profound.",
      imageUrl: deepQuotes,
      url: "https://expo.dev/@awoodworth554/deep-quotes?serviceType=classic&distribution=expo-go",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Some Projects</h2>
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
                  <Nav.Link eventKey="second">React & JS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Github</Nav.Link>
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
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="social-icon"
                          style={{ marginBottom: 3 }}
                        >
                          <a href="https://github.com/Anthony-eng21?tab=repositories">
                            <img src={github} alt="github account" />
                          </a>
                        </div>
                        <a href="https://github.com/Anthony-eng21?tab=repositories">
                          💣 Github 💣
                        </a>
                        <p>
                          More Frontend, PHP, SQL, REST APIs, and, Fullstack
                          projects on my Github.
                        </p>
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
