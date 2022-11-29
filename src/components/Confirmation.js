import React from 'react'

function Confirmation(props) {

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
                    <h1 class="display-5 fw-bold lh-1 mb-3 ">Thank you for contacting us!</h1>
                    <p class="lead fs-4">We will get in touch soon.</p>
                    <a href="/" class="btn btn-brand ms-lg-3">Home</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Confirmation
