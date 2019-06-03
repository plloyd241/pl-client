import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './App.scss'

import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

import AppNav from './components/AppNav'

const App: React.FC = () => {
  return (
    <Router>
      <Route render={({ location }) => (
        <div className="app">
          <AppNav />

          <TransitionGroup className="app-content">
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}/>
    </Router>
  )
}

export default App
