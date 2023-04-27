import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjCards from './ProjCards';
import planner from "../../Assets/Projects/planner.png";
import issuetrack from "../../Assets/Projects/issue-tracker.png";
import search from "../../Assets/Projects/reddit-search.png";
import todo from "../../Assets/Projects/ToDo.png";
import menu from "../../Assets/Projects/restaurant.png";
import chatGPT from "../../Assets/Projects/chatGPT.png"
import Lodash from "../../Assets/Projects/Lodash.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import voting from "../../Assets/Projects/voteapp.png";

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
              imgPath={voting}
              isBlog={false}
              title = "A voting app"
              description="This is a simple app for voting on activities. Users can vote and see the top 3 activities based on the number of votes received."
              ghLink="https://github.com/yashitamittal11/votingApp"
              demoLink="https://mydevjourney22.wordpress.com/2023/04/22/create-a-voting-app/"
             
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjCards
              imgPath={chatGPT}
              isBlog={false}
              title="Create a clone of ChatGPT"
              description="This is a clone of ChatGPT using the latest React JS, HTML and CSS. It is built on top of Node Javascript and Express."
              ghLink="https://github.com/yashitamittal11/chatGPT/blob/main/README.md"
              demoLink="https://mydevjourney22.wordpress.com/2023/04/08/create-a-clone-of-chatgpt/"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjCards
              imgPath={Lodash}
              isBlog={false}
              title="The path to deprecating Lodash"
              description="I am working on this mini project to remove the Lodash components from Calypso and replace it with the native JS code."
              ghLink = "https://github.com/Automattic/wp-calypso"
              demoLink="https://mydevjourney22.wordpress.com/2023/03/10/remove-loads-from-wp-calypso-project/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjCards
              imgPath={portfolio}
              isBlog={false}
              title="My portfolio app"
              description="This is this portfolio app I made using React and Bootstrap."
              ghLink="https://github.com/yashitamittal11/portfolio"
              demoLink=""
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjCards
              imgPath={menu}
              isBlog={false}
              title="Create a restaurant menu"
              description="This is a part of the project we are working on in our learning circle."
              ghLink="https://github.com/yashitamittal11/restaurant-menu"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjCards
              imgPath={planner}
              isBlog={false}
              title="Highlight HEs on Planner page"
              description="Script to highlight the HEs based on their chat preference."
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