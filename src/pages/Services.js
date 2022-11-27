import React from 'react'

function Services() {
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
        
        <div class=" serv-header col-xxl-12 px-4 py-5">
            <div class="row align-items-center  g-5 py-5">

                <div class="col-lg-10  col-sm-10">
                    <h1 class="display-5 fw-bold lh-1 mb-3 serv-p">Services & Workshops</h1>
                    <p class="lead serv-p fs-5  fs-4">Our dedicated team will work with your business to understand and assist with achieving your goals. CMF Consultants is a one-stop-shop for business consulting and finacial needs. Get started today!
                  
                    
                    </p>
                    <a href="#workshops" class="btn btn-brand ms-lg-3">Jump to Workshops</a>
                </div>
            </div>
        </div>
      
        <div class="container-fluid ">    
            <div class="row">
                <div class="col-md-7 p-5">
                    <h2 class=" fw-normal lh-1 ">Our Services </h2>
                    <hr/>
                    <p class="fs-5 lh-1 text-capitalize">Business Management Consulting  (Main Street Businesses and up to Middle Market Companies)</p>
                    <p class="fs-5 lh-1 text-capitalize">Main Street and Early-Stage Venture Business Plans</p>
                    <p class="fs-5 lh-1 text-capitalize">Venture Capital Consulting (Both Debt and Equity)</p>
                    <p class="fs-5 lh-1 text-capitalize">Business Turnarounds</p>
                    <p class="fs-5 lh-1 text-capitalize">Asset Based Lenders (On Real Estate, A/R, Inventory, Equipment)</p>
                    <p class="fs-5 lh-1 text-capitalize">SBA Lenders (7A, 504 & CDC)</p>
                    <p class="fs-5 lh-1 text-capitalize">Commercial Real Estate Loans (All Area’s Covered, Rehab, Bridge, Apartments, Retail)</p>
                    <p class="fs-5 lh-1 text-capitalize">Specialty Finance Areas (Cannabis, Gas Stations, Solar Areas & Trade Finance)</p>
                    <p class="fs-5 lh-1 text-capitalize">Hard Money Loans</p>
                    <p class="fs-5 lh-1 text-capitalize">Asset Liquidation and Disposition</p>
                    <p class="fs-5 lh-1 text-capitalize">Business Brokerage (For Buyers and Sellers, Either Direct or By Referral)</p>
                    <p class="fs-5 lh-1 text-capitalize">M&A (Direct or By Referral)</p>
                    <p class="fs-5 lh-1 text-capitalize">Loans and grants for start-ups</p>
                    <p class="fs-5 lh-1 text-capitalize">Disaster Loans</p>
                    <p class="fs-5 lh-1 text-capitalize">Short term lines of credit</p>
                    <p class="fs-5 lh-1 text-capitalize">Certification for women & minority loans & grants</p>
                    <p class="fs-5 lh-1 text-capitalize">Packaging for SBA loans & grants</p>
                    <p class="fs-5 text-capitalize lh-1">Business plans & grant writing</p>
                    <p id="workshops" class="fs-5 text-capitalize lh-1">& more!</p>
                  
                   
                </div>
                <div class="col-md-5 mb-5 align-items-center" style={{"margin-top":"100px"}}>
                    <img class="service-img " src="https://blog.hubspot.com/hubfs/how-to-become-a-consultant.jpg"/>
                    <div class="green2"></div>
                </div>
            </div>

            <div  class="row mt-2">
                <div class="col-md-7 order-md-2 text-end p-5">
                    <h2 class="fw-normal lh-1  mb-4">Join a Workshop</h2>
                    <hr/>

                    <p class="fs-5 lh-1 text-capitalize">Pivot your career by starting a business</p>
                    <p class="fs-5 lh-1 text-capitalize">What you need to start a business</p>
                    <p class="fs-5 lh-1 text-capitalize">Support workshop for how to start a business</p>
                    <p class="fs-5 lh-1 text-capitalize">The psychology and mind you will need to start up a business</p>
                    <p class="fs-5 lh-1 text-capitalize">How to promote your business</p>
                    <p class="fs-5 lh-1 text-capitalize">How to pitch investors</p>
        

                </div>
                <div class="col-md-5 order-md-1 mb-5">
                    <img src="https://www.redhat.com/cms/managed-files/styles/max_size/s3/RH-consulting-hero-0722-915x768.jpg?itok=jQu6uljp"/>

                </div>
            </div>
            

            
            <div class="row mt-2 justify-content-center bg-light">
                <div class="col-md-7  text-center p-5">
                    <h2 class="fw-normal lh-1  mb-4">Ready to get started?</h2>
                    <hr/>

                    <p class="fs-5 lh-1 ">We're here to help! Contact us today to see what we can do for you and your business!</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3">Contact</a>
                    <a href="/application" class="btn btn-brand ms-lg-3">Apply</a>
        

                </div>
                
            </div>
        

        </div>

    </div>
  )
}

export default Services
