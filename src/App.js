import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "./routes";

// pages


import DashboardOverview from "./components/dashboard/DashboardOverview";

import Settings from './components/Settings/Settings';
// components
import Sidebar from "./components/Common/Sidebar";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Preloader from "./components/Preloader";
import Login from './components/Login/Login';

import ProjectDetails from './components/Projects/ProjectDetails';
import Profile from './components/Profile/Index';
import Projects from './components/Projects/Projects';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
   
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar {...props} />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>


    {/* pages */}
    <RouteWithSidebar exact path={Routes.Dashboard.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.Projects.path} component={Projects} />
    <RouteWithSidebar exact path={Routes.ProjectDetails.path} component={ProjectDetails} />
    <RouteWithSidebar exact path={Routes.Profile.path} component={Profile} />
    <Route path={Routes.SignIn.path} component={Login}/>

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
