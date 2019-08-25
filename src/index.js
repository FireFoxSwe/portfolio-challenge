import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Profile from "./Profile"
import Header from "./components/Header"
import Footer from "./components/Footer"
import DeveloperProjects from "./components/DeveloperProjects"
import CurriculumVitae from "./components/CurriculumVitae"

import './css/tailwind.css'

// App component returns Header and Footer components, and uses React Router to switch 
// between components that populate the body of the website.
const App = () => {
  return (
    <div className="page-content">
      <Header />
      <div className="content-wrapper">
        <Switch>
          <Route exact path='/' component={Profile} ></Route>
          <Route exact path='/DeveloperProjects' component={DeveloperProjects}></Route>
          <Route exact path='/CurriculumVitae' component={CurriculumVitae}></Route>
        </Switch>
      </div>
      <Footer />
    </div >
  )
};

// Renders the App component in the virtual ReactDOM
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("app"))