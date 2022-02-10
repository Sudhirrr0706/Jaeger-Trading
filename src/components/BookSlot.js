import React, { Component } from 'react';
import "../styles/bookSlots.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import SlotForm from './SlotForm';
export class BookSlot extends Component {


  render() {
    return (
        <React.Fragment>
            <div className='container d-flex flex-wrap justify-content-center align-items-center'>
                <AnimationOnScroll animateIn='animate__rotateIn' className='col-lg-5 col-10'>
                    <img className='booking-image' src="../jaeger-logo.png" alt=""/>
                </AnimationOnScroll>
                <div className="col-lg-7 col-12 forms">
                    <SlotForm />
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default BookSlot;
