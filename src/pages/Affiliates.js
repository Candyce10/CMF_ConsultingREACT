import React from 'react'

function Affiliates() {
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
                    <a href="/application" class="btn btn-brand ms-lg-3">Apply</a>

                </div>
            </div>
        </nav>
        <div class=" col-xxl-12 px-4 py-5">
            <div class="row align-items-center bg-l g-5 py-5">

                <div class="col-lg-10  col-sm-10">
                    <h1 class="display-5 fw-bold lh-1 mb-3 ">Affiliates Program</h1>
                    <p class="lead fs-4">Want to earn money? Help your clients by helping us!</p>
                    <p class="lead fs-5">We have a really great affiliate/referral program. Please sign up and we will have somebody contact you shorty!</p>
                </div>
            </div>
        </div>
      
    

        <div class="container col-lg-5 col-sm-8 mt-0 mb-5" style={{"border-radius": "5px", "background-color":"#f2f2f2", "padding": "20px"}}>
            <form action="/action_page.php">
                <h3>Sign Up Form</h3>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="First Name"/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Last Name"/>
                <label for="email">E-Mail</label>
                <input type="text" id="email" name="email" placeholder="E-Mail Address"/>
                <label for="contact">Contact No.</label>
                <input type="text" id="contact" name="contact" placeholder="(123) 456-7890"/>
                <label for="email">Profession</label>
                <input type="text" id="Profession" name="Profession" placeholder="Job Title"/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default Affiliates
