import React, {useEffect} from 'react'


function TestimonialsSP() {
    useEffect(() => {
        document.title = 'Testimonials - CMF Consultants';
      }, []);
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
                            <a class="nav-link" href="/es">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/es/services-and-workshops">Servicios y Talleres</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" href="/es/team">Equipo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/es/testimonials">Testimonios</a>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" href="/es/the-debt-lifeline">The Debt Lifeline</a>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" href="/affiliates">Afiliados</a>
                        </li>   
                    </ul>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3 my-2">Contacto</a>

                </div>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                        <h1 class="mt-5">Testimonials</h1>   <hr class="divider text-center justify-content-center"></hr>
                        <p class="mx-auto fs-4 mt-3 ">See what our customers are saying about us!</p>
                    </div>
                </div>
            </div>
        </div>    
        <div id="reviews" class="container-fluid">
            <div id="myCarousel" class="carousel slide carousel-dark " data-bs-ride="carousel">
                
                <div class="carousel-inner py-4 " >
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row text-center justify-content-center ">
                                <div class="col-lg-3 d-none d-lg-block review card shadow">
                                    
                                    <div class="user-content">
                                        <h3>"I was in horrible debt and about to lose my company. If it was not for you and your team; I would have had to close my company."</h3>
                                        <h5 class="mb-0">- T. H.</h5>
                                        <h5 class="mt-0 fw-light fst-italic">Florida</h5>
                                    </div>
                                    <div class="stars">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                </div>

                                <div class="col-lg-3 review card shadow">
                                    <div class="user-content">
                                        <h3>"After attempting for two years to try to secure an EIDL loan from the SBA, I was introduced to CMF consulting. In less than eight weeks CMF was able to secure my loan in order for me to continue my business."</h3>
                                        <h5 class="mb-0">- I. J.</h5>
                                        <h5 class="mt-0 fw-light fst-italic">Ohio</h5>

                                    </div>
                                    <div class="stars">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                </div>

                                <div class="col-lg-3 review card shadow">
                                    <div class="user-content">
                                        <h3>"I was in the middle of a hot mess with SBA, in trying to receive a EDIL from them. I got rejected after several attempts, but CMF, in a matter of weeks, cleared this up and got me approved. It literally saved me, my comany!"</h3>
                                        <h5 class="mb-0">- M. C.</h5>
                                        <h5 class="mt-0 fw-light fst-italic">Las Vegas, NV</h5>
                                    </div>
                                    <div class="stars">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-3 review card shadow">
                                    <div class="user-content">
                                        <h3>"CMF Consultants are masters when it comes to resolving painful financial situations. I really appreciate their tenacity and skill working with credit card companies, lenders, and the SBA. They've won for me with all 3!"</h3>
                                        <h5 class="mb-0">- B. F.</h5>
                                        <h5 class="mt-0 fw-light fst-italic">Texas</h5>

                                    </div>
                                    <div class="stars">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                </div>

                                <div class="col-lg-3  review card shadow">
                                    <div class="user-content">
                                        <h3>"CMF Consultants are pitbulls when they take on a project. They came through and got me funded when no others over 7 years could. They are really great to work with."</h3>
                                        <h5 class="mb-0">- D. B.</h5>
                                        <h5 class="mt-0 fw-light fst-italic">Florida</h5>
                                    </div>
                                    <div class="stars">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                </div>

                                <div class="col-lg-3 review card shadow">
                                    <div class="user-content">
                                        <h3>"Your persistency and ingenuity, got me the funding I needed to save my business. Thank you!"</h3>
                                        <h5 class="mb-0">- F. M.</h5>
                                        <h5 class="mt-0 fw-light fst-italic">New Mexico</h5>

                                    </div>
                                    <div class="stars">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 review card shadow">
                                    <div class="user-content">
                                        <h3>"Thanks so much for staying on top of the SBA. You got my loan funded despite all the red tape. That money saved me big time"</h3>
                                        <h5 class="mb-0">- J. H.</h5>
                                        <h5 class="mt-0 fw-light fst-italic">Arizona</h5>
                                    </div>
                                    <div class="stars">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                </div>

                            <div class="col-lg-4  review card shadow">
                                <div class="user-content">
                                
                                <h3>"After referred by a very trusted associate to handle my SBA loan, Rob & I are now friends.
                                        Why, after 9 months of required none stop monitoring, enduring mistaken cancellations, changing of many agents, file being lost several times, & fixing again, to have it actually hit the bank account .  Wow, I honestly would have never made it through what Rob does!  Cheers, Rob G! "</h3>
                                        <h5 class="mb-0">- C. C.</h5>
                                        <h5 class="mt-0 fw-light fst-italic">New Jersey</h5>

                                </div>
                                <div class="stars">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="carousel-control-prev " type="button"
                    data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next " type="button"
                    data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="row mt-2 justify-content-center bg-light">
                <div class="col-md-7  text-center p-5">
                    <h2 class="fw-normal lh-1  mb-4">Ready to get started?</h2>
                    <hr/>

                    <p class="fs-5 lh-1 ">We're here to help! Contact us today to see what we can do for you and your business!</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3">Contact</a>
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
                        <h5 class=" mb-4 text-center nv" style={{"color":"rgb(241, 241, 241)"}}>Las Vegas Oficina</h5>
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
                        <h5 class=" mb-4 text-center fl" style={{"color":"rgb(241, 241, 241)"}}>Florida Oficina</h5>
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
            "Ayudar a las minorías y las empresas a alcanzar sus objetivos de financiación."
            </div>
        </footer>
            
        

    </div>
          
          
  )
}

export default TestimonialsSP


