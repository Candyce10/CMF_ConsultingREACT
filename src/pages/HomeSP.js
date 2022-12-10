import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function HomeSP() {



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

        <div id="carouselExampleIndicators" class="carousel slide mainSlide" data-bs-ride="true">
            <div class="carousel-inner d-block">
                <div class="carousel-item  active">
                <div class="slide slide1 mainSlide "> 
                    <div class="row">
                    <div class="col-12 text-center text-white">
                        <h6 class="text-white text-uppercase">"Ayudar a las minorías y las empresas a alcanzar sus objetivos de financiación"</h6>
                        <img class="mt-4 mb-3" style={{"width":"150px", "height": "auto"}} src="https://i.imgur.com/5hGMabR.png"/>
                        <h1 class="display-4 mb-4">COMMERCIAL & MINORITY<br />FUNDING CONSULTANTS</h1>
                        <a href="/es/services-and-workshops" class="btn btn-brand">Empezar</a>
                    </div>
                    </div>
                </div>
                </div>
                <div class="carousel-item  ">
                <div class="slide slide2 mainSlide p-4">
                    <div class="row">
                        <div class="col-12 text-center text-white">
                            <h6 class="text-white text-uppercase">Proporcionamos estrategias para todo tipo de opciones de financiamiento desafiantes</h6>
                            <h1 class="display-4 mb-4">CONSULTORÍA DE GESTIÓN<br />&<br/> CAMBIO DE NEGOCIO</h1>
                            <a href="/es/services-and-workshops" class="btn btn-brand">Empezar</a>
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
                                <h1>Sobre Nosotros</h1>
                                <p class="mx-auto fs-5 mb-3">Commercial and Minority Funding Consultants es un equipo profesional que se esfuerza por ayudar a las mujeres, las minorías y las empresas a alcanzar sus objetivos de financiación. Estamos comprometidos a ayudar a las empresas con el desarrollo del ciclo de vida completo, desde la puesta en marcha inicial hasta las etapas de crecimiento y desarrollo, con reestructuración si es necesario. ¡Tenemos el conocimiento y la experiencia para hacer crecer su empresa y ayudarlo a prosperar!  </p>
                                <p class="mx-auto fw-semibold mb-5 fs-5">¡Buscaremos préstamos y subvenciones que se adapten a sus necesidades!</p>
                                
                            

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
                                        <h5>Ayudar a las personas a entrar y comenzar un negocio</h5>
                                        <p>
                                        ¿Ha decidido iniciar su propio negocio pero no está seguro de por dónde empezar financieramente?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="info-box">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" style={{"width": "60px"}} alt="green checkmark"/>
                                    <div class="ms-4">
                                        <h5>Préstamos y subvenciones para mujeres y minorías</h5>
                                        <p>
                                        ¡Hay tantos programas nuevos disponibles para ayudar a mujeres y minorías con subvenciones y préstamos a bajo interés, más que nunca!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="info-box">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" style={{"width": "60px"}} alt="green checkmark"/>
                                    <div class="ms-4">
                                        <h5>Talleres gratuitos para todos los grupos minoritarios</h5>
                                        <p>
                                        ¡Ofrecemos talleres en persona o en video para ayudarlo a guiarlo en el logro de sus objetivos comerciales!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="/es/services-and-workshops" class="icon-link  align-items-center  text-center fs-5 text-decoration-none">
                            Aprende más
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
                        <h6 class="fs-4 fw-semibold text-white">¡Estamos aceptando el procesamiento de solicitudes para la certificación de minorías para obtener préstamos y subvenciones de la SBA (u otros)!</h6>
                    </div>
                
                </div>
            </div>
        </section>

        <section class="text-center ">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="intro text-center ">
                            <h1 class="text-center ">Nuestros Servicios</h1>
                            <p class="mx-auto fs-5">Todo negocio necesita un plan para establecer metas y definir su visión. CMF Consultants puede ayudarlo con su estrategia para que pueda cosechar los beneficios en los años venideros. Brindamos un servicio al cliente excepcional a las pequeñas empresas que buscan los recursos para crecer.</p>
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
                            <h5 class="mt-2">Consulta Integral</h5>
                            <p>
                            Comenzaremos con una consulta integral y aprenderemos sobre los aspectos básicos de su negocio y lo ayudaremos con la estructura comercial.
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
                            <h5 class="mt-2">Plan de negocios</h5>
                            <p>
                            La consultoría del plan de negocios incluye aprender sobre los objetivos y metas de su negocio y escribir un plan para lo que le gustaría lograr.
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
                            <h5 class="mt-2">Soluciones de financiación</h5>
                            <p>
                            Asocie su empresa con fuentes de financiación tradicionales y no tradicionales, incluidas oportunidades de contratación e investigación de subvenciones.
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
                            <h5 class="mt-2">Certificación Empresarial</h5>
                            <p>
                            Ayudar con las certificaciones de empresas minoritarias, incluidas las empresas comerciales de minorías (MBE), desfavorecidas (DBE) y mujeres (WBE).
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
                            <h5 class="mt-2">Licencias y Permisos</h5>
                            <p>
                            Registramos su negocio correctamente y nos aseguramos de que se presente toda la documentación para las licencias y permisos de su negocio.
                            </p>
                        </div>
                    </div>
                </div>
                <a href="/es/services-and-workshops" class="icon-link d-inline-flex align-items-center mt-3 fs-5 text-decoration-none">
                Aprende más<span class="material-symbols-outlined">
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
                            <h1>Regístrate hoy</h1>
                            <p class="mx-auto fs-5 mb-3">¡Lleve su negocio existente a nuevos niveles para un futuro emocionante y rentable!</p>
                            <hr class="divider text-center justify-content-center"></hr>

                        </div>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-4 p-3">  <a href ="/es/the-debt-lifeline" class="blog-link" >
                        <article class="pill card h-100">
                            <img src="https://www.pngmart.com/files/19/Lifeline-PNG-Photos.png" class="card-img-top h-100" alt=""/>
                           
                            <div class="content card-body">
                               <h5>The Debt Lifeline</h5>
                                <p>¡Mire ahora para obtener consejos, dirección y apoyo para ayudarlo a salir de su deuda y crisis financiera!</p>
                            </div>
                        </article></a>
                    </div>

                    <div class="col-md-4 p-3">  <Link to="/es/services-and-workshops#workshops" class="blog-link" >
                        <article class="pill card h-100">
                            <img src="https://monkeypuzzletraining.co.uk/images/Blog-images/article-images/xl-critical-thinking.jpg" class="card-img-top h-100" alt=""/>
                           
                            <div class="content card-body">
                               <h5>Talleres de trabajo</h5>
                                <p>¡Consulte nuestros talleres virtuales y presenciales para descubrir cómo iniciar y promover un negocio!</p>
                            </div>
                        </article></Link>
                    </div>

              
                    <div class="col-md-4 p-3"><a href="/es/affiliates" class="blog-link">
                        <article class="pill card h-100">
                            <img src="https://iristech.co/wp-content/uploads/2016/05/affiliate.png" class="card-img-top h-100 "  alt=""/>
                            <div class="content card-body">
                               <h5>Afiliados</h5>
                                <p>Haga crecer su negocio con nuestro programa de afiliados. ¡Gana dinero refiriendo a otras personas!</p>
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

export default HomeSP
