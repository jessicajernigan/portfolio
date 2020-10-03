import React from 'react';

function NavTabs(props) {
  const tabs = ['Home', 'About', 'My Projects', 'Contact'];
  return (

    <nav>
      <ul className="flex-row">
        {tabs.map(tab => (
          <li className="mx-2" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavTabs;
