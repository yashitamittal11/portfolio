import React from 'react';
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
    options={{
      strings: [
        "Frontend Developer ",
        "Happiness Engineer ",
        "always learning ",
        "adventurer ",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  )
}

export default Type;