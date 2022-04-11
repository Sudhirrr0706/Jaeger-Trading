import React, { Component } from 'react';
import "../styles/mentors.css"
import MentorCard from './MentorCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Mentors extends Component {
  render() {
    return (
    <React.Fragment>
        <div>
            <div className='d-flex justify-content-center flex-wrap py-4 container'>
                <AnimationOnScroll animateIn='animate__slideInUp' duration={1.3} className='col-lg-4 col-12 mentorDetails'>
                    <MentorCard name="Tharun chakkariya" deg="MBA (Investment Management)" whatsapp="https://wa.link/av4rmd" Email="mailto:jaegertradingschool@gmail.com" instagram="https://instagram.com/jaeger_trading?utm_medium=copy_link"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInUp' duration={1.6} className='col-lg-4 col-12 mentorDetails'>
                    <MentorCard name="Naveen prakash" deg="B.com (e-commerce),Certified Management Accountant (U.S)" whatsapp="https://wa.link/6z4q5w" Email="mailto:jaegertradingschool@gmail.com" instagram="https://instagram.com/jaeger_trading?utm_medium=copy_link"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInUp' duration={1.9} className='col-lg-4 col-12 mentorDetails'>
                    <MentorCard name="Thyagarajan" deg="MBA (Investment Management)"  whatsapp="https://wa.link/f7c9xp" Email="mailto:jaegertradingschool@gmail.com" instagram="https://instagram.com/jaeger_trading?utm_medium=copy_link"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInUp' duration={1.9} className='col-lg-4 col-12 mentorDetails'>
                    <MentorCard name="Vishva R" deg="BE Mechanical , MBA (Finance)"  whatsapp="https://wa.link/nfud98" Email="mailto:jaegertradingschool@gmail.com" instagram="https://instagram.com/jaeger_trading?utm_medium=copy_link" />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInUp' duration={1.9} className='col-lg-4 col-12 mentorDetails'>
                    <MentorCard name="Tharun Kumar" deg="MBA (Operations)"  whatsapp="https://wa.link/cy72u8" Email="mailto:jaegertradingschool@gmail.com" instagram="https://instagram.com/jaeger_trading?utm_medium=copy_link" />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInUp' duration={1.9} className='col-lg-4 col-12 mentorDetails'>
                    <MentorCard name="Naveen C" deg="B.sc Media Technology"  whatsapp="https://wa.link/022gzu" Email="mailto:jaegertradingschool@gmail.com" instagram="https://instagram.com/jaeger_trading?utm_medium=copy_link" />
                </AnimationOnScroll>

            </div>
        </div>
    </React.Fragment>
    );
  }
}

export default Mentors;
