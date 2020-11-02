import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="resume-section" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">EDUCATION</h2>
              </div>
            </div>
            </div>
        <div className="colorlib-narrow-content">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <div className="flex-grow-1">
              <div className="flex-shrink-0"><span className="text-primary">March 2018 - March 2020</span></div>
              <h3 className="mb-0">Chung-Ang University (CAU)</h3>
              <div>
              <p>Master of Engineering in Machine Learning and Big Data <br/>
               <b>GPA: 4.24/4.50</b> </p>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <div className="flex-grow-1">
              <div className="flex-shrink-0"><span className="text-primary">October 2012 - July 2017</span></div>
              <h3 className="mb-0">Institute of Technology of Cambodia (ITC)</h3>
              <p>I am pursuing my undergraduation studies with major in Electrical Engineering. <br/>
              <b> GPA: 4.0/4.0</b></p>
            </div>
          </div>
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <div className="flex-grow-1">
              <div className="flex-shrink-0"><span className="text-primary">October 2000 - October 2012</span></div>
              <h3 className="mb-0">Primary and Higher Education</h3>
              <p>I have completed my higher secondary education with major subjects as Physics,Chemistry and Maths with final grade B</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
