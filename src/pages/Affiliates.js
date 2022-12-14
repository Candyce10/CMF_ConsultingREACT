import React, {useEffect} from 'react'
import emailjs from '@emailjs/browser';


function Affiliates() {
    useEffect(() => {
        document.title = 'Affiliates - CMF Consultants';
      }, []);
    function message(){
        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var contact = document.getElementById('contact');
        var profession = document.getElementById('profession');
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');
    
        if(fname.value === '' || lname.vale === '' || email.value === '' || contact.value === '' || profession.value === ''){
            danger.style.display = 'block';
        }
        else{
            setTimeout(() => {
                fname.value = '';
                lname.value = '';
                email.value = '';
                contact.value = '';
                profession.value = '';
            }, 5000);
    
            success.style.display = 'block';
        }
    
    
        setTimeout(() => {
            danger.style.display = 'none';
            success.style.display = 'none';
        }, 4000);
    
    }



    const sendEmail = e => {
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, "template_0clbarg", e.target, process.env.REACT_APP_PUBLIC_KEY)
    }

  return (
    <div>
        <div class="top-nav" id="home">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <p> <i class='bx bxs-envelope'></i> info@cmfconsultants.net</p>
                    </div>
                    <div class="col-auto social-icons">
                        {/* <a href="#"><i class='bx bxl-facebook'></i></a> */}
                        <a href="https://twitter.com/cmf2022cmf"><i class='bx bxl-twitter'></i></a>
                        <a href="https://www.linkedin.com/in/robert-cmf-consultants-8b15a6250/"><i class='bx bxl-linkedin'></i></a>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div class="container">
                <a class="navbar-brand" href="/">CMF CONSULTANTS<span class="dot">.</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services-and-workshops">Services & Workshops</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" href="/team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/testimonials">Testimonials</a>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" href="/the-debt-lifeline">The Debt Lifeline</a>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" href="/affiliates">Affiliates</a>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" style={{"color":"var(--brand)"}} href="/es">Spanish</a>
                        </li>   
                    </ul>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3 my-2">Contact</a>

                </div>
            </div>
        </nav>
        <div class="serv-header col-xxl-12 px-4 py-5 mb-5">
            <div class="row align-items-center bg-l g-5 py-5">

                <div class="col-lg-11  col-sm-10">
                    <h1 class="display-4 fw-bold lh-1 mb-3 serv-p ">Affiliates Program</h1>
                    <p class="lead fs-2 lh-1 serv-p mb-0">Want to earn money? Help your clients by helping us!</p><br/>
                    <p class="lead fs-2 lh-1 serv-p mb-5">We have a really great affiliate/referral program. Please sign up and we will have somebody contact you shortly!</p><h3 class="fst-italic fw-bold lh-1 mb-3 serv-p ">Programa de Afiliados</h3>
                    <p class="lead lh-1 fs-4 serv-p mb-0 fst-italic">¿Quieres ganar dinero? ¡Ayuda a tus clientes ayudándonos! Tenemos un gran programa de afiliados/referencias. ¡Por favor regístrese y haremos que alguien se comunique con usted en breve!</p>
                  
                </div>
            </div>
        </div>
      


        <div class="container col-lg-5 col-sm-8 mt-0 mb-5" style={{"border-radius": "5px", "background-color":"#f2f2f2", "padding": "20px"}}>
            <form onSubmit={sendEmail}>
                <h3>Sign Up Form</h3>
                <label for="fname">First Name (Primer nombre)</label>
                <input type="text" id="fname" name="firstname"  required/>

                <label for="lname">Last Name (Apellido)</label>
                <input type="text" id="lname" name="lastname"  required/>
                <label for="email">E-Mail (Correo electronico)</label>
                <input type="email" id="email" name="email"  required/>
                <label for="contact">Contact Number (Número de teléfono)</label>
                <input type="text" id="contact" name="contact"  required/>
                <label for="profession">Profession (Profesión)</label>
                <input type="text" id="profession" name="profession"  />
                 <div class="message">
                        <div class="success" id="success">Your Inquiry Has Successfully Sent!</div>
                        <div class="danger" id="danger">Fields Can't be Empty!</div>
                    </div>
                <button type="submit" class="btn btn-brand" onClick={message} >Send (Enviar)</button>
            
            </form>
        </div>

        <section class="container-fluid bg-light" >
            <div class="row text-center" style={{"max-height": "300px"}}>
                <div class="col-md-12">
                <div id="myCarousel2" class="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <p class="lead font-italic mx-4 mx-md-5">
                        "I have had the pleasure of working with CMF Consulting for many years.  Throughout that time, I have referred numerous clients to them and have experienced nothing but phenomenal results.  They professional, empathetic, and highly experienced.  I will continue to refer clients and friends to CMF Consulting for years to come.   "
                        </p>
                        
                        <p class="text-muted mb-0"> A. G.</p>
                    </div>

                    <div class="carousel-item">
                        <p class="lead font-italic mx-4 mx-md-5">
                        "I just wanted to thank you so much for the services you provided to my clients.  You have saved both of them from bankruptcy through your efforts in securing loans during these dark and desperate times.  Your dedication and tenacity is second to none. I look forward to working with you in the future and with other clients whom are in need of your services."
                        </p>
                        
                        <p class="text-muted mb-0"> C. J. M.</p>
                    </div>

                    <div class="carousel-item">
                        <p class="lead font-italic mx-4 mx-md-5">
                        "Whether you are seeking assistance in ( securing funding or resolving debt or …  ) , Rob Goldstein is the man who can get it done right: He is honest, effective, efficient, and uncompromising in his commitment to serving his clients. I highly recommend giving him a call."
                        </p>
                        
                        <p class="text-muted mb-0">- J. H.</p>
                    </div>

                    </div>
                    <div class=" d-flex justify-content-center align-items-end">
                        <button class="carousel-control-prev position-relative" type="button" data-bs-target="#myCarousel2"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next position-relative" type="button" data-bs-target="#myCarousel2"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                </div>
                </div>
            </div>
        </section>
        <div class="container justify-content-center col-lg-12 col-sm-12 my-5 " style={{"max-width": "740px"}}>
           <div class="card  px-4">
                <a href="https://rgoldsteinconsulting.com/"> 
                    <div class="row align-items-center g-0">
                        <div class="col-md-4 ">
                        <img src="https://i.imgur.com/kUwT4KE.png" class="img-fluid rounded-start " alt="..."/>
                        </div>
                        <div class="col-md-8 px-3">
                            <div class="card-body ">
                                <h5 class="card-title">R Goldstein Consulting</h5>
                                <p class="card-text">R Goldstein Consulting is the sister company to CMF Consulting. R Goldstein Consulting has been around for 6  years and counting. The focus is on debt settlement, student loan relief and any fraud or scam.  Rob Goldstein and Co-host Aaron Phillips do the podcast every Monday, called "The Debt Lifeline". You can see all past episodes on The Debt Lifeline Page. Click here for more information.</p>
                            </div>
                        </div>
                    </div> 
                </a>
            </div>
        </div>

        

        <footer>
            <div class="container p-4">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
                        <a href="/"><img style={{"width":"100px", "height": "auto"}} src="https://i.imgur.com/5hGMabR.png"/></a>
                        <p>
                            <i class='bx bxs-envelope mt-2'></i> info@cmfconsultants.net
                        </p>
                        <div class="col-auto social-icons">
                            {/* <a href="#"><i class='bx bxl-facebook'></i></a> */}
                            <a href="https://twitter.com/cmf2022cmf"><i class='bx bxl-twitter'></i></a>
                            <a href="https://www.linkedin.com/in/robert-cmf-consultants-8b15a6250/"><i class='bx bxl-linkedin'></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class=" mb-4 text-center nv" style={{"color":"rgb(241, 241, 241)"}}>Las Vegas Office</h5>
                        <p class="d-flex justify-content-center align-items-center">
                            <i class='bx bxs-phone-call mx-1'></i> (702) 701-2992
                        </p>
                        <p class="d-flex justify-content-center align-items-center text-center">
                            4132 S. Rainbow Rd #200
                            <br/>
                            Las Vegas, NV 89103
                        </p> 
                    </div>
                
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class=" mb-4 text-center fl" style={{"color":"rgb(241, 241, 241)"}}>Florida Office</h5>
                        <p class="d-flex justify-content-center align-items-center">
                            <i class='bx bxs-phone-call mx-1'></i> (786) 200-2080
                        </p>
                        <p class="d-flex justify-content-center text-center">
                            221 W. Hallandale Beach Blvd
                        <br/>
                            Hallandale Beach, FL 33009
                        </p> 
                    
                    </div>
                </div>
            </div>
            <div class="text-center footer p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)", "color":"white"}}>
            "Helping minorites and businesses reach their funding goals."
            </div>
        </footer>
      
    </div>
  )
}

export default Affiliates
