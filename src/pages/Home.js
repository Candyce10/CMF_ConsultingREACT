import React from 'react'
import { useTranslation } from 'react-i18next';



function Home(){

const { t, i18n } = useTranslation();

function handleClick(lang){
    i18n.changeLanguage(lang);
}

const langEl = document.querySelector('.langWrap')

const link = document.querySelectorAll('button')

link.forEach(el =>{
    el.addEventListener('click', () =>{
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active');
        const attr = el.getAttribute('language');
    })})


    return(
        <div>
            

            <div class="top-nav" id="home">
                <div class="container">
                    <div class="">
                        <div class="row justify-content-center ">
                            <div class="langWrap">
                              
                                <button onClick={()=>handleClick('en')} language="english" class="active lang">English</button>
                                <button onClick={()=>handleClick('es')} language="spanish" class="lang">Español</button>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div class="container">
                    <a class="navbar-brand " href="/">CMF CONSULTANTS</a>
                
                    <div class="">
                        <a href="#contact" class="btn btn-brand ms-lg-3 contact">{t('trans.contact')}</a>
                    </div>
                </div>
            </nav>


            <div class="const-image" style={{"background-color": "#03213c"}}>
                <div class="container">
                    <div class="px-4 py-5 text-center justify-content-center">
                        <h4 class="construction" style={{"color":"rgb(241, 241, 241)"}}>{t('trans.construction')}<br/></h4>
                        <i class='bx bxs-wrench bx-sm' style={{"color":"white"}}></i>
                        <h6 class="construction2" style={{"color":"rgb(241, 241, 241)"}}>{t('trans.construction2')}</h6>
                        <div class="container p-0 rounded-4 mt-4 mb-4" style={{"width": "175px", "height": "100px", "background-color": "green", "font-size": "60px", "color":"rgb(241, 241, 241) "}}>CMF</div>
                        <h1 class="display-8 mt-4" style={{"color":"rgb(241, 241, 241)"}}>COMMERCIAL & MINORITY</h1>
                        <h1 class="display-8 mb-2" style={{"color":"rgb(241, 241, 241)"}}>FUNDING CONSULTANTS</h1>
                        <div class="col-lg-12 mx-auto">
                        <p class="lead headqt" style={{"color":"rgb(241, 241, 241)"}}>{t('trans.headqt')}</p>
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
                <h3 class="fs-3 t1">{t('trans.t1')}</h3>
                <p class="p1">{t('trans.p1')}</p>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <div>
                <h3 class="fs-3 t2">{t('trans.t2')}</h3>
                <p class="p2">{t('trans.p2')}</p>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <div>
                <h3 class="fs-3 t3">{t('trans.t3')}</h3>
                <p class="p3">{t('trans.p3')}</p>
            </div>
        </div>
    </div>
</div>

<section id="milestone">
    <div class="container">
        <div class="row text-center justify-content-center ">
            <div class="col-lg-10 col-sm-6">
                <h1 class="display-6 greenct">{t('trans.greenct')}</h1>
                <p class="mb-0 greenct2" style={{"font-size": "20px"}}>{t('trans.greenct2')}</p>
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
            <h3 class="fs-2 t4">{t('trans.t4')}</h3>
        </div>
        <div class="feature col">
            <div class="d-inline-flex align-items-center text-center justify-content-center fs-4 flex-shrink-0" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <h3 class="fs-2 t5">{t('trans.t5')}</h3>
        </div>
        <div class="feature col">
            <div class="d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0" style={{"border-radius": "50%", "background-color": "green"}}>
                <span class="material-symbols-outlined" style={{"font-size": "36px", "color": "white"}}>
                    attach_money
                </span>
            </div>
            <h3 class="fs-2 t6">{t('trans.t6')}</h3>
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
                    <h5 class=" mb-4 text-center nv" style={{"color":"rgb(241, 241, 241)"}}>{t('trans.nv')}</h5>
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
                    <h5 class=" mb-4 text-center fl" style={{"color":"rgb(241, 241, 241)"}}>{t('trans.fl')}</h5>


                    
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
        {t('trans.footer')}
        </div>
    </footer>
  
        </div>
    )
}

export default Home