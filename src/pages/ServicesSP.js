import React, {useEffect} from 'react'

function ServicesSP() {
    useEffect(() => {
        document.title = 'Servicios y Talleres - CMF Consultants';
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
                        <a href="https://www.facebook.com/profile.php?id=100085494214237"><i class='bx bxl-facebook'></i></a>
                        <a href="https://twitter.com/cmf2022cmf"><i class='bx bxl-twitter'></i></a>
                        <a href="https://www.linkedin.com/in/robert-cmf-consultants-8b15a6250/"><i class='bx bxl-linkedin'></i></a>
                        <a href="https://www.meetup.com/home/?suggested=true&source=EVENTS"><i class="fa-brands fa-meetup"></i></a>

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
        
        <div class=" serv-header col-xxl-12 px-4 py-5">
            <div class="row align-items-center  g-5 py-5">

                <div class="col-lg-11  col-sm-11">
                    <h1 class="display-5 fw-bold lh-1 mb-3 serv-p">Servicios y Talleres</h1>
                    <p class="lead serv-p fs-5 lh-1 fs-4">Nuestro equipo dedicado trabajar?? con usted para comprender y ayudarlo a lograr sus objetivos. Brindamos servicios a peque??as empresas como la suya en todo Estados Unidos y lo guiaremos durante todo el proceso.
                    </p>
                    <p class="lead serv-p fs-5 lh-1 fs-4"> CMF Consultants es una ventanilla ??nica para la consultor??a empresarial y las necesidades financieras. ??Empiece hoy!
                    </p>
                    <br/>
                    <a href="#workshops" class="btn btn-brand ms-lg-3">Ir a Talleres</a>
                </div>
            </div>
        </div>
      
        <div class="container-fluid ">    
            <div class="row">
                <div class="col-md-7 p-5 ">
                    <h2 class=" fw-normal lh-1 ">Nuestros Servicios</h2>
                    <hr/>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#business-management-consulting">Consultor??a de Gesti??n Empresarial (Empresas Principales y hasta Empresas del Mercado Medio)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#main-street-and-early-stage-plans">Planes comerciales de empresas de Main Street y Early-Stage </a></p>
                    <p class="fs-5 lh-1  d-flex"><a href="#sba-8a-business-development">Small Business Administration 8(a) Desarrollo de negocios</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#venture-capital-consulting">Consultor??a de capital de riesgo (tanto deuda como capital)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#business-turnarounds">Cambio de negocio</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#asset-based-lenders">Prestamistas basados ??????en activos (en bienes ra??ces, cuentas por cobrar, inventario, equipo)</a></p>
                    <p class="fs-5 lh-1  d-flex"><a href="#sba-lenders">SBA Prestamistas (7(a), 504 & CDC)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#commercial-real-estate-loans">Pr??stamos inmobiliarios comerciales (todas las ??reas cubiertas, rehabilitaci??n, puente, apartamentos, comercio minorista)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#specialty-finance-areas">??reas de Finanzas Especializadas (Cannabis, Gasolineras, ??reas Solares y Trade Finance)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#hard-money-loans">Pr??stamos de dinero duro</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#asset-liquidation-and-disposition">Liquidaci??n y Disposici??n de Activos</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#business-brokerage">Corretaje Comercial (Para Compradores y Vendedores, ya sea Directo o por Referencia)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#mergers-and-acquisitions">Fusiones y adquisiciones (directas o por recomendaci??n)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#loans-and-grants-for-startups">Pr??stamos y ayudas para startups</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#disaster-loans">Pr??stamos por Desastre</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#short-term-lines-of-credit">L??neas de cr??dito a corto plazo</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#certification-for-women-and-minority-loans-and-grants">Certificaci??n para pr??stamos y subvenciones para mujeres y minor??as</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#packaging-for-sba-loans-and-grants">Embalaje para pr??stamos y subvenciones de la SBA</a></p>
                    <p class="fs-5 text-capitalize lh-1 d-flex"><a href="#business-plans-and-grant-writing">Planes de negocios y redacci??n de subvenciones</a></p>
                    <p  class="fs-5 text-capitalize lh-1"><a href="#more">& ??m??s!</a></p>
                  
                   
                </div>
                <div class="col-md-5 mb-5 align-items-center" style={{"margin-top":"100px"}}>
                    <img class="service-img " src="https://blog.hubspot.com/hubfs/how-to-become-a-consultant.jpg" alt='man and woman speaking'/>
                    <div class="green2"></div>
                </div>
            </div>
            <div id="workshops"></div>
            <br/>
            <div  class="row mt-2">
                <div class="col-md-7 order-md-2 text-end p-5">
                    <h2 class="fw-normal lh-1  mb-4">Nuestros talleres</h2>
                    <hr/>

                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=??Hola, me gustar??a saber la pr??xima disponibilidad para el taller 'Impulsa tu carrera iniciando un negocio'!"><p class="fs-5 lh-1 text-capitalize">Impulsa tu carrera iniciando un negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=??Hola, me gustar??a saber la pr??xima disponibilidad para el taller 'Lo que necesitas para iniciar un negocio'!"><p class="fs-5 lh-1 text-capitalize">Lo que necesitas para iniciar un negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=??Hola, me gustar??a saber la pr??xima disponibilidad para el taller 'Taller de apoyo sobre c??mo iniciar un negocio'!"><p class="fs-5 lh-1 text-capitalize">Taller de apoyo sobre c??mo iniciar un negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=??Hola, me gustar??a saber la pr??xima disponibilidad para el taller 'La psicolog??a y la mente que necesitar??s para iniciar un negocio'!"><p class="fs-5 lh-1 text-capitalize">La psicolog??a y la mente que necesitar??s para iniciar un negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=??Hola, me gustar??a saber la pr??xima disponibilidad para el taller 'C??mo promocionar tu negocio'!"><p class="fs-5 lh-1 text-capitalize">C??mo promocionar tu negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=??Hola, me gustar??a saber la pr??xima disponibilidad para el taller 'C??mo atraer a los inversores'!"><p class="fs-5 lh-1 text-capitalize mb-4" >C??mo atraer a los inversores</p></a>
                    <div class="card text-center ">
                        <div class="card-body rounded" style={{"background":"var(--brand)"}}>
                            <h5 class="card-title  text-white">??Cont??ctenos acerca de nuestro pr??ximo taller disponible virtualmente o en persona!</h5>
                            
                        </div>
                    </div>

                </div>
                <div class="col-md-5 order-md-1 mb-5" >
                    <img src="https://www.redhat.com/cms/managed-files/styles/max_size/s3/RH-consulting-hero-0722-915x768.jpg?itok=jQu6uljp" alt='two women speaking'/>

                </div>
            </div>

            <div id="business-management-consulting"></div>
            <br/>

            <div class="row mt-2 ">
                <div class="col-md-12   p-5">
                    <h2  class="fw-normal lh-1  mb-2">Consultor??a de Gesti??n Empresarial (Empresas Principales y hasta Empresas del Mercado Medio)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants puede ayudar en muchas de las necesidades que su empresa pueda tener. Trabajamos en estrecha colaboraci??n con los propietarios y gerentes de negocios para ayudar a identificar, abordar y superar los obst??culos para lograr los objetivos de una empresa. La consultor??a de gesti??n empresarial incluye:</p>
                    ???<ul>
                        <li>Asistir en la planificaci??n empresarial y la creaci??n de nuevos negocios.</li>
                        <li>Identificar los obst??culos que impiden el crecimiento y/o la eficiencia del negocio</li>
                        <li>???Determinar qu?? cambios deben realizarse y ayudar a implementarlos.</li>
                        <li>Proporcionar la formaci??n y los recursos necesarios al personal y a la direcci??n.</li>
                        <li>Aportar nuevas ideas para refrescar un negocio.</li>
                        <li>Analice el presupuesto de una empresa, sugiera ajustes y ayude a implementar esos ajustes</li>
                    </ul>

                    <div id="main-street-and-early-stage-plans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Planes comerciales Main Street y Early-Stage Venture</h2>
                    <hr/>
                    <p class="fs-5 lh-1 ">Main Street se usa para describir negocios peque??os y medianos como parte de una econom??a local. Por lo general, son de propiedad local y el comprador probable tambi??n es local. Las empresas de Main Street no disfrutan del beneficio de la llamada "prima de tama??o" cuando se valoran; algo que podr??a aplicarse a empresas m??s grandes que, en virtud de su tama??o, parecer??an presentar un menor nivel de riesgo.</p>
                    <p class="fs-5 lh-1 ">Etapa inicial es un t??rmino que se utiliza para caracterizar una empresa de nueva creaci??n. Se caracteriza por actividades como el desarrollo de la investigaci??n, la investigaci??n de mercados y el desarrollo comercial de productos, y generalmente tiene ingresos, ventas y participaci??n de mercado limitados. La probabilidad de ??xito de la empresa depende en gran medida de las acciones realizadas durante esta etapa, y CMF Consultants puede ayudarlo a trazar su plan.</p>
                    <p class="fs-5 lh-1 " >??CMF Consultants cultivar?? un enfoque estrat??gico e integral para catapultarlo a usted y a su negocio hacia adelante! </p>

                    <div id="sba-8a-business-development"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Small Business Administration 8(a) Desarrollo de negocios</h2>
                    <hr/>
                    <p class="fs-5 lh-1 ">El programa 8(a) de la SBA se cre?? para ???brindar igualdad de condiciones para las peque??as empresas propiedad de personas social y econ??micamente desfavorecidas???. De acuerdo con las pautas del programa, cualquier negocio que sea propiedad de negros en un 51 % o m??s tiene el potencial de competir por lucrativos contratos gubernamentales reservados, recibir ayuda para gestionar contratos federales y recibir capacitaci??n. Para participar en el programa, las empresas primero deben obtener la certificaci??n de la SBA.</p>
                    <p class="fs-5 lh-1 ">Como el mayor comprador de bienes y servicios del mundo, el gobierno federal de los EE. UU. recibe un apoyo vital de las peque??as empresas en desventaja, incluidas las del Programa de desarrollo empresarial 8(a).</p>
                    <p class="fs-5 lh-1 ">Los beneficios del Programa de desarrollo empresarial 8(a) incluyen:</p>
                    ???<ul>
                        <li>Acceso a contratos de reserva competitivos y de fuente ??nica</li>
                        <li>Asistencia para el desarrollo comercial de especialistas dedicados en oportunidades comerciales</li>
                        <li>Asistencia de expertos federales en adquisiciones</li>
                        <li>Oportunidades para crear empresas conjuntas con empresas establecidas</li>
                        <li>Acceso prioritario a la propiedad excedente federal</li>
                    </ul>

                    <div id="venture-capital-consulting"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Consultor??a de capital de riesgo (tanto deuda como capital)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 " >El capital de riesgo es un tipo de financiamiento y una forma de capital privado que los inversionistas brindan a empresas nuevas y peque??as empresas que se cree que tienen un potencial de crecimiento a largo plazo. Ayudaremos a conectar su empresa con inversores estrat??gicos de capital de riesgo, as?? como con socios estrat??gicos que generar??n ingresos para su empresa.  </p>

                    <div id="business-turnarounds"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Cambio de negocio</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Si encuentra que su empresa necesita asistencia con la gesti??n de crisis y los desaf??os del flujo de caja, CMF Consultants priorizar?? la gesti??n de su flujo de caja, trabajar?? con sus prestamistas y har?? lo que sea necesario para que su negocio vuelva a la normalidad y est?? listo para un nuevo crecimiento. Su empresa puede necesitar servicios de respuesta si: </p>
                    ???<ul>
                        <li>Tus ventas est??n creciendo pero nunca tienes suficiente efectivo disponible</li>
                        <li>Su deuda sigue aumentando o los pagos de la deuda est??n consumiendo su efectivo</li>
                        <li>Usted lucha regularmente para hacer la n??mina</li>
                        <li>Los proveedores y contratistas preguntan sobre las facturas atrasadas o amenazan con dejar de hacer negocios con usted</li>
                        <li>Su empresa es constantemente rentable, pero se est?? quedando sin efectivo</li>
                        <li>Su negocio de repente deja de ser rentable y su personal de contabilidad no puede decirle por qu??.</li>
                    </ul>

                    <div id="asset-based-lenders"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Prestamistas basados ??????en activos (en bienes ra??ces, cuentas por cobrar, inventario, equipo)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants puede ayudar a aprovechar una variedad de activos de la empresa: cuentas por cobrar, inventario, activos fijos (incluidos maquinaria y equipo), bienes ra??ces comerciales y m??s para asegurar soluciones de financiamiento, incluidas l??neas de cr??dito renovables, cartas de cr??dito y pr??stamos a plazo. Utilizamos nuestro profundo conocimiento de los ciclos de colateral y flujo de efectivo para crear soluciones personalizadas para empresas que experimentan un alto apalancamiento, adquisiciones potenciales, crecimiento a trav??s de nuevos productos o expansi??n del mercado, recapitalizaciones o cambios de rumbo.</p>


                    <div id="sba-lenders"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">SBA Prestamistas (7(a), 504 & CDC)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">El Small Business Administration (SBA) ofrece una variedad de pr??stamos para financiar su negocio. CMF Consultants puede ayudarlo a usted y a su empresa a encontrar y solicitar un pr??stamo 7(a) o 504 para promover el crecimiento empresarial y la creaci??n de empleo. Si su empresa a??n no est?? certificada por Certified Development Companies (CDCs), podemos ayudarlo a presentar su solicitud para que pueda ser elegible para un pr??stamo 504. </p>

                    <br/>
                    <h5>      7(a)</h5>
                    <ul class="list-unstyled">
                        <li class="fs-5 lh-1 mb-0">El Programa de Pr??stamo 7(a), el programa de pr??stamo m??s com??n de la SBA, incluye ayuda financiera para peque??as empresas con requisitos especiales. Esta es la mejor opci??n cuando los bienes ra??ces son parte de una compra comercial, pero tambi??n se puede usar para:</li>
                        <br/>
                        <ul>
                            <li>Capital de trabajo a corto y largo plazo</li>
                            <li>Refinanciar la deuda comercial actual</li>
                            <li>Compra de muebles, accesorios y suministros.</li>
                        </ul>
                    <br/>
                    <li class="fs-5 lh-1 mb-0">El monto m??ximo del pr??stamo para un pr??stamo 7(a) es de $5 millones. Los factores clave de elegibilidad se basan en lo que hace la empresa para recibir sus ingresos, su historial de cr??dito y d??nde opera la empresa. Su prestamista lo ayudar?? a determinar qu?? tipo de pr??stamo se adapta mejor a sus necesidades. (<a href="https://www.sba.gov/funding-programs/loans/7a-loans">https://www.sba.gov/funding-programs/loans/7a-loans</a>)</li> 
                    </ul>
                    <br/>
                    <h5>  504</h5>
                    <ul class="list-unstyled">
                        <li class="fs-5 lh-1 mb-0">El Programa de Pr??stamo CDC/504 brinda financiamiento a largo plazo con tasa fija para activos fijos importantes que promueven el crecimiento empresarial y la creaci??n de empleo.</li>
                        <br/>
                        <li class="fs-5 lh-1 mb-0">  Los pr??stamos 504 est??n disponibles a trav??s de las Empresas de Desarrollo Certificadas (CDC), los socios comunitarios de la SBA que regulan las organizaciones sin fines de lucro y promueven el desarrollo econ??mico dentro de sus comunidades. Los CDC est??n certificados y regulados por la SBA.</li>
                        <br/>
                        <li class="fs-5 lh-1 mb-0">  El monto m??ximo del pr??stamo para un pr??stamo 504 es de $5 millones. Para ciertos proyectos de energ??a, el prestatario puede recibir un pr??stamo 504 de hasta $5,5 millones por proyecto, hasta tres proyectos que no superen los $16,5 millones en total. (<a href="https://www.sba.gov/funding-programs/loans/504-loans">https://www.sba.gov/funding-programs/loans/504-loans</a> )</li>
                       
                    </ul>
                    <br/>
                    <h5>Microcr??ditos</h5>
                    <ul class="list-unstyled">
                        <li class="fs-5 lh-1 mb-0">El programa de micropr??stamos proporciona pr??stamos de hasta $50,000 para ayudar a las peque??as empresas y ciertos centros de cuidado infantil sin fines de lucro a comenzar y expandirse. El micropr??stamo promedio es de alrededor de $13,000.</li>
                        <br/>
                        <li class="fs-5 lh-1 mb-0">La SBA proporciona fondos a prestamistas intermediarios especialmente designados, que son organizaciones comunitarias sin fines de lucro con experiencia en pr??stamos, as?? como en administraci??n y asistencia t??cnica. Estos intermediarios administran el programa de micropr??stamos para prestatarios elegibles. (<a href="https://www.sba.gov/funding-programs/loans/microloans">https://www.sba.gov/funding-programs/loans/microloans</a>)</li>
                        
                       
                    </ul>
                   

                    <div id="commercial-real-estate-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Pr??stamos inmobiliarios comerciales (todas las ??reas cubiertas, rehabilitaci??n, puente, apartamentos, comercio minorista)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Si su negocio es una propiedad generadora de ingresos que se compra o desarrolla principalmente para obtener ingresos alquil??ndola o arrend??ndola a otros, CMF Consultants puede ayudarlo a encontrar el financiamiento adecuado para la adquisici??n, el desarrollo y la construcci??n de estas propiedades.</p>

                    <div id="specialty-finance-areas"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">??reas de Finanzas Especializadas (Cannabis, Gasolineras, ??reas Solares y Trade Finance)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">La financiaci??n especializada se puede definir en t??rminos generales como prestamistas no bancarios que se dirigen a prestatarios comerciales y de consumo que no reciben un servicio adecuado de los canales bancarios tradicionales. Las necesidades de su negocio pueden ser ??nicas o complejas, obtener financiamiento no est??ndar no tiene por qu?? ser complicado. Contamos con un equipo dedicado con experiencia en pr??stamos financieros especializados para que su empresa obtenga la asistencia financiera que necesita.</p>

                    <div id="hard-money-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Pr??stamos de dinero duro</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Un pr??stamo de dinero duro es una forma de financiaci??n basada en activos en la que los fondos del prestatario estar??n garantizados por el valor del capital de una propiedad. Si necesita pedir prestado fondos a corto plazo pero necesita efectivo r??pidamente, lo ayudaremos a encontrar las mejores tasas para las que califica y, en ??ltima instancia, le ahorraremos dinero a largo plazo.</p>

                    <div id="asset-liquidation-and-disposition"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Liquidaci??n y Disposici??n de Activos</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">La disposici??n de activos describe cualquier venta, arrendamiento, transferencia, emisi??n u otra disposici??n, directa o indirecta, de los activos f??sicos que tiene una empresa. Esto puede variar desde productos hasta activos como acciones y bonos. CMF Consultants puede ayudar a las empresas a liquidar sus activos para transformarlos de productos/servicios en efectivo o equivalentes de efectivo.</p>

                    <div id="business-brokerage"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Corretaje Comercial (Para Compradores y Vendedores, ya sea Directo o por Referencia)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants puede proporcionar servicios de corretaje a aquellos que buscan facilitar la compra o venta de un negocio. Si est?? vendiendo, podemos armar el paquete de marketing, ayudar a determinar el precio apropiado para el negocio y hacer todo el trabajo preliminar necesario para comercializar el negocio para la venta. Si est?? comprando, podemos presentarle vendedores motivados y oportunidades que cumplan con sus objetivos o metas financieras.</p>

                    <div id="mergers-and-acquisitions"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Fusiones y adquisiciones (directas o por recomendaci??n)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">El t??rmino fusiones y adquisiciones se refiere a la consolidaci??n de empresas o de sus principales activos comerciales a trav??s de transacciones financieras entre empresas. Una fusi??n describe dos empresas, de aproximadamente el mismo tama??o, que unen sus fuerzas para avanzar como una sola entidad nueva, en lugar de permanecer operadas y de propiedad separada. Por otro lado, cuando una empresa se hace cargo de otra y se establece como el nuevo propietario, la compra se denomina adquisici??n. CMF Consultants puede asistirlo en cualquier parte de este proceso.</p>

                    <div id="loans-and-grants-for-startups"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Pr??stamos y ayudas para startups</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Las subvenciones para peque??as empresas proporcionan dinero gratis para nuevas empresas y empresas existentes. Hay muchos programas de subvenciones disponibles para peque??as empresas, dependiendo de una variedad de factores de calificaci??n. Se necesita tiempo y esfuerzo para investigar y solicitar financiamiento por su cuenta, pero CMF Consultants puede ayudar a su empresa a obtener subvenciones y pr??stamos a bajo inter??s para los que puede calificar.</p>

                    <div id="disaster-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Pr??stamos por Desastre</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Si su negocio sufri?? da??os f??sicos y est?? ubicado en un ??rea declarada como desastre, CMF Consultants puede ayudarlo a buscar financiamiento para ayudar a cubrir los costos de reparaci??n y reemplazo de activos f??sicos da??ados en un desastre declarado. Las empresas de cualquier tama??o y la mayor??a de las organizaciones privadas sin fines de lucro pueden calificar para un pr??stamo para recuperarse despu??s de un desastre.</p>

                    <div id="short-term-lines-of-credit"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">L??neas de cr??dito a corto plazo</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Una l??nea de cr??dito a corto plazo es una l??nea de cr??dito comercial con un plazo de pr??stamo de entre seis meses y un a??o. CMF Consultants puede ayudarlo a determinar si su negocio califica para una l??nea de cr??dito a corto plazo y puede ayudarlo a solicitar la mejor opci??n de pr??stamo para usted con el prestamista apropiado.</p>

                    <div id="certification-for-women-and-minority-loans-and-grants"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Certificaci??n para pr??stamos y subvenciones para mujeres y minor??as</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants se dedican a apoyar a mujeres y minor??as en el desarrollo y crecimiento de sus peque??as empresas. Tanto si pertenece a una minor??a como si es propietario de una empresa, nos pondremos en contacto con usted para ayudarle a encontrar oportunidades de financiaci??n y obtener acceso a capital para nivelar el campo de juego en el mundo empresarial.</p>

                    <div id="packaging-for-sba-loans-and-grants"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Embalaje para pr??stamos y subvenciones de la SBA</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Nuestro equipo especializado en CMF Consultants revisar?? su plan de negocios y lo ayudar?? a determinar la cantidad de financiamiento que probablemente respaldar??n sus proyecciones, identificar?? posibles fuentes de financiamiento y lo ayudar?? a preparar un paquete de pr??stamo.</p>

                    <div id="business-plans-and-grant-writing"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Planes de negocios y redacci??n de subvenciones</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants se tomar?? el tiempo necesario para comprender el prop??sito y los servicios de su negocio a fin de mejorar su plan estrat??gico, al mismo tiempo que produce una propuesta de subvenci??n para maximizar la probabilidad de recibir asistencia financiera. Ya sea que necesite preparar una propuesta de subvenci??n que brinde resultados o desee mejorar su plan de negocios, ??comun??quese con CMF Consultants para obtener m??s informaci??n! </p>

                    <div id="more"></div>
                    <br/>


                    <h2 class="fw-normal lh-1 mt-5 mb-2">M??s</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Si un servicio que necesita no se encuentra en la lista anterior, no dude en contactarnos en una de nuestras oficinas, por correo electr??nico o a trav??s de nuestro formulario de contacto para que podamos encontrar una soluci??n adecuada para usted. </p>

                </div>
                
            </div>
            
            <div class="row mt-2 justify-content-center bg-light">
                <div class="col-md-7  text-center p-5">
                    <h2 class="fw-normal lh-1  mb-4">??Listo para empezar?</h2>
                    <hr/>

                    <p class="fs-5 lh-1 ">??Estamos aqu?? para ayudar! ??Cont??ctenos hoy para ver qu?? podemos hacer por usted y su negocio!</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ">Contacto</a>
                </div>
                
            </div>
        

        </div>
        <footer>
            <div class="container p-4">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
                        <a href="/"><img style={{"width":"100px", "height": "auto"}} src="https://i.imgur.com/5hGMabR.png" alt='CMF Logo'/></a>
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
            "Ayudar a las minor??as y las empresas a alcanzar sus objetivos de financiaci??n."
            </div>
        </footer>

    </div>
  )
}

export default ServicesSP
