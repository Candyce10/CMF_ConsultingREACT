import React from 'react'

function ConfirmationSP() {

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
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3 my-2">Contact</a>

              </div>
          </div>
        </nav>
        <div class=" col-xxl-12 px-4 py-5">
            <div class="row align-items-center bg-l g-5 py-5">

                <div class="col-lg-10  col-sm-10">
                    <h1 class="display-5 fw-bold lh-1 mb-3 ">Thank you for contacting us!</h1>
                    <p class="lead fs-4">We will get in touch soon.</p>
                    <a href="/" class="btn btn-brand ms-lg-3">Home</a>
                </div>
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

export default ConfirmationSP
