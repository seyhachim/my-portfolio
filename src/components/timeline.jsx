import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">EXPERIENCE</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Student, CAU <span>March 2018 - March 2020</span></h2>
                        <p>
                        <li>Working with a deep learning method on Facial Landmark Detection Using Python with the PyTorch framework and
                        designed a deep heatmap regression approach which achieved superior, or at least comparable,performance in comparison to
                        state-of-the-art methods for challenging datasets.</li>
                        <li>Drowsiness detection with the Security System using one-shot learning <a href="https://www.youtube.com/watch?v=tPlQIybXL_M&ab_channel=seyhachim" target="_blank"> Watch Video Demo here</a>

                        </li></p>


                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Summer Internship at Automation Laboratory, ITC <span>Summer 2017</span></h2>
                        <p>Working with Aurduino programming and
                        Designing a Hand Gesture Recognition in Khmer language using MATLAB Use Machine Learning Algorithm-SVM in MATLAB.

                        <a href="https://www.youtube.com/watch?v=gaaDSLSYNCY&ab_channel=seyhachim" target="_blank"> Watch Video Demo here</a></p>


                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Summer Internship at Automation Laboratory, ITC <span>Summer 2016</span></h2>
                        <p>Understanding how to operate PLC and design a control system and its interfere
of the system. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Summer Internship at E.M Construction Import Export Co., LTD <span>Summer 2015</span></h2>
                        <p>Understanding Electrical transmission construction such as transportation
lines, transformer substations and pole mounted transformations.</p>

                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
