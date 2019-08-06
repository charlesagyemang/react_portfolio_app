import React, { Component } from 'react';
import { Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div>
          <Header className="header-color" title="Title" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about-me">AboutMe</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact-us">Contact Us</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/about-me">AboutMe</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact-us">Contact Us</Link>
              </Navigation>
          </Drawer>
      </div>
    );
  }
}

export default Navbar;
