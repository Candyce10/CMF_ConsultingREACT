import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function Home() {



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

        <div id="carouselExampleIndicators" class="carousel slide mainSlide" data-bs-ride="true">
            <div class="carousel-inner d-block">
                <div class="carousel-item  active">
                <div class="slide slide1 mainSlide "> 
                    <div class="row">
                    <div class="col-12 text-center text-white">
                        <h6 class="text-white text-uppercase">"Helping minorities and businesses reach their funding goals"</h6>
                        <img class="mt-4 mb-3" style={{"width":"150px", "height": "auto"}} src="https://i.imgur.com/5hGMabR.png"/>
                        <h1 class="display-4 mb-4">COMMERCIAL & MINORITY<br />FUNDING CONSULTANTS</h1>
                        <a href="/services-and-workshops" class="btn btn-brand">Get Started</a>
                    </div>
                    </div>
                </div>
                </div>
                <div class="carousel-item  ">
                <div class="slide slide2 mainSlide p-4">
                    <div class="row">
                        <div class="col-12 text-center text-white">
                            <h6 class="text-white text-uppercase">We provide strategies for all types of challenging funding options</h6>
                            <h1 class="display-4 mb-4">MANAGEMENT CONSULTING <br />&<br/> BUSINESS TURNAROUND</h1>
                            <a href="/services-and-workshops" class="btn btn-brand">Get Started</a>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <section id="about">
            <div class="container">
                <div class="row justify-content-center ">
                    <div class="row ">
                        <div class="col-12 ">
                            <div class="intro ">
                                <h1>About Us</h1>
                                <p class="mx-auto fs-5 mb-3">Commercial and Minority Funding Consultants is a professional team that strives to assist women, minorities and businesses with reaching their funding goals. We are committed to assisting businesses with full lifecycle development, from initial startup through growth and development stages, with restructuring if necessary. We have the knowledge and experience to grow your company and help you thrive!  </p>
                                <p class="mx-auto fw-semibold mb-5 fs-5">We'll shop for loans & grants that suit your needs! </p>
                                
                            

                                <hr class="divider mb-5 text-center justify-content-center"></hr>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 py-5">
                        <div class="row">
                        
                            <div class="col-12 ">
                                <div class="info-box about-sec">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" style={{"width": "60px"}} alt="green checkmark"/>
                                    <div class="ms-4">
                                        <h5>Helping People Get into and Start a Business</h5>
                                        <p>
                                            Have you decided to start your own business but are not sure where to financially begin?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="info-box">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" style={{"width": "60px"}} alt="green checkmark"/>
                                    <div class="ms-4">
                                        <h5>Loans and Grants for Women & Minorities</h5>
                                        <p>
                                            There are so many new programs available to help women & minorites with grants and low interest loans, more than ever!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="info-box">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" style={{"width": "60px"}} alt="green checkmark"/>
                                    <div class="ms-4">
                                        <h5>Free Workshops to All Minority Groups</h5>
                                        <p>
                                            We offer in-person or video workshops to help guide you on achieving your business goals!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="/services-and-workshops" class="icon-link  align-items-center  text-center fs-5 text-decoration-none">
                            Learn More
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 mx-4">
                        <img class="about-img" src="https://www.hubspot.com/hubfs/Consultant%20using%20fast%20tips%20to%20win%20consulting%20clients.jpg" alt=""/>
                        <div class="green"></div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section id="milestone">
            <div class="container">
                <div class="row text-center justify-content-center gy-4">
                    <div class="col-lg-12 col-sm-6">
                        <h6 class="fs-4 fw-semibold text-white">We are accepting application processing for minority certification to get an SBA (or other) loans & grants!</h6>
                    </div>
                
                </div>
            </div>
        </section>

        <section class="text-center ">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="intro text-center ">
                            <h1 class="text-center ">Our Services</h1>
                            <p class="mx-auto fs-5">Every business needs a plan to set goals and define their vision. CMF Consultants can help your strategy so you can reap the benefits for years to come. We provide exceptional customer service to small businesses seeking the resources for growth!</p>
                            <hr class="divider text-center justify-content-center"></hr>
                        </div>
                    </div>
                </div>
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="service">
                            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-1 bg-gradient fs-4 rounded-3" style={{ "background-color": "green"}}>
                                <span class="material-symbols-outlined " style={{"font-size": "36px", "color": "white"}}>
                                psychology
                                </span>
                            </div>
                            <h5 class="mt-2">Comprehensive Consultation</h5>
                            <p>
                                We will begin with a comprehensive consultation and will learn about the nuts and bolts of your business & help with business structure.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service">
                            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-1  bg-gradient fs-4 rounded-3" style={{"background-color": "green"}}>
                                <span class="material-symbols-outlined " style={{"font-size": "36px", "color": "white"}}>
                                    edit
                                </span>
                            </div>
                            <h5 class="mt-2">Business Plan</h5>
                            <p>
                                Business plan consulting includes learning about your business objectives and goals and writing a plan for what you would like to achieve.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service">
                            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-1  bg-gradient fs-4 rounded-3" style={{"background-color": "green"}}>
                                <span class="material-symbols-outlined " style={{"font-size": "36px", "color": "white"}}>
                                    attach_money
                                </span>
                            </div>
                            <h5 class="mt-2">Funding Solutions</h5>
                            <p>
                                Partner your business with traditional and non-traditional funding sources including grant research & contracting opportunities.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service">
                            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-1 bg-gradient fs-4 rounded-3" style={{"background-color": "green"}}>
                                <span class="material-symbols-outlined " style={{"font-size": "36px", "color": "white"}}>
                                    feed
                                </span>
                            </div>
                            <h5 class="mt-2">Business Certification</h5>
                            <p>
                                Assist with minority business certifications including Minority (MBE), Disadvantaged (DBE), & Women (WBE) Business Enterprises.
                            </p>
                        </div>
                    </div>
                
                    <div class="col-lg-4 col-md-6">
                        <div class="service h-100">
                            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-1 bg-gradient fs-4 rounded-3" style={{"background-color": "green"}}>
                                <span class="material-symbols-outlined " style={{"font-size": "36px", "color": "white"}}>
                                    handshake
                                </span>
                            </div>
                            <h5 class="mt-2">Licensing & Permits</h5>
                            <p>
                                We register your business properly and ensure that all the paperwork for your business licensing & permits are filed.
                            </p>
                        </div>
                    </div>
                </div>
                <a href="/services-and-workshops" class="icon-link d-inline-flex align-items-center mt-3 fs-5 text-decoration-none">
                        Learn More <span class="material-symbols-outlined">
                chevron_right
                </span>
                </a>

            </div>
        </section>

      


        <section class="mt-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="intro">
                            <h1>Sign Up Today</h1>
                            <p class="mx-auto fs-5 mb-3">Take your existing business to new levels for an exciting and profitable future!</p>
                            <hr class="divider text-center justify-content-center"></hr>

                        </div>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-4 p-3">  <a href ="/the-debt-lifeline" class="blog-link" >
                        <article class="pill card h-100">
                            <img src="https://www.pngmart.com/files/19/Lifeline-PNG-Photos.png" class="card-img-top h-100" alt=""/>
                           
                            <div class="content card-body">
                               <h5>The Debt Lifeline</h5>
                                <p>Watch now to get advice, direction, and support to help you get out of your debt & financial crisis!</p>
                            </div>
                        </article></a>
                    </div>

                    <div class="col-md-4 p-3">  <Link to="/services-and-workshops#workshops" class="blog-link" >
                        <article class="pill card h-100">
                            <img src="https://monkeypuzzletraining.co.uk/images/Blog-images/article-images/xl-critical-thinking.jpg" class="card-img-top h-100" alt=""/>
                           
                            <div class="content card-body">
                               <h5>Workshops</h5>
                                <p>Check out our virtual and in-person workshops to discover how to start & promote a business!</p>
                            </div>
                        </article></Link>
                    </div>

              
                    <div class="col-md-4 p-3"><a href="/affiliates" class="blog-link">
                        <article class="pill card h-100">
                            <img src="https://iristech.co/wp-content/uploads/2016/05/affiliate.png" class="card-img-top h-100 "  alt=""/>
                            <div class="content card-body">
                               <h5>Affiliates</h5>
                                <p>Grow your business with our affiliate program. Make money by referring other people!</p>
                            </div>
                        </article></a>
                    </div>
                </div>
            </div>
        </section>
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

export default Home
