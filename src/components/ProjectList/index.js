import React, { useState } from 'react';
import Projects from '../../components/Project'
// import barKeep from 'src/assets/images/barkeep.png'
// import techBlog from 'src/assets/images/TechBlog.png'
// import securePwGen from 'src/assets/images/PasswordGenerator.png'
// import weatherDashboard from 'src/assets/images/WeatherDashBoard.png'



function ProjectList () {

  const [projects] = useState([
    {
      id: 1,
      title: "barKeep",
      bgimg: "barkeep.png",
      appurl: "https://jessicajernigan.github.io/team5-project-1/",
      repo: "https://github.com/jessicajernigan/team5-project-1",
      tech: "JavaScript, HTML, Foundation CSS"
    },
    {
      id: 2,
      title: "tech blog",
      bgimg: "barkeep.png",
      appurl: "https://module14-tech-blog.herokuapp.com/",
      repo: "https://github.com/jessicajernigan/week14-challenge_tech-blog",
      tech: "JavaScript, Express, Sequelize, Handlebars.js, MySQL, Heroku"
    },
    {
      id: 3,
      title: "secure password generator",
      bgimg: "barkeep.png",
      appurl: "https://jessicajernigan.github.io/week3-challenge_password-generator/",
      repo: "https://github.com/jessicajernigan/week3-challenge_password-generator",
      tech: "JavaScript, HTML, CSS"
    },
    {
      id: 4,
      title: "weather dashboard",
      bgimg: "barkeep.png",
      appurl: "https://jessicajernigan.github.io/week6-challenge_weather-dashboard/",
      repo: "https://github.com/jessicajernigan/week6-challenge_weather-dashboard",
      tech: "JavaScript, HTML, CSS"
    }
  ]);

  console.log('This is projects: ', projects);
  
  return (
    <section>
      <div>
        <div>
          {projects.map((project) => (
            <Projects 
            key={project.id} 
            image={project.bgimg} 
            title={project.title} 
            repo={project.repo} 
            tech={project.tech} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectList;