import React from 'react'
import { useEffect } from 'react'

function Team() {
  
  useEffect(() => {
    document.title = 'Team - CMF Consultants';
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
        <section id="team">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="intro">
                            <h1>Meet the Team</h1> <hr class="divider text-center justify-content-center"></hr>
                            <p class="mx-auto  fs-4 mt-3">Check out our talented and amazing team behind our services! </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center team-member-container">
                    <div class="col-lg-3 col-sm-3">
                        <div class="team-member">
                            <div class="image">
                                <img src="https://images.squarespace-cdn.com/content/v1/5f43f120e7d66a0be3d78d98/1601487584428-ZAXRT5NI5RDCGQLGUV9H/Rob+G.png?format=750w" alt=""/>
                                <div class="overlay"></div>
                            </div>

                            <h5>Rob Goldstein</h5>
                            <p class="mt-0">Managing Partner</p>
                        
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-12 text-center col-sm-3">
                    <p>
                        <a class="btn btn-brand " data-bs-toggle="collapse" href="#multiCollapse1" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Bio
                        </a>
                               
                    </p>
                    <div class="collapse" id="multiCollapse1">
                        <div class="card card-body mb-5">
                        After 30+ years in my career, I’m often asked, “in three words, what do you do?” To sum up, I specialize in FINANCIAL CRISIS MANAGEMENT. In the mid 80s, I spent a few years going into large businesses to work on “turnarounds”. 
                        This included sales increases, debt restructuring, management restructure, sell off unneeded assets, raising money, etc. When I started my own practice, I found myself helping many individuals in very rough situations. Although I am not a lawyer, I am educated in bankruptcy law and the bankruptcy system to help clients, I utilize this experience to help in all situations.
                        <br/>
                        <br/>
                        Over the years, I have found that my unique set of skills were desperately needed, the most prime examples are: 
                        loan modifications, debt consolidation and credit restoration. I have also negotiated loans for people who were in financial trouble, based on assets, or selling off assets, also known as asset disposition.
                        <br/>
                        <br/>
                        Loan modifications aren’t just for mortgages, but that is a primary area. Every client that I helped to get a loan 
                        modification achieved great results. I find that banks make more mistakes than clients do, and often I fix problems caused by the banks. I have even reversed wrongful foreclosures, another example of loan modifications can be for equipment or business loans, and even SBA loans can be negotiated.
                        <br/>
                        <br/>
                        Negotiating debt is generally thought of as just credit cards, and while credit cards are the primary source of debt. 
                        I also work on judgments, medical debt, business vendor debt; anything where money is owed. On tax debt, I work with a qualified CPA and enrolled agent.
                        <br/>
                        <br/>
                        I had a client who was in the workman’s comp system for 19 years, and both the insurance attorney, and her 
                        attorney both claimed they make more money by NOT settling. After I stepped in, in less than a year, I achieved 
                        an award of $300,000.
                        <br/>
                        <br/>
                        I had another client, she and her husband were both navy vets from the Vietnam war. He died after a long battle 
                        with Agent Orange, and she was denied her numerous claims with the VA. I stepped in, her claim was approved, 
                        and (to this day) we are negotiating a settlement.
                        <br/>
                        <br/>
                        A large part of my practice has also come from those who have been victimized by elder fraud, identity theft, 
                        scams, bureaucratic red tape, and solving estate/ trust issues. I have a relative that I care for, who was victimized
                        in a scam, and was losing her estate. I stepped in, turned the case around, and helped her make almost $1.5 mil. 
                        <br/>
                        <br/>
                        I once was asked to assist an FBI agent who was on an old mortgage on a home, stemming from a divorce, and 
                        it was keeping her from a promotion. I got her released from the debt completely, and she was able to receive that huge promotion. 
                        <br/>
                        <br/>
                        Contrary to popular belief, student loans and time shares may also be negotiated. In many cases, there have been 
                        a lot of student loans that were settled, and even forgiven. There are many types of student loans, so it is wise to 
                        review which may be eligible. Timeshare returns are also a unique part of our services. Whether they were a bad 
                        investment or no longer wanted, I can always successfully find a way out.
                        <br/>
                        <br/>
                        Having written two books on debt & credit, I also host workshops teaching people how to understand the credit 
                        system and improve their FICO scores.
                        </div>
                    </div>
                        
                </div>
                <div class="row justify-content-center team-member-container mt-5">
                    
                    <div class="col-lg-2 col-sm-3 border rounded m-3">
                        <div class="team-member">
                            {/* <div class="image">
                                <img src="https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1602201459458-2HFNJRLKR5GJDZZT9HJ8/corporate+business+headshots+los+angeles_Danielle+Spires.jpg" alt=""/>
                                <div class="overlay"></div>
                            </div> */}

                            <h5>Irv</h5>
                            <p>Partner</p>
                            {/* <div class="col-lg-12 col-sm-3">
                                <p>
                                    <a class="btn btn-success " data-bs-toggle="collapse" href="#multiCollapse2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Bio
                                    </a>
                                </p>
                                <div class="collapse" id="multiCollapse2">
                                    <div class="card card-body  mb-5">
                                    bio goes here
                                    </div>
                                </div>
                        
                            </div>  */}
                        </div>
                        
                    </div>
                       
                    
                    <div class="col-lg-2 col-sm-3 border rounded m-3">
                        <div class="team-member">
                            {/* <div class="image">
                                <img src="https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1602201459458-2HFNJRLKR5GJDZZT9HJ8/corporate+business+headshots+los+angeles_Danielle+Spires.jpg" alt=""/>
                                <div class="overlay"></div>
                            </div> */}

                            <h5>Monique</h5>
                            <p>General Manager</p>
                            {/* <div class="col-lg-12 col-sm-3">
                                <p>
                                    <a class="btn btn-success " data-bs-toggle="collapse" href="#multiCollapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Bio
                                    </a>
                                </p>
                                <div class="collapse" id="multiCollapse3">
                                    <div class="card card-body  mb-5">
                                    bio goes here
                                    </div>
                                </div>
                            
                            </div>  */}
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-3 border rounded m-3">
                        <div class="team-member">
                            {/* <div class="image">
                                <img src="https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1602201459458-2HFNJRLKR5GJDZZT9HJ8/corporate+business+headshots+los+angeles_Danielle+Spires.jpg" alt=""/>
                                <div class="overlay"></div>
                            </div> */}

                            <h5>Lisa</h5>
                            <p>Administrator</p>
                            {/* <div class="col-lg-12 col-sm-3">
                                <p>
                                    <a class="btn btn-success " data-bs-toggle="collapse" href="#multiCollapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Bio
                                    </a>
                                </p>
                                <div class="collapse" id="multiCollapse4">
                                    <div class="card card-body  mb-5">
                                    bio goes here
                                    </div>
                                </div>
                            </div>  */}
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-3 border rounded m-3">
                        <div class="team-member">
                            {/* <div class="image">
                                <img src="https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1602201459458-2HFNJRLKR5GJDZZT9HJ8/corporate+business+headshots+los+angeles_Danielle+Spires.jpg" alt=""/>
                                <div class="overlay"></div>
                            </div> */}

                            <h5>Alex</h5>
                            <p>Media</p>
                            {/* <div class="col-lg-12 col-sm-3">
                                <p>
                                    <a class="btn btn-success " data-bs-toggle="collapse" href="#multiCollapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Bio
                                    </a>
                                </p>
                                <div class="collapse" id="multiCollapse4">
                                    <div class="card card-body  mb-5">
                                    bio goes here
                                    </div>
                                </div>
                            </div>  */}
                        </div>
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

export default Team
