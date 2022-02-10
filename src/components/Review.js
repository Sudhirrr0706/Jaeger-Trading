import React, { Component } from 'react';
import "../styles/review.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Review extends Component {
  render() {
      let review = [
        {
            id:1,
            name:"Bhuvan",
            cityName:"Thirupur",
            reviewContent:" Day one la irundhu last day varaikum neenga teach panathu romba nalla purijithu oru oru day um intresting ah solli kuduthinga.Unga kitta irundhu kathukitten class ku before oru bayam trading n aipo neenga solli kudutha method la vachi analysis panni confidence ah enala trading la travel panna mudium,Thanks a lot brother ! ",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star p-1"
        },
        {
            id:2,
            name:"Gayathri sukumaran",
            cityName:"Chennai",
            reviewContent:"Hey bro your way of teaching is very cool and simple.Basic to advance semma crystal clear ah explain paninga bro.Naa speacial la one mention pannanum last class really superb bro..Every trader atha therijikita yarum share market loss panna matanga !",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star-half p-1"
        },
        {
            id:3,
            name:"Joysan Prakash",
            cityName:"Thanjavur",
            reviewContent:"My highest compliment is that I would recommend Jaeger trading school to anybody who aims to learn the fundamentals of online trading. ",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star p-1"
        },
        {
            id:4,
            name:"Karthi",
            cityName:"Chennai",
            reviewContent:"This trading school is truly the place to understand the intricacies of the share market world !",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star p-1"
            
        },
        {
            id:5,
            name:"Gokul",
            cityName:"coimbatore",
            reviewContent:"Bro classes are awesome..the way u teaching make beginners to understand neat and clean and you are following up with each and everyone if they didnt understand or didnt attend the classes bro..Simply awesome.",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star-half p-1"
           
        },
        {
            id:6,
            name:"Aarthi",
            cityName:"Chennai",
            reviewContent:"Hi bro...till now session was great worth for money & clear explanation..cant wait for upcoming sessions.",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star p-1"
        },
           
        {
            id:7,
            name:"Saravanan",
            cityName:"coimbatore",
            reviewContent:"Thanks bro..! ipadilam ithuvaraikum charts la draw panathey ila..ipo namma class la padicha concepts S&R levels and chart patterns um combine pani cross check pani pathen bro..beautiful ah work agiruruku neraya ",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star p-1"
        },
        {
            id:8,
            name:"Anu",
            cityName:"Thirupur",
            reviewContent:"High-quality coaching! Much needed before we start to invest in shares.",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star p-1"
           
          
        },
        {
            id:9,
            name:"Vicky",
            cityName:"Madurai",
            reviewContent:"Great experience! Great Learning! A fantastic start to my journey as a trader !",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star p-1"
           
        },
        {
            id:10,
            name:"Piruthivi",
            cityName:"Chennai",
            reviewContent:"Loved everything about this Jaeger Program. This program has boosted my confidence as a trader tremendously.",
            rating:"fas fa-star p-1",
            rating2:"fas fa-star-half p-1"
        },
      ]
    return (

        <React.Fragment>
            <div className=' d-flex justify-content-center flex-wrap py-3 p-2'>
                
                {
                    review.map(item=>{
                        return(
                            <AnimationOnScroll animateIn='animate__slideInUp' key={item.id} className='col-lg-5 col-md-5 col-12 reviewCard p-5 m-2'>
                                <div className='mx-auto personDetails'>
                                    <i className="fas fa-user-alt fa-3x p-3 userLogo"></i>
                                    <p className='userName mb-0 pb-0'>{item.name}</p>
                                    <p className='cityName mt-0 pt-0'>{item.cityName}</p>
                                    <p className='reviewContent'>{item.reviewContent}</p>
                                </div>
                                <div className='star'>
                                    <i className={item.rating}></i>
                                    <i className={item.rating}></i>
                                    <i className={item.rating}></i>
                                    <i className={item.rating}></i>
                                    <i className={item.rating2}></i>
                                </div>
                            </AnimationOnScroll>
                        )
                    })
                }
            </div>
        </React.Fragment>

    );
  }
}

export default Review;
