import React from "react";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function Contact() {
    
    let navigate = useNavigate();
    function handleClick(){
        navigate('/contact-confirmation')
    }

    const sendEmail = e => {

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
    }


  return (
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="container-fluid">
                            <div class="row gy-4">
                                <div class="col-lg-4 col-sm-12 bg-cover"
                                    style={{"background-image": "url(https://image.cnbcfm.com/api/v1/image/104107461-GettyImages-534572717.jpg?v=1529473279)", "min-height":"300px"}}>
                                    <div>
                                        
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <form class="p-lg-5 col-12 row g-3" onSubmit={sendEmail} >
                                        <div>
                                            <h1>Get in touch (Ponerse en contacto)</h1>
                                        
                                        <p class="fs-5 fw-semibold">Feel free to contact us and we will get back to you as soon as possible.</p>
                                        <p>No dude en ponerse en contacto con nosotros y nos pondremos en contacto con usted lo antes posible.</p>
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="userName" class="form-label">First name (Primer nombre)</label>
                                            <input type="text" class="form-control" placeholder="Jon" id="userName" name="first_name"
                                                aria-describedby="emailHelp" required/>
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="userName" class="form-label">Last name (Apellido)</label>
                                            <input type="text" class="form-control" placeholder="Doe" id="userName" name="last_name"
                                                aria-describedby="emailHelp" required/>
                                        </div>
                                        <div class="col-12">
                                            <label for="userName" class="form-label">Phone Number (Número de teléfono)</label>
                                            <input type="text" class="form-control" placeholder="(123) 555-1234" id="userName" name="number"
                                                aria-describedby="emailHelp" required/>
                                        </div>
                                        <div class="col-12">
                                            <label for="userName" class="form-label">Email address (Correo electronico)</label>
                                            <input type="email" class="form-control" placeholder="Johndoe@example.com" id="userName" name="email"
                                                aria-describedby="emailHelp" required/>
                                        </div>
                                        <div class="col-12">
                                            <label for="userName" class="form-label">Profession (Profesión)</label>
                                            <input type="text" class="form-control" placeholder="Bakery Owner" id="userName" name="profession"
                                                aria-describedby="emailHelp" required/>
                                        </div>
                                        <div class="col-12">
                                            <label for="exampleInputEmail1" class="form-label">Enter Message (Ingresar mensaje)</label>
                                            <textarea name="message" placeholder="Leave your message here." class="form-control" id="userName"  rows="4" required style={{"resize":"none"}}></textarea>
                                        </div>
                                        <input type="hidden" name="_subject" value="New Contact Submission"></input>
                                        <div class="col-12 mb-5">
                                            <button type="submit" class="btn btn-brand" onClick={handleClick}>Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        
    </div>
  )
}

export default Contact
