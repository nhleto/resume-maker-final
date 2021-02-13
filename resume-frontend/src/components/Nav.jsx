import React from "react";

export class Nav extends React.Component{

  render(){

    return(
      <nav className="header">
        <div className="navbar-start">
          <div className="nav-item">
            <h3 className='nav-brand'>CV Maker</h3>
          </div>
        </div>
      <div className="navbar-end">
        <div className="nav-item">
          <h3>Welcome!</h3>
        </div>
      </div>
    </nav>
    )
  }
}