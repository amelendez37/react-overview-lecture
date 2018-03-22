import React from 'react';

const NavBar = () => (
  <div>
    <div className="ui secondary pointing menu">
      <a className="active item">
        Home
      </a>
      <a className="item">
        Messages
      </a>
      <a className="item">
        Friends
      </a>
      <div className="right menu">
        <a className="ui item">
          Logout
        </a>
      </div>
  </div>
  <div className="ui segment">
    <p></p>
  </div>
</div>

);

export default NavBar;
