import React,{useState} from 'react'
import {Animated} from "react-animated-css";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import "../styles/bookSlots.css"
export default function SlotForm() {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [contact,setContact] = useState("");
    const [city,setCity] = useState("");
    const [language,setLanguage] = useState("");
    const [batch,setBatch] = useState("");

    const [nameError,setNameError] = useState("");
    const [mailError,setMailError] = useState("");
    const [contactError,setContactError] = useState("");
    const [cityError,setCityError] = useState("");
    const [languageError,setLanguageError] = useState("");
    const [batchError,setBatchError] = useState("");

    const [nameAnime,setNameAnime] = useState(false)
    const [mailAnime,setMailAnime] = useState(false)
    const [contactAnime,setContactAnime] = useState(false)
    const [cityAnime,setCityAnime] = useState(false)
    const [languageAnime,setLanguageAnime] = useState(false)
    const [batchAnime,setBatchAnime] = useState(false)

    const [modalOpen,setModalOpen] = useState(false)

    const onModalHide=()=>{
        setModalOpen(false)
        setName('');
        setMail('');
        setContact('');
        setCity('');
        setBatch('');
        setLanguage('');
    }
    

    const onSubmitForm=(event)=>{
        if(name===""){
            setNameError("Enter your name")
            setMailError("")
            setContactError("")
            setCityError("")
            setLanguageError("")
            setBatchError("")

            setNameAnime(true)
            setMailAnime(false)
            setContactAnime(false)
            setCityAnime(false)
            setLanguageAnime(false)
            setBatchAnime(false)

            setModalOpen(false)
            
        }
        else if(mail===""){
            setNameError("")
            setMailError("Enter your mail-id")
            setContactError("")
            setCityError("")
            setLanguageError("")
            setBatchError("")

            setNameAnime(false)
            setMailAnime(true)
            setContactAnime(false)
            setCityAnime(false)
            setLanguageAnime(false)
            setBatchAnime(false)

            setModalOpen(false)
        }
        else if(contact===""){
            setNameError("")
            setMailError("")
            setContactError("Enter your Mobile Number")
            setCityError("")
            setLanguageError("")
            setBatchError("")

            setNameAnime(false)
            setMailAnime(false)
            setContactAnime(true)
            setCityAnime(false)
            setLanguageAnime(false)
            setBatchAnime(false)

            setModalOpen(false)
        }
        else if(city===""){
            setNameError("")
            setMailError("")
            setContactError("")
            setCityError("Enter the city name")
            setLanguageError("")
            setBatchError("")

            setNameAnime(false)
            setMailAnime(false)
            setContactAnime(false)
            setCityAnime(true)
            setLanguageAnime(false)
            setBatchAnime(false)

            setModalOpen(false)


        }
        else if (language===""){
            setNameError("")
            setMailError("")
            setContactError("")
            setCityError("")
            setLanguageError("Choose Language")
            setBatchError("")

            setNameAnime(false)
            setMailAnime(false)
            setContactAnime(false)
            setCityAnime(false)
            setLanguageAnime(true)
            setBatchAnime(false)

            setModalOpen(false)

        }
        else if(batch===""){
            setNameError("")
            setMailError("")
            setContactError("")
            setCityError("")
            setLanguageError("")
            setBatchError("Choose batch")

            setNameAnime(false)
            setMailAnime(false)
            setContactAnime(false)
            setCityAnime(false)
            setLanguageAnime(false)
            setBatchAnime(true)

            setModalOpen(false)
        }
        else{
            setNameError("")
            setMailError("")
            setContactError("")
            setCityError("")
            setLanguageError("")
            setBatchError("")

            setNameAnime(false)
            setMailAnime(false)
            setContactAnime(false)
            setCityAnime(false)
            setLanguageAnime(false)
            setBatchAnime(false)

            setModalOpen(true)

       

        console.log(name, mail, contact, city, language, batch)
        const data = {
            Name : name,
            Mail : mail,
            Contact : contact,
            City : city,
            Batch : batch,
            Language : language,
            
        }
        axios.post('https://sheet.best/api/sheets/23e10b6b-a651-40ae-b6f9-b3c89e3d4b2a',data)
             .then((response)=>{
                 console.log(response)
             })

       
	
        }
        event.preventDefault()
    }
  return (
    <React.Fragment>
        <form className="row g-3 px-lg-4 px-3 py-4 mt-auto">
                        <div className="col-12">
                            <label for="Name" className="form-label labelName">Name</label>
                            <input type="text" className="form-control text-white" id="Name" onChange={(e)=>setName(e.target.value)} value={name} name="user_name"/>
                            <Animated animationIn='animate__shakeX' isVisible={nameAnime}>
                                <p className='text-danger'>{nameError}</p>
                            </Animated>
                            
                        </div>
                      
                        <div className="col-md-6 col-12">
                            <label for="Email" className="form-label labelName">E mail</label>
                            <input type="text" className="form-control text-white" id="Email" onChange={(e)=>setMail(e.target.value)} value={mail} name="send_to"/>
                            <Animated animationIn='animate__shakeX' isVisible={mailAnime}>
                                <p className='text-danger'>{mailError}</p>
                            </Animated>
                            
                        </div>
                        <div className="col-md-6 col-12">
                            <label for="Contact" className="form-label labelName">Contact</label>
                            <input type="text" className="form-control text-white" id="Contact"  onChange={(e)=>setContact(e.target.value)} value={contact}/>
                            <Animated animationIn='animate__shakeX' isVisible={contactAnime}>
                                <p className='text-danger'>{contactError}</p>
                            </Animated>
                            
                        </div>
                        <div className="col-md-6 col-4">
                            <label for="inputCity" className="form-label labelName">City</label>
                            <input type="text" className="form-control text-white" id="inputCity" onChange={(e)=>setCity(e.target.value)} value={city}/>
                            <Animated animationIn='animate__shakeX' isVisible={cityAnime}>
                                <p className='text-danger'>{cityError}</p>
                            </Animated>
                            
                        </div>
                        <div className="col-md-4 col-4">
                            <label for="inputState" className="form-label labelName">Language</label>
                            <select defaultValue={'DEFAULT'} id="inputState" className="form-select text-white" onChange={(e)=>setLanguage(e.target.value)} value={language} >
                                <option className="text-dark">Choose...</option>
                                <option className="text-dark">English</option>
                                <option className="text-dark">Tamil</option>
                            </select>
                            <Animated animationIn='animate__shakeX' isVisible={languageAnime}>
                                <p className='text-danger'>{languageError}</p>
                            </Animated>
                            
                        </div>

                        <div className="col-md-2 col-4">
                            <label for="inputState" className="form-label labelName">Batch</label>
                            <select defaultValue={'DEFAULT'} id="inputState" className="form-select text-white" onChange={(e)=>setBatch(e.target.value)} value={batch}>
                                <option className="text-dark">Choose...</option>
                                <option className="text-dark">Week-End</option>
                                <option className="text-dark" disabled>Week-Days</option>
                                <option className="text-dark" disabled>Offline</option>
                               
                            </select>
                           <Animated animationIn='animate__shakeX' isVisible={batchAnime}>
                                <p className='text-danger'>{batchError}</p>
                           </Animated>  
                            
                        </div>
                          <div className="BookButton">
                            <button onClick={onSubmitForm} type="submit" className="btn customBookButton px-4">Book Now!</button>
                        </div>  
                    </form>


                    {/* Modal */}
               <div className="modal">
                    <Modal show={modalOpen} onHide={onModalHide}>

                        <Modal.Header closeButton>
                            <i className="fas fa-check fa-lg pe-3 confirmIcon"></i>
                            <Modal.Title className="moddalHeader">Booking Confirmation</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        
                        <div className="modalBody">
                            <p className="text-secondary">Hello, <strong>{name}</strong> verify your booking.</p>
                            <p className="d-flex ">Mail-id : <p className="text-primary"> {mail}</p></p>
                            <p className="d-flex">Contact : <p className="text-primary"> {contact}</p></p>
                            <div className="d-flex flex-wrap justify-content-between">
                                <p className="d-flex justify-content-between ">Language : <p className="text-primary" > {language}</p></p>
                                <p className="d-flex justify-content-between ">Batch : <p className="text-primary"> {batch}</p></p>
                            </div>
                            <p className="confirmation text-dark">Thank You! We have received your booking details .</p>
                            <p className="confirmation text-dark">Team JAEGER Will hit you soon ! </p>
                        </div>
                           
                        </Modal.Body>

                            <Modal.Footer>
                                <div className="d-flex justify-content-center">
                                    <button className="m-2 btn btn-secondary closeButton"  onClick={onModalHide}>
                                        Close
                                    </button>
                                </div>
                            </Modal.Footer>

                    </Modal>
                </div>


        
    </React.Fragment>
  )
}
