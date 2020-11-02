import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I recently graduated from Chung-Ang University with Computer Science as my major. My research interest is in Artificial Intelligence (AI) field which is applied in Computer Vision.
                    I also have keen interest in web application. I believe that we can take advantage of them to develop cutting-edge technological solutions that address today’s challenges for social good. </p>
                    <p>
                    I have found that I am a natural born leader. I have a soft spot for guiding people to accomplish the goal by setting a plan and well organizing. For instance,
                    I am currently a chairman of ASEAN Youth Network in Korea Organization. Moreover, I think critically about challenges and can produce ingenious solutions.
                    </p>
                    </div>
                    <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/14_LkibxIofExUeIt8cUCl9aN2iShpnPW/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download My CV <i className="icon-download4" /></a>
                    <a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1ElOk4Z4LdkzNom5aEZHMlUfi_tN4F41U/view?usp=sharing" target="_blank" rel="noopener noreferrer">Cover letter <i className="icon-briefcase3" /></a>
                    <a className="btn btn-primary btn-learn" href="https://github.com/seyhachim" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Deep Learning Developement </h3>
                    <p> I have skilled in Python, TensorFlow, Pytoch, CUDA and 1 year experience with Deep learning.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Web Application</h3>
                    <p>I have basic understanding about web application, I have experienced building website using HTML,
                    CSS, JavaScript, React, and Django.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-7">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Arduino programming</h3>
                    <p> I have experienced using C/C++ for programming with network modules such as Ethernet, Wi-Fi, NFC modules and Android component.
                      </p>
                </div>
                </div>
            </div>

            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
