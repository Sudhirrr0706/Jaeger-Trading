import React, { Component } from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import Introduction from './components/Introduction';
import About from './components/About';
import AboutCards from './components/AboutCards';
import Mentors from './components/Mentors';
import Course from './components/Course';
import Carousels from './components/Carousels';
import Price from './components/Price';
import BookSlot from './components/BookSlot';
import Review from './components/Review';
import Footer from './components/Footer';
import { Scrolltop } from './components/Scrolltop';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header id='homeSection' className='header-section'>
          <Navbar/>
        </header>

        <section>

          {/* Introduction */}
          <div>
            <Introduction />
          </div>

          {/* About Section */}
          <div id='aboutSection' className='about-section'>
            <div className="d-flex container pt-5">
                <p className="about-head pe-2 my-auto">ABOUT</p>
                <hr className="text-white col-lg-4 col-8 my-auto"></hr>
            </div>
            <div className='py-lg-3 pb-lg-5'>
              <About />
            </div>
            
            <div className='about-cards pb-2'>
              <AboutCards />
            </div>
          </div>

          {/* Mentors section */}
          <div id="mentorSection" className='mentor-section'>
            <div className="d-flex container pt-5">
                <p className="mentor-head pe-2 my-auto">MENTORS</p>
                <hr className="text-dark col-lg-4 col-7 my-auto"></hr>
            </div>
            <div  className='py-lg-3 pb-lg-5'>
              <Mentors />
            </div>
          </div>

          {/* Course Structure section */}
          <div id='courseSection' className='course-section'>
            <div className="d-flex container py-5">
              <p className="course-head pe-lg-2 pe-1 my-auto">MODULES</p>
              <hr className="custom-line col-lg-4 col-6 my-auto"></hr>
            </div>

            <div className='py-lg-3 pb-lg-5'>
              <Course />
            </div>

            <div className='py-5'>
              <div className="d-flex container pt-5">
                <p className="course-head pe-2 my-auto">SERVICES</p>
                <hr className="custom-line col-lg-4 col-8 my-auto"></hr>
              </div>
              <Carousels />
            </div>
          </div>


          {/* Pricing Section */}
          <div id="priceSection" className='price-section'>
            <div className="d-flex container py-5">
              <p className="price-head pe-lg-2 pe-1 my-auto">PRICING</p>
              <hr className="custom-line col-lg-4 col-8 my-auto"></hr>
            </div>

            <div className='py-lg-3 pb-lg-5'>
              <Price />
            </div>
          </div>

          {/* Booking Slot Form */}
          <div id="bookingSection" className='booking-section'>
            <div className="d-flex container py-5">
              <p className="book-head pe-lg-2 pe-1 my-auto">BOOK SLOT</p>
              <hr className="custom-line col-lg-4 col-8 my-auto"></hr>
            </div>

            <div className='py-lg-3 pb-lg-5'>
              <BookSlot />
            </div>
          </div>

          {/* Review Section */}
          <div id="reviewSection" className='review-section'>
            <div className="d-flex container py-5">
              <p className="review-head pe-lg-2 pe-1 my-auto">REVIEWS</p>
              <hr className="custom-line col-lg-4 col-8 my-auto"></hr>
            </div>

            <div>
              <Review />
            </div>

          </div>
        </section>

       

        <footer id="contactSection" className='footer-section'>
          <div className='container'>
            <Footer />
          </div>
        </footer>

        <Scrolltop />
        
      </React.Fragment>
    );
  }
}

export default App;
