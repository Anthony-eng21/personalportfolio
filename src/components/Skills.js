import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Some of My Skills</h2>
              <p>
                JS, TS, Node/Express, React, React Native, SQL, PHP, MySQL,
                MongoDb +
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Communication</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Mobile Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Frontend</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Backend</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>OOP</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Express.JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>NoSQL Databases</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Relational Databases</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
