import React, { Component } from 'react';
import "../styles/about.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
class About extends Component {
  render() {
    return (
        <React.Fragment>
            <div className='container aboutSection p-lg-3 p-3 pb-5'>
                <div className=" d-flex flex-wrap-reverse justify-content-between align-items-center about-section ">

                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={1.3} className="col-lg-6 col-12 ">

                        
                        <p className="aboutDescription p-2">At Jaeger,We are giving stock market training program for beginners to learn share market and commodity trading basics to advanced technical analysis formulas.</p>
        
                        <div className="d-flex">
                            <i className="far fa-check-circle fa-lg checkListStyle mt-2 customChecklist"></i>
                            <p className=" ms-2 checkListDescription">Charts to analysis the stock market trend.</p>
                        </div>

                        <div className="d-flex my-lg-3 my-0">
                            <i className="far fa-check-circle fa-lg checkListStyle mt-2 customChecklist"></i>
                            <p className="ms-2 checkListDescription">This program and strategies will be helpful to trade in Nse and Bse Equity shares, Nifty futures, Bank Nifty Futures, Mcx Commodity Gold, Silver & Crude oil Etc.</p>
                        </div>

                        <div className="d-flex">
                            <i className="far fa-check-circle fa-lg checkListStyle mt-2 customChecklist"></i>
                            <p className=" ms-2 checkListDescription">After completing this training class, you can trade without anyone guidance.</p>
                        </div>

                    <p className="aboutFoot">You could be a complete beginner to the market, or have some experience with it, or you could even be an expert trader who wants to build your stock trading skills. Jaeger trading school offers the best stock training which cater to your individual stock needs.</p>
        
                </AnimationOnScroll>



                <div className="col-lg-5 col-12 mb-0">
                    <div className=" p-lg-0 p-1">
                        <img className="imgAbout" src="../about3.jpg" alt=""/>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default About;
