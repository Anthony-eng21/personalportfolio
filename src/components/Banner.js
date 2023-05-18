import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); //loop state for initializing our work 'animation'
  const [isDeleting, setIsDeleting] = useState(false); //is the word being deleted or initialized? state
  const toRate = ["Team Player", "Web Developer", "Mobile Developer", "Entrepeneur"];
  const [text, setText] = useState(""); // set each letter like w then e then b etc in our arr
  const [delta, setDelta] = useState(300 - Math.random() * 100); //how fast one letter comes after the first one is typed
  const period = 2000; //check the duration of each word changing

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRate.length;
    let fullText = toRate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(900);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome, this is my Portfolio.</span>
            <h1>
              {`Hi I'm Tony Woodworth`}
              <br />
              <span className="wrap">{text}</span>
              <p style={{marginTop: 10}}>I specialize in creating full-stack applications for web and mobile platforms.
              With a passion for clean code and intuitive user experiences, I want to bring your ideas to life.</p>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
