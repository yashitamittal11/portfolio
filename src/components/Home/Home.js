import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import HomeDesc from './HomeDesc';
import Type from "../Type";

const Home = () => {
  return (
    <section>
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={10} className="home-head">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hello
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Yashita Mittal</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
            <Type />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <HomeDesc />
  </section>
  );
}

export default Home;