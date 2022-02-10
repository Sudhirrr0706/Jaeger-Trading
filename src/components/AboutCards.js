import React, { Component } from 'react';
import Cards from './Cards';
import "../styles/aboutCards.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
class AboutCards extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="container cards py-3">
                <div className="d-flex">
                    <p className="why-us pe-2 my-auto">WHY JAEGER</p>
                    <hr className="text-white col-lg-4 col-8 my-auto"></hr>
                </div>
            </div>

            <div className="container pb-4 d-flex flex-wrap justify-content-center align-items-center ">
                <AnimationOnScroll animateIn='animate__fadeIn' duration={1.2} animateOnce={true} className="col-lg-4 col-12">
                    <Cards num="01" heading="INSPIRATION IGNITED" content="With our stock market training, you will be able to understand the stock market from the basics and you can understand the jargons like IPO,NIFTY,BSE etc." />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeIn' duration={1.4} animateOnce={true} className="col-lg-4 col-12">
                    <Cards num="02" heading="THE GOOD LIFE" content="Also you will be able to understand exactly how the stock market works and how to trade in the stock market."/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeIn' duration={1.6} animateOnce={true} className="col-lg-4 col-12">
                    <Cards num="03" heading="THE WORLD AWAITS" content="We offer the best stock market training all over India with 100% effective classes,We guide you to make your first stock purchase in our trading programs."/>
                </AnimationOnScroll>
                
            </div>

        </React.Fragment>
    );
  }
}

export default AboutCards;
