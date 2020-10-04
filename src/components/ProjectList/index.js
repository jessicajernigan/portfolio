import React, { useState } from 'react';
import Projects from '../../components/Project'

const ProjectList = () => {

  const [projects] = useState([
    {
      id: 1,
      title: "barKeep",
      bgimg: "./assets/images/barkeep.png",
      appurl: "https://jessicajernigan.github.io/team5-project-1/",
      repo: "https://github.com/jessicajernigan/team5-project-1",
      tech: "JavaScript, HTML, Foundation CSS"
    },
    {
      id: 2,
      title: "tech blog",
      bgimage: "./assets/images/TechBlog.png",
      appurl: "https://module14-tech-blog.herokuapp.com/",
      repo: "https://github.com/jessicajernigan/week14-challenge_tech-blog",
      tech: "JavaScript, Express, Sequelize, Handlebars.js, MySQL, Heroku"
    },
    {
      id: 3,
      title: "secure password generator",
      bgimg: "./assets/images/PasswordGenerator.png",
      appurl: "https://jessicajernigan.github.io/week3-challenge_password-generator/",
      repo: "https://github.com/jessicajernigan/week3-challenge_password-generator",
      tech: "JavaScript, HTML, CSS"
    },
    {
      id: 4,
      title: "weather dashboard",
      bgimg: "./assets/images/WeatherDashBoard.png",
      appurl: "https://jessicajernigan.github.io/week6-challenge_weather-dashboard/",
      repo: "https://github.com/jessicajernigan/week6-challenge_weather-dashboard",
      tech: "JavaScript, HTML, CSS"
    }
  ]);


  return (
    <section>
      <div>
        <div>
          {projects.map((project) => (
            <Projects key={project.id} image={project.bgimg} name={project.title} repo={project.repo} tech={project.tech} />
          ))}
        </div>
      </div>
    </section>

  );
};

export default ProjectList;