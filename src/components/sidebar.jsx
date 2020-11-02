import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Seyha Chim</a></h1>
              <span className="email"><i className="icon-mail"></i> seyhachim@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li></li>
                  <li><a href="#about" data-nav-section="about">INTRODUCTION</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">EXPERIENCE</a></li>
                  <li><a href="#experience" data-nav-section="experience">EDUCATION</a></li>
                  <li><a href="#skills" data-nav-section="skills">SKILLS</a></li>
                  <li><a href="#interest" data-nav-section="interest">INTEREST</a></li>
                  <li><a href="#awards" data-nav-section="awards">AWARDS</a></li>
                  <li><a href="#publications" data-nav-section="publications">PUBLICATIONS</a></li>
                  <li></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/seyha.chim.5439" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/seyha.chim.5439/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/seyha-chim-744837152/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/seyhachim" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
