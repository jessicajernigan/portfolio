import React from 'react'; 

function Projects(props) {
    return (
            <a href={props.repo}><div>
                <h6>{props.title}</h6>
                <div>
                  <img alt={props.title} src={props.bgimg} />
                </div>
                <h6>{props.tech}</h6>
            </div></a>
      );
    };
  
  export default Projects;
