import React, { Component } from 'react';
import"../styles/mentorCards.css"
import {Animated} from "react-animated-css";
class MentorCard extends Component {
    state={
        logoAnime:false
    }

    onMouseHover=()=>{
        if(!this.state.logoAnime)
        this.setState({logoAnime:true})
    }
    onMouseOut=()=>{
        if(this.state.logoAnime){
            this.setState({logoAnime:false})
        }
    }
    
  render() {
    return (
        <React.Fragment>
            <div onMouseEnter={this.onMouseHover} onMouseLeave={this.onMouseOut} className='cards-mentor p-lg-4 p-3 m-4'>
                <div className="d-flex flex-column justify-content-center align-items-center innerDetails"> 
                    <i className="fas fa-user-alt fa-5x p-3"></i>
                    <h2 className='mentorName'>{this.props.name}</h2>
                    <p className='my-auto ps-2 mentorDeg'>{this.props.deg}</p>
                </div>
                <Animated animationIn='jello' animationInDuration={1500} isVisible={this.state.logoAnime} className="d-flex justify-content-between col-lg-4 col-6 mx-auto pt-4">
                    <a href={this.props.instagram} target="_blank"  rel="noReferrer">
                        <i className="fab fa-instagram fa-lg customMentorIcons"/>
                    </a>

                    <a href={this.props.Email} target="_blank"  rel="noReferrer">
                        <i class="far fa-envelope fa-lg customMentorIcons"></i>
                    </a>

                    <a href={this.props.whatsapp} target="_blank"  rel="noReferrer">
                        <i className="fab fa-whatsapp fa-lg customMentorIcons"></i>
                    </a>
                </Animated>
            </div>
        </React.Fragment>
    );
  }
}

export default MentorCard;
