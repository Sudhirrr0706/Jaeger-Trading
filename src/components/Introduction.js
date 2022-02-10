import React, { Component } from 'react';
import "../styles/introduction.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Introduction extends Component {
  render() {
    return (
        <React.Fragment>
            <div className='head-section-content'>
                <AnimationOnScroll animateIn="animate__zoomInDown" duration={1.5} animateOnce={true} className="inner-content col-12">
                    <img className='jaeger-logo  col-lg-3 col-5' src="../jaeger-logo.png" alt="Logo" />
                    <h1>Welcome to <span style={{color:"#BEAF33"}}>Jaeger</span></h1>
                    <p>Difference is measurable, its all how you use your money !</p>
                    <div className="d-flex justify-content-center">
                        <a href="#bookingSection" className="btn px-lg-4 px-3 btn-outline-secondary intro-btn m-2">Book Slot</a>
                    </div>
                </AnimationOnScroll>
            </div>
        </React.Fragment>
    );
  }
}

export default Introduction;
