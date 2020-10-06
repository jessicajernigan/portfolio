import React from 'react';

function Header(props) {
  const tabs = ['About', 'Projects', 'Contact'];
  return (
    <header>
      <h1>Jessica Jernigan</h1>
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
    </header>
  );
}

export default Header;
