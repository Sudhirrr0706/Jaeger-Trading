import React, { Component } from 'react';

import "../styles/price.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Price extends Component {
  render() {
      let price=[
          {
            id:1,
            type:"Week-Ends",
            amount:"₹2499",
            Days:"Sat & Sun",
            // timing:"6-10 Hours",
            mode:"Online Class",
            language:"English & Tamil",
            visibleOption:"pricing col-lg-3 col-md-6 col-12 mx-auto py-4 m-2",
            freeContent:"Only Limited seats, Hurry up !",
            amountClass:"amount amtClass",
            offers:"Free Program",
            offerStyle:"offerStyle",
            headerIcon:"fas fa-check fa-3x availableIcon d-flex justify-content-center"
          },
          {
            id:2,
            type:"Week-Days",
            amount:"₹2499",
            Days:"Mon - Fri ",
            mode:"Online Class",
            language:"English & Tamil",
            visibleOption:"disable col-lg-3 col-md-6 col-12 mx-auto py-5 m-2",
            amountClass:"amount noStrike",
            offers:"Currently Not available !",
            offerStyle:"notOfferClass",
            freeContent:"",
            headerIcon:"fa fa-close fa-3x availableIcon d-flex justify-content-center text-danger"
          },
      ]
    return (
        <React.Fragment>
            <div className='price-section container d-flex align-items-center flex-wrap'>
                {
                    price.map(item=>{
                        return(
                            <AnimationOnScroll animateIn='animate__slideInUp' animateOnce={true} key={item.id} className={item.visibleOption}>
                                <i className={item.headerIcon}></i>
                                <div className='p-3 amount-type'>
                                    
                                    <p className={item.amountClass}>{item.amount}</p>
                                    <p className={item.offerStyle}>{item.offers}</p>
                                    <p className='freeContentClass'>{item.freeContent}</p>
                                    <p className='type'>{item.type}</p>
                                </div>
                                <div className='d-flex flex-column ms-lg-3 ms-1'>
                                    <div className='d-flex p-3'>
                                        <div className='d-flex'>
                                            <i className="fas fa-calendar-day my-auto fa-lg pricing-icon"></i>
                                            <p className=' topic-details ps-2 my-auto'>Day : </p>
                                        </div>
                                        <p className='my-auto ps-2 timing'>{item.Days}</p>
                                    </div>


                                    {/* <div className='d-flex p-3'>
                                        <div className='d-flex'>
                                            <i className="fas fa-clock my-auto fa-lg pricing-icon"></i>
                                            <p className=' topic-details ps-2 my-auto'>Duration : </p>
                                        </div>
                                        <p className='my-auto ps-2 timing'>{item.timing}</p>
                                    </div> */}

                                    <div className='d-flex p-3'>
                                        <div className='d-flex'>
                                            <i className="fas fa-feather-alt my-auto fa-lg pricing-icon"></i>
                                            <p className=' topic-details ps-2 my-auto'>Mode : </p>
                                        </div>
                                        <p className='my-auto ps-2 mode'>{item.mode}</p>
                                    </div>
                                    <div className='d-flex p-3'>
                                        <div className='d-flex'>
                                            <i className="fas fa-language my-auto fa-lg pricing-icon"> </i>
                                            <p className=' topic-details ps-2 my-auto'>Languages : </p>
                                        </div>
                                        <p className='my-auto ps-2 language'>{item.language}</p>
                                    </div>
                                </div>
                                
                            </AnimationOnScroll>
                        )
                    })
                }

                        <AnimationOnScroll animateIn='animate__slideInUp' animateOnce={true} className='disable pricing col-lg-3 col-md-6 col-12 mx-auto py-5 m-2'>
                        <i className="fa fa-close fa-3x availableIcon text-danger d-flex justify-content-center py-2"></i>
                        {/* <p className=' d-flex justify-content-center offlineWords'>Currently not available , due to COVID</p> */}
                            
                            <div className='p-3 amount-type'>
                                <p className='amount'>₹4999</p>
                                <p className=' d-flex justify-content-center offlineWords'>Currently not available , due to COVID</p>
                                <p className='type'>OFFLINE</p>
                            </div>
                            <div className='d-flex flex-column ms-lg-3 ms-1 features'>
                                <div className='d-flex p-3'>
                                    <div className='d-flex'>
                                        <i className="fas fa-calendar-day my-auto fa-lg pricing-icon"></i>
                                        <p className=' topic-details ps-2 my-auto'>Day : </p>
                                    </div>
                                    <p className='my-auto ps-2 timing'>Mon - Fri / Sat & Sun</p>
                                </div>


                                    {/* <div className='d-flex p-3'>
                                        <div className='d-flex'>
                                            <i className="fas fa-clock my-auto fa-lg pricing-icon"></i>
                                            <p className=' topic-details ps-2 my-auto'>Duration : </p>
                                        </div>
                                        <p className='my-auto ps-2 timing'>{item.timing}</p>
                                    </div> */}

                                <div className='d-flex p-3'>
                                    <div className='d-flex'>
                                        <i className="fas fa-feather-alt my-auto fa-lg pricing-icon"></i>
                                        <p className=' topic-details ps-2 my-auto'>Mode : </p>
                                    </div>
                                    <p className='my-auto ps-2 mode'>Offline Class</p>
                                </div>
                                <div className='d-flex p-3'>
                                    <div className='d-flex'>
                                        <i className="fas fa-language my-auto fa-lg pricing-icon"> </i>
                                        <p className=' topic-details ps-2 my-auto'>Languages : </p>
                                    </div>
                                    <p className='my-auto ps-2 language'>Tamil & English</p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                
            </div> 
            <AnimationOnScroll animateIn='animate__slideInUp' className='price-button py-5'>
                <p className='text-white book-description'>Book your slots now!</p>
                <a href="#bookingSection" className="btn px-lg-4 px-4 btn-outline-secondary custom-price-btn m-2">Book Slot</a>
            </AnimationOnScroll>
                                                                                                                            
        </React.Fragment>
    );
  }
}

export default Price;
