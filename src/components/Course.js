import React, { Component } from 'react';
import "../styles/course.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {Animated} from "react-animated-css";
class Course extends Component {
    state={
        innerTopic1:false,
        innerIcon1 :"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1",
        innerTopic2 :false,
        innerIcon2:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1",
        innerTopic3:false,
        innerIcon3:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1",
        innerTopic4:false,
        innerIcon4:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1",
        innerTopic5:false,
        innerIcon5:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1",
    }

    onClickTopic1=()=>{
        if(!this.state.innerTopic1){
            this.setState({innerTopic1:true , innerIcon1:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1 customExpandIcon2"})
        }
        else{
            this.setState({innerTopic1:false , innerIcon1:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1"})
        }
    }

    onClickTopic2=()=>{
        if(!this.state.innerTopic2){
            this.setState({innerTopic2:true , innerIcon2:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1 customExpandIcon2"})
        }
        else{
            this.setState({innerTopic2:false , innerIcon2:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1"})
        }
    }

    onClickTopic3=()=>{
        if(!this.state.innerTopic3){
            this.setState({innerTopic3:true , innerIcon3:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1 customExpandIcon2"})
        }
        else{
            this.setState({innerTopic3:false , innerIcon3:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1"})
        }
    }

    onClickTopic4=()=>{
        if(!this.state.innerTopic4){
            this.setState({innerTopic4:true , innerIcon4:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1 customExpandIcon2"})
        }
        else{
            this.setState({innerTopic4:false , innerIcon4:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1"})
        }
    }

    onClickTopic5=()=>{
        if(!this.state.innerTopic5){
            this.setState({innerTopic5:true , innerIcon5:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1 customExpandIcon2"})
        }
        else{
            this.setState({innerTopic5:false , innerIcon5:"fas fa-angle-double-down fa-lg my-auto custom-arrow-icon customExpandIcon1"})
        }
    }

   
  render() {
    
    let topic1=[
        {
            id:2,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Introduction to share market & commodity trading."
            
        },
        {
            id:3,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Knowledge about Nifty and Sensex."
            
        },
        {
            id:4,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Knowledge about Market Cap, IPO, bonus, Stock Split, dividend, Face Value, Book Value and P/E Ratio."
        },
        {
            id:5,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Knowledge about Financial Results, Share Holding Pattern and Delivery Percentage." 
        },
        {
            id:6,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Mcx commodity lot size, tick size and unit price." 
        },
        {
            id:7,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"How to do long-term and short-term investment." 
        },
        {
            id:8,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Exchange traded fund." 
        },
        {
            id:9,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"How to do intraday trading?" 
        },
        {
            id:10,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Economic data releases and market impact for commodity trading." 
        },
        {
            id:11,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Stock Screener - Both fundamental and technical screener to find right stocks for investing and trading." 
        },
        {
            id:12,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Capital Safety - Money Management and Trade Management." 
        },
    ]

    let topic2=[
        {
            id:13,
            icon:"fas fa-angle-double-right fa-lg my-auto custom-arrow-icon",
            content:"Learn Futures and Options Trading"
        },
        {
            id:14,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"How to do futures trading?" 
        },
        {
            id:15,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"What is Options Trading?" 
        },
        {
            id:16,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Difference between call option and put option." 
        },
        {
            id:17,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Margin, Contract Expiry, Long Build up, Short Build up, Long unwinding and Short Covering." 
        },
        {
            id:18,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Covered Call and Cash Secured Put." 
        },
        {
            id:19,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Option Chain." 
        },
        {
            id:20,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Basics of option greeks - Delta, Gamma, Theta, Vega and Rho." 
        },
        {
            id:21,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"How to determine expected volatility and trading range." 
        },
        {
            id:22,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"How to create option strategy builder." 
        },
    ]

    let topic3=[
        {
            id:23,
            icon:"fas fa-angle-double-right fa-lg my-auto custom-arrow-icon",
            content:"Learn 16 Options Trading Strategies"
        },
        {
            id:24,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Buy Call." 
        },
        {
            id:25,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Buy Put." 
        },
        {
            id:26,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Sell Call." 
        },
        {
            id:27,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Sell Put." 
        },
        {
            id:28,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Short Straddle." 
        },
        {
            id:29,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Long Straddle." 
        },
        {
            id:30,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Short Strangle." 
        },
        {
            id:31,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Long Strangle." 
        },
        {
            id:32,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Bull Call Spread." 
        },
        {
            id:33,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Bear Put spread." 
        },
        {
            id:34,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Bull Put Spread." 
        },
        {
            id:35,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Bear Call Spread." 
        },
        {
            id:36,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Short Iron Butterfly." 
        },
        {
            id:37,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Long Iron Butterfly." 
        },
        {
            id:38,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Short Iron Condor." 
        },
        {
            id:39,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Long Iron Condor." 
        },

    ]

    let topic4=[
        {
            id:39,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Candle Stick Pattern." 
        },
        {
            id:40,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Moving Average Convergence Divergence." 
        },
        {
            id:41,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Advanced Strategy in Super Trend indicator." 
        },
        {
            id:42,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Bollinger Bands." 
        },
        {
            id:43,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Advanced Camarilla Strategy." 
        },
        {
            id:44,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Awesome Oscillator." 
        },
        {
            id:45,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Volume Weighted Average Price." 
        },
        {
            id:46,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Basic elliott wave pattern" 
        },
        {
            id:47,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Heikin Ashi" 
        },
        {
            id:48,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Average Directional Index" 
        },
        {
            id:49,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Simple Moving average" 
        },

    ]

    let topic5=[
        {
            id:50,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Advanced Non-chart based research analysis." 
        },
        {
            id:51,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Fibonacci based advanced strategy." 
        },
        {
            id:52,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Successful Formulas in excel sheet." 
        },
        {
            id:53,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"How to minimise risk and maximise profit." 
        },
        {
            id:54,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"How to find Technical entry level, stop-loss and target." 
        },
        {
            id:55,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Trailing stop-loss strategy." 
        },
        {
            id:56,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Psychology based trading strategy." 
        },
        {
            id:57,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Live Market Training - Get Practice on Formulas and chart analysis." 
        },
        {
            id:58,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"How to use trading screen for order execution and chart analysis in both laptop and android version." 
        },
        {
            id:59,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Learn how to analyse market trend and turning points in live market." 
        },
        {
            id:60,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Learn how to find right entry for positional short-term trading and swing trading in charts and excel sheet." 
        },
        {
            id:61,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Back test the strategies you learned like chart indicators, oscillators, formulas." 
        },
        {
            id:62,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"We can clarify all your trading related doubts." 
        },
        {
            id:63,
            innerIcon:"far fa-circle fa-sm my-auto custom-arrow-icon",
            innerContent:"Q&A Session." 
        },
    ]

    let innerTopic1 
    if(this.state.innerTopic1){
        innerTopic1 = topic1.map(items=>{
            return(
                <Animated animationIn='zoomIn' animationOut='fadeOut' isVisible={this.state.innerTopic1} animationInDuration={1500} className='innerContent d-flex ps-3'>
                    <i className={items.innerIcon}></i>
                    <p className='my-auto ps-2 p-2 course-list'>{items.innerContent}</p>
                </Animated>
            )
        })
    }

    let innerTopic2
    if(this.state.innerTopic2){
        innerTopic2 = topic2.map(items=>{
            return(
                <Animated animationIn='zoomIn' animationOut='fadeOut' isVisible={this.state.innerTopic2Anime} className='innerContent d-flex ps-3'>
                    <i className={items.innerIcon}></i>
                    <p className='my-auto ps-2 p-2 course-list'>{items.innerContent}</p>
                </Animated>
            )
        })
    }

    let innerTopic3 
    if(this.state.innerTopic3){
        innerTopic3 = topic3.map(items=>{
            return(
                <Animated animationIn='zoomIn' animationOut='fadeOut' isVisible={this.state.innerTopic3} animationInDuration={1500} className='innerContent d-flex ps-3'>
                    <i className={items.innerIcon}></i>
                    <p className='my-auto ps-2 p-2 course-list'>{items.innerContent}</p>
                </Animated>
            )
        })
    }

    let innerTopic4
    if(this.state.innerTopic4){
        innerTopic4 = topic4.map(items=>{
            return(
                <Animated animationIn='zoomIn' animationOut='fadeOut' isVisible={this.state.innerTopic4} className='innerContent d-flex ps-3'>
                    <i className={items.innerIcon}></i>
                    <p className='my-auto ps-2 p-2 course-list'>{items.innerContent}</p>
                </Animated>
            )
        })
    }

    let innerTopic5
    if(this.state.innerTopic5){
        innerTopic5 = topic5.map(items=>{
            return(
                <Animated animationIn='zoomIn' animationOut='fadeOut' isVisible={this.state.innerTopic5} className='innerContent d-flex ps-3'>
                    <i className={items.innerIcon}></i>
                    <p className='my-auto ps-2 p-2 course-list'>{items.innerContent}</p>
                </Animated>
            )
        })
    }

    return (
        
    <React.Fragment>
        {/* First Topic  */}
        <AnimationOnScroll animateIn='animate__slideInUp' duration={1.3} className='firstTopic container'>
            <h2 className='topics'>01. Basics & Fundamental Analysis of Share Market & Commodity Trading</h2>
            <div>

                {/* Inner Topic 1 */}
                <div className='innerTopic1 ps-lg-5 ps-4'>
                    <div className='d-flex'>
                        <i onClick={this.onClickTopic1} className={this.state.innerIcon1}></i>
                        <h3 className='my-auto ps-2 course-list py-3'>Learn Stock Market Fundamentals and Stock Screener</h3>
                    </div>
                    <div>
                        {innerTopic1}
                    </div>
                </div>

                {/* Inner Topic 2 */}
                <div className='innerTopic2 ps-lg-5 ps-4'>
                    <div className='d-flex'>
                        <i onClick={this.onClickTopic2} className={this.state.innerIcon2}></i>
                        <h3 className='my-auto ps-2 course-list py-3'>Learn Futures and Options Trading</h3>
                    </div>
                    <div>
                        {innerTopic2}
                    </div>
                </div>

                 {/* Inner Topic 3 */}
                 <div className='innerTopic2 ps-lg-5 ps-4'>
                    <div className='d-flex'>
                        <i onClick={this.onClickTopic3} className={this.state.innerIcon3}></i>
                        <h3 className='my-auto ps-2 course-list py-3'>Learn 16 Options Trading Strategies</h3>
                    </div>
                    <div>
                        {innerTopic3}
                    </div>
                </div>
            </div>
        </AnimationOnScroll>


        {/* Second Topic */}
        <AnimationOnScroll animateIn='animate__slideInUp' duration={1.6} className='secondTopic container'>
            <h2 className='topics'>02. Learn the Formulas & Chart based Techniques to analyse the market direction</h2>

            {/* InnerTopic4 */}
            <div className='innerTopic4 ps-lg-5 ps-4'>
                <div className='d-flex'>
                    <i onClick={this.onClickTopic4} className={this.state.innerIcon4}></i>
                    <h3 className='my-auto ps-2 course-list py-3'>Technical Analysis - Chart Based Analysis</h3>
                </div>
                <div>
                    {innerTopic4}
                 </div>
            </div>

            {/* InnerTopic5 */}
            <div className='innerTopic5 ps-lg-5 ps-4'>
                <div className='d-flex'>
                    <i onClick={this.onClickTopic5} className={this.state.innerIcon5}></i>
                    <h3 className='my-auto ps-2 course-list py-3'>Advanced Technical Analysis </h3>
                </div>
                <div>
                    {innerTopic5}
                 </div>
            </div>
        </AnimationOnScroll>
    </React.Fragment>
    );
  }
}

export default Course;
