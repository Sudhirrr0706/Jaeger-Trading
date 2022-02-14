import React from 'react'
import "../styles/navbar.css" 


class Navbar extends React.Component {

    state={
        togglerIcon:"navbar-toggler fas fa-chevron-down customToggleButton fa-lg",
    }

    onClickTogglerIcon=()=>{
        if(this.state.togglerIcon==="navbar-toggler fas fa-chevron-down customToggleButton fa-lg"){
            this.setState({togglerIcon:"navbar-toggler fas fa-chevron-down customToggleButton2 fa-lg"})
        }
        else{
            this.setState({togglerIcon:"navbar-toggler fas fa-chevron-down customToggleButton fa-lg"})
        }
    }

        render() {
        return (
          <React.Fragment>
            <nav id="navbar-example2" className="navbar navbar-expand-lg custom-nav fixed-top">
                <div className="d-flex container">
                    <div className="d-flex mx-auto justify-content-center align-items-center">
                        <div className="d-flex">
                            <img className='jaeger-logo col-lg-1 col-2' src="../jaeger-logo.png" alt="Logo" />
                            <a className="navbar-brand custom-brand-name d-flex align-items-center" href="#introduction">Jaeger</a>
                        </div>
                        <i onClick={this.onClickTogglerIcon} className={this.state.togglerIcon} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"/>
                    </div>
                    
                    
                   
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-links mx-auto">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#homeSection">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#aboutSection">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#mentorSection">Mentors</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#courseSection">Modules</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#priceSection">Price</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="#reviewSection">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactSection">Contact</a>
                            </li>

                        </ul>
                        
                        <a className="btn btn-outline-secondary px-3 navBar-button" href="#bookingSection">Book A Slot</a>
                    </div>
                </div>
            </nav>
          </React.Fragment>
        )
    }
}

export default Navbar
