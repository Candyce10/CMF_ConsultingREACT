import React, {useEffect} from 'react'


function TestimonialsSP() {
    useEffect(() => {
        document.title = 'Testimonios - CMF Consultants';
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
                        <li class="nav-item">
                            <a class="nav-link" style={{"color":"var(--brand)"}} href="/">English</a>
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
                        <h1 class="mt-5">Testimonios</h1>   <hr class="divider text-center justify-content-center"></hr>
                        <p class="mx-auto fs-4 mt-3 ">¡Vea lo que dicen nuestros clientes sobre nosotros!</p>
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
                                        <h3>"Estaba terriblemente endeudado ya punto de perder mi empresa. Si no fuera por ti y tu equipo; Habría tenido que cerrar mi empresa."</h3>
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
                                        <h3>"Después de intentar durante dos años obtener un préstamo EIDL de la SBA, me presentaron a CMF Consulting. En menos de ocho semanas, CMF pudo asegurar mi préstamo para que pudiera continuar con mi negocio."</h3>
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
                                        <h3>"Estaba en medio de un lío con la SBA, tratando de recibir un EDIL de ellos. Me rechazaron después de varios intentos, pero CMF, en cuestión de semanas, lo aclaró y me aprobó. ¡Literalmente me salvó, mi compañía!"</h3>
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
                                        <h3>"CMF Consultants son maestros cuando se trata de resolver situaciones financieras dolorosas. Realmente aprecio su tenacidad y habilidad al trabajar con compañías de tarjetas de crédito, prestamistas y la SBA. Me han ganado con los 3!"</h3>
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
                                        <h3>"CMF Consultants son pitbulls cuando asumen un proyecto. Vinieron y me financiaron cuando nadie más de 7 años pudo hacerlo. Son realmente geniales para trabajar con ellos."</h3>
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
                                        <h3>"Su persistencia e ingenio me consiguieron los fondos que necesitaba para salvar mi negocio. ¡Gracias!"</h3>
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
                                        <h3>"Muchas gracias por estar al tanto de la SBA. Obtuviste mi préstamo financiado a pesar de toda la burocracia. Ese dinero me salvó a lo grande"</h3>
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
                                
                                <h3>"Luego de ser referido por un asociado de mucha confianza para manejar mi préstamo SBA, Rob y yo ahora somos amigos.
                                        Por qué, después de 9 meses de no dejar de monitorear, soportar cancelaciones erróneas, cambiar de muchos agentes, perder el archivo varias veces y arreglarlo nuevamente, para que realmente llegue a la cuenta bancaria. ¡Guau, sinceramente, nunca habría superado lo que hace Rob! ¡Salud, Rob G!"</h3>
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
                    <h2 class="fw-normal lh-1  mb-4">¿Listo para empezar?</h2>
                    <hr/>

                    <p class="fs-5 lh-1 ">¡Estamos aquí para ayudar! ¡Contáctenos hoy para ver qué podemos hacer por usted y su negocio!</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3">Contacto</a>
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


