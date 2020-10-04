import React from 'react';

function Projects(props) {
  return (
    <a href={props.repo}>
      <h6>{props.title}</h6>
      <div>
        <img alt={props.title} src={props.bgimg} />
      </div>
      <h6>{props.tech}</h6>
    </a>
  );
};

export default Projects;
