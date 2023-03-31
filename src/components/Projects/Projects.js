import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjCards from './ProjCards';
import planner from "../../Assets/Projects/planner.png";
import issuetrack from "../../Assets/Projects/issue-tracker.png";
import search from "../../Assets/Projects/reddit-search.png";
import todo from "../../Assets/Projects/ToDo.png";
import menu from "../../Assets/Projects/restaurant.png";

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
              imgPath={menu}
              isBlog={false}
              title="Create a restaurant menu"
              description="This is a part of the project we are working on in our learning circle."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjCards
              imgPath={planner}
              isBlog={false}
              title="Highlight HEs on Planner page"
              description="Script to highlight the HEs based on their chat preference."
              ghLink=""
              demoLink="https://mydevjourney22.wordpress.com/2022/08/29/highlight-hes-based-on-their-chat-preference/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjCards
              imgPath={issuetrack}
              isBlog={false}
              title="Track Issue"
              description="App to create track of the issues"
              ghLink="https://github.com/yashitamittal11/JS_issue_tracker"
              demoLink="https://mydevjourney22.wordpress.com/2022/07/27/issue-tracker-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjCards
              imgPath={todo}
              isBlog={false}
              title="ToDo app"
              description="App to create a todo list"
              ghLink="https://github.com/yashitamittal11/TodoApp"
              demoLink="https://mydevjourney22.wordpress.com/2022/07/27/todo-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjCards
              imgPath={search}
              isBlog={false}
              title="Reddit Search App"
              description="App to search on Reddit"
              ghLink="https://github.com/yashitamittal11/Reddit-Search"
              demoLink="https://mydevjourney22.wordpress.com/2022/07/27/reddit-search-app/"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;