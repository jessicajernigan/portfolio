import React from 'react';

function Header(props) {
    const {
        ResumeSelected,
        setResumeSelected,
        ContactSelected,
        setContactSelected,
        PortfolioSelected,
        setPortfolioSelected,
        AboutSelected,
        setAboutSelected,
      } = props;
    return (
            <div>
                <div>
                  
                <a href="https://github.com/jessicajernigan" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Repository" className="icon"/></a>
                <a href="https://www.linkedin.com/in/jessicaleighjernigan/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Repository" className="icon"/></a>

                <a href="#about"><span
                onClick={() => {
                  setAboutSelected(true);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                console.log("about selected");
                }}
              >
                Jessica Jernigan
              </span></a>
                </div>

                <div>
                    <a href="#portfolio"><span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(true);
                  setResumeSelected(false);
                console.log("portfolio selected");
                }}
              >
                projects
              </span></a>
                    <a href="#contact"><span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(true);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                console.log("contact selected");
                }}
              >
                contact
              </span></a>
                    {/* <a href="#resume"><span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(true);
                console.log("resume selected");
                }}
              >
                resume
              </span></a> */}
                </div>
            </div>
    )
}

export default Header;