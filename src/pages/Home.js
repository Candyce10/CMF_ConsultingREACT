import React from 'react'



function Home(){

    
let data ={
    "english":
    {
        "contact":  "Contact",
        "footer": "Over 35 years helping people & businesses with financial crisis management",
        "construction": "Under Construction",
        "construction2": "We're working to finish the development of this site. Please check back soon!",
        "headqt": '"Helping minorites and businesses reach their funding goals"',
        "t1": "Loans and Grants for Women & Minorites",
        "t2": "Free Workshops to All Minority Groups",
        "t3": "Helping People Get into and Start a Business",
        "t4": "Funding Strategies",
        "t5": "Business Management Consulting",
        "t6": "Business Turnaround",
        "p1": "There are many new programs available to help women & minorites with grants and low interest loans",
        "p2": "We offer in-person or video workshops to help guide you on achieving your business goals",
        "p3": "Have you decided to start your own business but are not sure where to finacially begin?",
        "greenct": "We help with application processing for minority certification to get SBA (or other) loans & grants",
        "greenct2": "CMF Consultants shop for loans and grants that suit your specific needs!",
        "nv": "Las Vegas Office",
        "fl": "Florida Office",
    },
    "spanish":
    {
        "contact": "Contacto",
        "footer": "Más de 35 años ayudando a personas y empresas con la gestión de crisis financieras",
        "construction": "En Construcción",
        "construction2": "Esta página web está en construcción. ¡Por favor vuelva más tarde!",
        "headqt": '"Ayudar a las minorías y a las empresas con sus objetivos de financiación"',
        "t1": "Préstamos y subvenciones para mujeres y minorías",
        "t2": "Talleres gratuitos para todos los grupos minoritarios",
        "t3": "Ayudamos a las personas a iniciar un negocio",
        "t4": "Estrategias de financiación",
        "t5": "Consultoría en Gestión Empresarial",
        "t6": "Cambio de negocio",
        "p1": "Hay muchos programas nuevos disponibles para ayudar a mujeres y minorías con subvenciones y préstamos a bajo interés.",
        "p2": "Ofrecemos talleres en persona o en video para ayudarlo a guiarlo en el logro de sus objetivos comerciales",
        "p3": "¿Ha decidido iniciar su propio negocio pero no está seguro de por dónde empezar financieramente?",
        "greenct": "Ayudamos a las minorías a procesar las solicitudes de certificación para obtener préstamos y subvenciones de la SBA (u otros)",
        "greenct2": "¡Los consultores de CMF buscan préstamos y subvenciones para sus necesidades específicas!",
        "nv": "Oficina en Las Vegas",
        "fl": "Oficina en Florida",
    }
}
const langEl = document.querySelector('.langWrap');
const contactEl = document.querySelector('.contact');
const footerEl = document.querySelector('.footer');
const constructionEl = document.querySelector('.construction');
const constructionEl2 = document.querySelector('.construction2');
const headqtEl = document.querySelector('.headqt');
const t1El = document.querySelector('.t1');
const t2El = document.querySelector('.t2');
const t3El = document.querySelector('.t3');
const t4El = document.querySelector('.t4');
const t5El = document.querySelector('.t5');
const t6El = document.querySelector('.t6');
const p1El = document.querySelector('.p1');
const p2El = document.querySelector('.p2');
const p3El = document.querySelector('.p3');
const greenctEl = document.querySelector('.greenct');
const greenct2El = document.querySelector('.greenct2');
const nvEl = document.querySelector('.nv');
const flEl = document.querySelector('.fl');
const link = document.querySelectorAll('a');

link.forEach(el =>{
    el.addEventListener('click', () =>{
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active');

        const attr = el.getAttribute('language');

        contactEl.textContent = data[attr].contact
        footerEl.textContent = data[attr].footer
        constructionEl.textContent = data[attr].construction
        constructionEl2.textContent = data[attr].construction2
        headqtEl.textContent = data[attr].headqt
        t1El.textContent = data[attr].t1
        t2El.textContent = data[attr].t2
        t3El.textContent = data[attr].t3
        t4El.textContent = data[attr].t4
        t5El.textContent = data[attr].t5
        t6El.textContent = data[attr].t6
        p1El.textContent = data[attr].p1
        p2El.textContent = data[attr].p2
        p3El.textContent = data[attr].p3
        greenctEl.textContent = data[attr].greenct
        greenct2El.textContent = data[attr].greenct2
        nvEl.textContent = data[attr].nv
        flEl.textContent = data[attr].fl
    })
})





    return(
        <div>
            

            <div class="top-nav" id="home">
                <div class="container">
                    <div class="">
                        <div class="row justify-content-center ">
                            <div class=" langWrap">
                                
                                <a href="/" language="english" class="active lang">English</a>
                                <a href="#" language="spanish" class="lang">Español</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div class="container">
                    <a class="navbar-brand " href="/">CMF CONSULTANTS</a>
                
                    <div class="">
                        <a href="#contact" class="btn btn-brand ms-lg-3 contact">Contact</a>
                    </div>
                </div>
            </nav>


            <div class="const-image" style={{"background-color": "#03213c"}}>
                <div class="container">
                    <div class="px-4 py-5 text-center justify-content-center">
                        <h4 class="construction" style={{"color":"rgb(241, 241, 241)"}}>Under Construction<br/></h4>
                        <i class='bx bxs-wrench bx-sm' style={{"color":"white"}}></i>
                        <h6 class="construction2" style={{"color":"rgb(241, 241, 241)"}}>We're working to finish the development of this site. Please check back soon!</h6>
                        <div class="container p-0 rounded-4 mt-4 mb-4" style={{"width": "175px", "height": "100px", "background-color": "green", "font-size": "60px", "color":"rgb(241, 241, 241) "}}>CMF</div>
                        <h1 class="display-8 mt-4" style={{"color":"rgb(241, 241, 241)"}}>COMMERCIAL & MINORITY</h1>
                        <h1 class="display-8 mb-2" style={{"color":"rgb(241, 241, 241)"}}>FUNDING CONSULTANTS</h1>
                        <div class="col-lg-12 mx-auto">
                        <p class="lead headqt" style={{"color":"rgb(241, 241, 241)"}}>"Helping minorites and businesses reach their funding goals"</p>
                        </div>
                    </div>
                </div>
            </div>

<div class="px-4 py-5" style={{"background-color": "rgb(241, 241, 241)"}}>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
        <div class="col d-flex align-items-start">
            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <div>
                <h3 class="fs-3 t1">Loans and Grants for Women & Minorites</h3>
                <p class="p1">There are many new programs available to help women & minorites with grants and low interest loans</p>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <div>
                <h3 class="fs-3 t2">Free Workshops to All Minority Groups</h3>
                <p class="p2">We offer in-person or video workshops to help guide you on achieving your business goals</p>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <div>
                <h3 class="fs-3 t3">Helping People Get into and Start a Business</h3>
                <p class="p3">Have you decided to start your own business but are not sure where to finacially begin?</p>
            </div>
        </div>
    </div>
</div>

<section id="milestone">
    <div class="container">
        <div class="row text-center justify-content-center ">
            <div class="col-lg-10 col-sm-6">
                <h1 class="display-6 greenct">We help with application processing for minority certification to get SBA (or other) loans & grants</h1>
                <p class="mb-0 greenct2" style={{"font-size": "20px"}}>CMF Consultants shop for loans and grants that suit your specific needs!</p>
            </div>
        </div>
    </div>
</section>


<div class=" px-4 py-5 " style={{"background-color": "rgb(241, 241, 241)"}}>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 text-center align-items-start justify-content-center">
        <div class="feature col">
            <div class="d-inline-flex text-center align-items-center justify-content-center fs-4 " style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <h3 class="fs-2 t4">Funding Strategies</h3>
        </div>
        <div class="feature col">
            <div class="d-inline-flex align-items-center text-center justify-content-center fs-4 flex-shrink-0" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <h3 class="fs-2 t5">Business Management Consulting</h3>
        </div>
        <div class="feature col">
            <div class="d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <h3 class="fs-2 t6">Business Turnaround</h3>
        </div>
    </div>
  </div>




    <footer id="contact" class="text-white text-center text-lg-start bg-primary ">
        <div class="container p-4">
            <div class="row mt-4">
                <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-4 text-center" style={{"color": "rgb(241, 241, 241)"}}>CMF CONSULTANTS</h5>

                    <p class="text-center">
                        <i class='bx bxs-envelope'></i> info@cmfconsultants.net
                    </p>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 class=" mb-4 text-center nv" style={{"color":"rgb(241, 241, 241)"}}>Las Vegas Office</h5>
                        <p class="d-flex justify-content-center align-items-center">
                            <i class='bx bxs-phone-call'></i> (702) 701-2992
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
                        <i class='bx bxs-phone-call'></i> (786) 200-2080
                    </p>
                
                    <p class="d-flex justify-content-center text-center">
                        221 W. Hallandale Beach Blvd
                    <br/>
                        Hallandale Beach, FL 33009
                    </p> 
                
                </div>
            </div>
        </div>
        <div class="text-center footer p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
            Over 35 years helping people & businesses with financial crisis management
        </div>
    </footer>
  
        </div>
    )
}

export default Home