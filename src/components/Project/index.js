import React from 'react';


function Projects(props) {
  return (
    <div className="card">
      <a href={props.repo} target="_blank" rel="noopener noreferrer">
        <h4>{props.title}</h4>
        <h5>Technologies used:</h5>
        <h6>{props.tech}</h6>
      </a>
      <a href={props.appurl} target="_blank" rel="noopener noreferrer">
        <img className="img-thumbnail" alt={props.title} src={require(`../../assets/images/${props.image}`)} />
      </a>
    </div>
  );
};

export default Projects;
