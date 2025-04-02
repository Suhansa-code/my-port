import React from "react";
import Particles from "react-tsparticles";

const Background = () => {
  return (
    <div>
      <Particles
        options={{
          particles: {
            number: {
              value: 100
            },
            shape: {
              type: "circle"
            },
            move: {
              enable: true,
              speed: 1
            }
          }
        }}
      />
      <h1>Your Content Here</h1>
    </div>
  );
};

export default Background;
