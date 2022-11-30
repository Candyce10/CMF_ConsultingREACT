import React from 'react'
import emailjs from '@emailjs/browser';


function Affiliates() {
    
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
                            <a class="nav-link" href="/servicesandworkshops">Services & Workshops</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" href="/team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/testimonials">Testimonials</a>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" href="/affiliates">Affiliates</a>
                        </li>   
                    </ul>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3">Contact</a>

                </div>
            </div>
        </nav>
        <div class=" col-xxl-12 px-4 py-5">
            <div class="row align-items-center bg-l g-5 py-5">

                <div class="col-lg-10  col-sm-10">
                    <h1 class="display-5 fw-bold lh-1 mb-3 ">Affiliates Program</h1>
                    <p class="lead fs-4">Want to earn money? Help your clients by helping us!</p>
                    <p class="lead fs-5">We have a really great affiliate/referral program. Please sign up and we will have somebody contact you shortly!</p>
                </div>
            </div>
        </div>
      
    

        <div class="container col-lg-5 col-sm-8 mt-0 mb-5" style={{"border-radius": "5px", "background-color":"#f2f2f2", "padding": "20px"}}>
            <form onSubmit={sendEmail}>
                <h3>Sign Up Form</h3>
                <label for="fname">First fname</label>
                <input type="text" id="fname" name="firstname" placeholder="First fname" required/>

                <label for="lname">Last fname</label>
                <input type="text" id="lname" name="lastname" placeholder="Last fname" required/>
                <label for="email">E-Mail</label>
                <input type="email" id="email" name="email" placeholder="E-Mail Address" required/>
                <label for="contact">Contact No.</label>
                <input type="text" id="contact" name="contact" placeholder="(123) 456-7890" required/>
                <label for="profession">Profession</label>
                <input type="text" id="profession" name="profession" placeholder="Job Title" />
                 <div class="message">
                        <div class="success" id="success">Your Inquiry Has Successfully Sent!</div>
                        <div class="danger" id="danger">Fields Can't be Empty!</div>
                    </div>
                <button type="submit" class="btn btn-brand" onClick={message} >Send</button>
            
            </form>
        </div>

        <section class="container-fluid bg-light">
            <div class="row text-center">
                <div class="col-md-12">
                <div id="myCarousel2" class="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <p class="lead font-italic mx-4 mx-md-5">
                        "I have had the pleasure of working with Rob Goldstein and RG Consulting for many years.  Throughout that time, I have referred numerous clients to Rob and have experienced nothing but phenomenal results.  Rob is professional, empathetic, and highly experienced.  I will continue to refer clients and friends to Rob and RG Consulting for years to come.   "
                        </p>
                        
                        <p class="text-muted mb-0">- A. G.</p>
                    </div>

                    <div class="carousel-item">
                        <p class="lead font-italic mx-4 mx-md-5">
                        "I just wanted to thank you so much for the services you provided to my clients.  You have saved both of them from bankruptcy through your efforts in securing loans during these dark and desperate times.  Your dedication and tenacity is second to none. I look forward to working with you in the future and with other clients whom are in need of your services."
                        </p>
                        
                        <p class="text-muted mb-0">- C. J. M.</p>
                    </div>

                    </div>
                    <div class=" d-flex justify-content-center">
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
      
    </div>
  )
}

export default Affiliates
