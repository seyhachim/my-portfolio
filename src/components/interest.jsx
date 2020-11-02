import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="interest">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Highlights</span>
                    <h2 className="colorlib-heading">INTEREST</h2>
                    <p>Deep Learning | Reinforcement learning | Web application <br />
                    Self-development books | Travel <br />
                    Football | Guitar </p>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      </div>
    )
  }
}
