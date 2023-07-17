import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjCards from './ProjCards';
import JobBoard from "../../Assets/Projects/Job-tracking.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjCards
              imgPath={ JobBoard }
              isBlog={false}
              title="JobBoard App"
              description="Application designed to help you organize and manage your job search process."
              ghLink="https://github.com/yashitamittal11/job-board"
              demoLink="https://job-board-pied.vercel.app/landing"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;