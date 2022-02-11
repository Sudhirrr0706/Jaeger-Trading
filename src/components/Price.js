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
            language:"English & Tamil"
          },
          {
            id:2,
            type:"Week-Days",
            amount:"₹2499",
            Days:"Mon - Fri ",
            // timing:"6-10 Hours",
            mode:"Online Class",
            language:"English & Tamil"
          },
      ]
    return (
        <React.Fragment>
            <div className='price-section container d-flex align-items-center flex-wrap'>
                {
                    price.map(item=>{
                        return(
                            <AnimationOnScroll animateIn='animate__slideInUp' animateOnce={true} key={item.id} className='pricing col-lg-3 col-md-6 col-12 mx-auto py-5 m-2'>
                                <i className="fas fa-check fa-3x availableIcon d-flex justify-content-center"></i>
                                <div className='p-3 amount-type'>
                                    <p className='amount'>{item.amount}</p>
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
                        <p className=' d-flex justify-content-center offlineWords'>Currently not available , due to COVID</p>
                            {/* <i class="fa fa-close fa-4x availableIcon text-danger d-flex justify-content-center"></i> */}
                            <div className='p-3 amount-type'>
                                <p className='amount'>₹4999</p>
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
