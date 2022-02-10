import React, { Component } from 'react';
import "../styles/carousels.css"
class Carousels extends Component {
  render() {
    return (
        <React.Fragment>
            <div id="carouselExampleCaptions" className="carousel slide py-5" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div  className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active py-5" data-bs-interval="2000">
                        <div className='col-lg-5 col-12 p-2 mx-auto'>
                            <img className='slidePics ' src="../slide-1.png" alt="" />
                        </div>
                        <div className="descriptions col-lg-6 col-12 mx-auto p-2">
                            <p className='my-auto px-lg-5 py-3'>Do real time trading with small investment as per our money management strategy to get practical experience</p>
                        </div>
                       
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item  py-5" data-bs-interval="2000">
                        <div className='col-lg-5 col-12 p-2 mx-auto'>
                            <img className='slidePics' src="../slide-2.png" alt="" />
                        </div>
                        <div className="descriptions col-lg-6 col-12 mx-auto p-2">
                            <p className='my-auto px-lg-5 py-3'>Android apps & web links will be suggested for beginners to do demo trading & chart analysis</p>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item  py-5" data-bs-interval="2000">
                        <div className='col-lg-5 col-12 p-2 mx-auto'>
                            <img className='slidePics' src="../slide-3.png" alt="" />
                        </div>
                        <div className="descriptions col-lg-6 col-12 mx-auto p-2">
                            <p className='my-auto px-lg-5 py-3'>For Beginners, Get Whatsapp support if you have any doubts</p>
                        </div>
                    </div>

                    {/* Slide 4 */}

                    <div className="carousel-item  py-5" data-bs-interval="2000">
                        <div className='col-lg-5 col-12 p-2 mx-auto'>
                            <img className='slidePics' src="../slide-4.jpg" alt="" />
                        </div>
                        <div className="descriptions col-lg-6 col-12 mx-auto p-2">
                            <p className='my-auto px-lg-5 py-3'>LIfetime support through trading community</p>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
  }
}

export default Carousels;
