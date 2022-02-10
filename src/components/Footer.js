import React, { Component } from 'react';
import "../styles/footer.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Footer extends Component {
  render() {
    return (
        <React.Fragment>
            <AnimationOnScroll animateIn='animate__zoomIn' className='contact-section pt-4 pb-2'>
                <div className='footerLogoSection'>
                    <img className='companyLogo col-lg-2 col-7' src="../jaeger-logo.png" alt="Logo" />
                    <h2 className='companyName ps-lg-5 ps-4'>JAEGER</h2>
                </div>
                <div className='contactDetails'>
                    <p className='text-white mx-auto address col-lg-4 col-12 '>No.153, Wallace Garden 2nd street, thousand lights west ,Nungambakkam,chennai, TamilNadu ,600006.</p>
                </div>
                <div className="d-flex justify-content-center mx-auto">
                    <a href="https://instagram.com/jaeger_trading?utm_medium=copy_link" target="_blank"  rel="noReferrer">
                        <i className="fab fa-instagram fa-lg customContactIcons px-3"/>
                    </a>

                    <a href="mailto:jaegertradingschool@gmail.com" target="_blank"  rel="noReferrer">
                        <i class="far fa-envelope fa-lg customContactIcons px-3"></i>
                    </a>

                    <a href="https://wa.link/av4rmd" target="_blank"  rel="noReferrer">
                        <i className="fab fa-whatsapp fa-lg customContactIcons px-3"></i>
                    </a>
                </div>

                <hr className="text-white col-12 my-auto mt-3"></hr>
                <div className="copyrightsSection pt-3">
                    <p>© Copyright <strong className='copyrightsCompanyName'>JAEGER</strong>. All Rights Reserved</p>
                </div>
            </AnimationOnScroll>
        </React.Fragment>
    );
  }
}

export default Footer;
