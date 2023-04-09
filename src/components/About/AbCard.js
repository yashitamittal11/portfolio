import React from 'react';
import Card from "react-bootstrap/Card";

const AbCard = () => {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          I am <span className="purple">Yashita </span> from 
          <span className="purple"> Delhi, India  </span>
          happily working as a Happiness Engineer since 
          <span className="purple"> 2019 </span>.
          <br />
          <br />
          I like to travel around the world and explore different places.
          I enjoy thrilling activites like canoeing, scuba diving and I am looking
          forward to do sky diving. 
        </p>
        <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
          More about <strong className="purple">me </strong> 
        </h3>
        <p style={{ textAlign: "justify" }}>
          My
          <span className="purple"> educational</span> background is rooted in
          <span className="purple"> Computer Science engineering</span>. I am working in support, 
          but I found myself drawn to technology and coding. So, I decided to
          embark on the ultimate coding journey.
        </p>
      </blockquote>
    </Card.Body>
  </Card>
  )
}

export default AbCard;