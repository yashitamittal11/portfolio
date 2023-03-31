import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import comp from "../../Assets/img-comp.jpg"

const HomeDesc = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I aim to be a <b>Frontend developer. </b>
              Passionate about learning and development with a result-driven mentality.
              <br />
              <br />
              As a Happiness Engineer, I go the extra mile to ensure the customer 
              is unquestionably satisfied with our services. My goal is to apply my newly
              developed skills in {" "}
              <b>Javascript, React.js, Css, Git, HTML</b> and
              create scalable and well documented code. Though I may not be fully fluent, I approach my
              work with a relaxed and natural style, always striving for
              excellence.
              <br />
              <br />
              When I'm not working, I like spending time with my family &nbsp;
              <i>
                <b> playing games in arcade or traveling </b> and visitng my friends in 
                differnt parts of the world.
              </i>
              <br />
              <br />I love to contribute to projects to help improve them and improve my 
              skills in the process.
              &nbsp; Currently, I am working on a project to remove the <b>Lodash functionality from Calypso</b>
              and replace it with the native JS code.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={ comp } className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <br />
          <br />
        </Row>
      </Container>
    </Container>
  )
}

export default HomeDesc;