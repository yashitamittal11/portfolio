import React from 'react';
import Card from "react-bootstrap/Card";

const AbCard = () => {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <div style={{ textAlign: "justify" }}>
          <p>My name is Yashita, and I hail from Delhi, India. Since 2019, I've been 
            happily working as a <strong>Happiness Engineer</strong>.</p>

          <p>Travelling the world and exploring different places brings me great joy. 
            I have a taste for thrilling activities, including <strong>canoeing</strong> and 
            <strong> scuba diving</strong>, and I'm looking forward to experiencing 
            <strong> skydiving</strong>.</p>
        </div>
        <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
        A Little More About <strong className="purple">Me </strong> 
        </h3>
        <div style={{ textAlign: "justify" }}>
        <p>My educational background lies in <strong>Computer Science Engineering</strong>. 
        Although I began my career in support, I've always been intrigued by technology and coding. 
        Consequently, I decided to embark on an exciting coding journey to expand my horizons.</p>
        </div>
      </blockquote>
    </Card.Body>
  </Card>
  )
}

export default AbCard;