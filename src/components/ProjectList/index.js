import React, { useState } from 'react';
import Projects from '../../components/Project'


function ProjectList() {

  const [projects] = useState([
    {
      id: 1,
      title: "barKeep",
      bgimg: "barkeep.png",
      appurl: "https://jessicajernigan.github.io/team5-project-1/",
      repo: "https://github.com/jessicajernigan/team5-project-1",
      tech: "JavaScript • HTML • Foundation CSS"
    },
    {
      id: 2,
      title: "tech blog",
      bgimg: "techblog.png",
      appurl: "https://module14-tech-blog.herokuapp.com/",
      repo: "https://github.com/jessicajernigan/week14-challenge_tech-blog",
      tech: "JavaScript • Express • Sequelize • Handlebars.js • MySQL • Heroku"
    },
    {
      id: 3,
      title: "$uper 5ecure p4ssword generat0r",
      bgimg: "PasswordGenerator.png",
      appurl: "https://jessicajernigan.github.io/week3-challenge_password-generator/",
      repo: "https://github.com/jessicajernigan/week3-challenge_password-generator",
      tech: "JavaScript • HTML • CSS"
    },
    {
      id: 4,
      title: "Engineering Team Generator",
      bgimg: "meettheteam.png",
      appurl: "https://drive.google.com/file/d/1bo74GBJLX51VJXcipDg-Kfz-R1fy9IZT/view",
      repo: "https://github.com/jessicajernigan/week10-challenge_nodejs-eng-team-directory-generator",
      tech: "Node.js • HTML • JavaScript • Inquirer.js"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      bgimg: "WeatherDashBoard.png",
      appurl: "https://jessicajernigan.github.io/week6-challenge_weather-dashboard/",
      repo: "https://github.com/jessicajernigan/week6-challenge_weather-dashboard",
      tech: "JavaScript • HTML • CSS"
    },
    {
      id: 6,
      title: "Employee Database",
      bgimg: "employeedb.png",
      appurl: "https://drive.google.com/file/d/1tZEYnArRZAYUVdgxLk_bwO42hMwH4Cir/view",
      repo: "https://github.com/jessicajernigan/week12-challenge_cli-employee-database",
      tech: "JavaScript • Node.js • CSS"
    }
  ]);

  console.log('This is projects: ', projects);

  return (
    <section className="container">
      <div className="projectcardlist">
        <div className="projectcardwrapper">
          <div className="flex-row">
            {projects.map((project) => (
              <Projects
                key={project.id}
                image={project.bgimg}
                title={project.title}
                repo={project.repo}
                appurl={project.appurl}
                tech={project.tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProjectList;