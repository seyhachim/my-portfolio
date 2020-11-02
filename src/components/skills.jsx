import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Specialty</span>
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row">

            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Python</h3>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>C/C++</h3>
                <div className="progress">
                  <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>HTML,CSS3</h3>
                <div className="progress">
                  <div className="progress-bar color-3" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>React and Django</h3>
                <div className="progress">
                  <div className="progress-bar color-4" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Goal-Oriented</h3>
                <div className="progress">
                  <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>Creativity</h3>
                <div className="progress">
                  <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">

          <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft"></div>
          <ul className="list-inline dev-icons">

          </ul>
          <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <h3>Languages</h3>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Khmer
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              English
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Chinese
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Korean
            </li>
          </ul>
        </div>
        </div>
      </section>

      </div>
    )
  }
}
