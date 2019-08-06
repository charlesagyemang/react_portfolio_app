import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingPage';
import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about-me" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact-us" component={Contact} />
  </Switch>
)

export default Main;
