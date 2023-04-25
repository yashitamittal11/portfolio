import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import comp from "../../Assets/img-comp.jpg"

const HomeDesc = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div className="home-about-body">
              <p>I aspire to be a <strong>Frontend Developer</strong> with a passion 
              for learning and a results-driven mentality.</p>

              <p>As a Happiness Engineer, I continually go the extra mile to ensure customers
                 are fully satisfied with our services. My objective is to apply my newly-acquired
                  skills in <strong>JavaScript, React, Redux, CSS, Git, and HTML</strong> to create scalable
                   and well-documented code. While I may not yet be completely fluent, 
                   I approach my work with a laid-back yet dedicated style, always striving for excellence.</p>

              <p>Outside of work, I enjoy spending time with my family, <em><strong>engaging in arcade games
                 or traveling</strong></em>, and visiting friends in different parts of the world.</p>

              <p>Contributing to projects that help improve them is a keen interest of mine, 
                as it also hones my skills in the process. Currently, I am working on a project to replace 
                <strong> Lodash functionality in Calypso</strong> with native JS code.</p>
            </div>
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