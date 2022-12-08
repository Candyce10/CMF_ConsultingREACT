import React, {useEffect} from 'react'

function YouTubeSP() {
    useEffect(() => {
        document.title = 'The Debt Lifeline - CMF Consultants';
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

        <div class=" col-xxl-12 px-4 py-5 lifeline ">
            <div class="row align-items-center g-5 py-5">

                <div class="col-lg-11  col-sm-11">
                    <h1 class="display-5 fw-bold lh-1 mb-3 serv-p">The Debt Lifeline</h1>
                    <p class="lead  fs-5 lh-1 fs-4 serv-p">Money & debt problems? Get a little help from your friends over at The Debt Lifeline! Here you will receive free information, advice, direction, and support to help you get out of your debt and financial crisis. Listen in to hear different success stories and scenarios that may be similar to your situation.
                    </p>
                    <br/>
   
                    <p class="lead  fs-5 lh-1 fs-4 serv-p"> Subscribe to the <a href="https://www.youtube.com/channel/UC9UwBz7OSML0Lcsadczz71w" style={{"color":"var(--brand)",  "text-shadow": "1px 1px 2px black"}}  target="_blank">WWDBTV.com Channel</a> on YouTube to see more episodes of The Debt Lifeline!
                    </p>
                    <br/>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <h2 class=" fw-normal lh-1 ">Past Episodes </h2>
                    <hr/>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            
                <div class="col">
                    <div class="card h-100">
                    <iframe width="auto" height="215" src="https://www.youtube.com/embed/G29Jy9B9WaE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div class="card-body">
                        <h5 class="card-title">Episode 4</h5>
                        <p class="card-text">Affiliate Program, Student Loans, Equity vs Debt (loans, grants), CMF, Veterans programs</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <iframe width="auto" height="215" src="https://www.youtube.com/embed/UVu6-DOmMwI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div class="card-body">
                        <h5 class="card-title">Episode 3</h5>
                        <p class="card-text">Deferments, Bankruptcies, Student Loans, CMF, Affiliate Program</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <iframe width="auto" height="215" src="https://www.youtube.com/embed/3fD-fqjgQgY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div class="card-body">
                        <h5 class="card-title">Episode 2</h5>
                        <p class="card-text">Credit, Workshops, Minority Programs, Financial Crisis, EIDL Loans</p>
                    </div>
                    </div>
                </div> 
            </div>
            <div class="text-center mb-5">
                <a href="https://www.youtube.com/watch?v=wsn1hl8gsSA&list=PLsONwJVzM2gUkFcyQntDvyOiE9JD5JJPB" target="_blank" class="icon-link d-inline-flex align-items-center text-center mt-3 fs-5 text-decoration-none">
                        More Episodes <span class="material-symbols-outlined">
                chevron_right
                </span>
                </a>
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

export default YouTubeSP
