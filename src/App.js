import { Component } from 'react';
import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import Sidebar from './components/sidebar'
import About from './components/about'
import Timeline from './components/timeline'
import Experience from './components/experience'
import Skills from './components/skills'
import Interest from './components/interest'
import Awards from './components/awards'
import Publications from './components/publications'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<About></About>
					<Timeline></Timeline>
          <Experience></Experience>
          <Skills></Skills>
          <Interest></Interest>
          <Awards></Awards>
          <Publications></Publications>
        </div>
      	</div>
      </div>
    );
  }
}


export default App;
