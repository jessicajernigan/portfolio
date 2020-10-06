import React from 'react';


function Projects(props) {
  return (


      <div className="projectcard" >
        <a href={props.repo} target="_blank" rel="noopener noreferrer">
          <h4 className="title">{props.title}</h4>
          <h6>{props.tech}</h6>
        </a>

        <a href={props.appurl} target="_blank" rel="noopener noreferrer">
          <img className="img-thumbnail" alt={props.title} src={require(`../../assets/images/${props.image}`)} style={{ width: "100%", height: "40%" }} />
        </a>
      </div>






  );
};

export default Projects;
