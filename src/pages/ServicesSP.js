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
                    <p class="lead serv-p fs-5 lh-1 fs-4">Nuestro equipo dedicado trabajará con usted para comprender y ayudarlo a lograr sus objetivos. Brindamos servicios a pequeñas empresas como la suya en todo Estados Unidos y lo guiaremos durante todo el proceso.
                    </p>
                    <p class="lead serv-p fs-5 lh-1 fs-4"> CMF Consultants es una ventanilla única para la consultoría empresarial y las necesidades financieras. ¡Empiece hoy!
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
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#business-management-consulting">Consultoría de Gestión Empresarial (Empresas Principales y hasta Empresas del Mercado Medio)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#main-street-and-early-stage-plans">Planes comerciales de empresas de Main Street y Early-Stage </a></p>
                    <p class="fs-5 lh-1  d-flex"><a href="#sba-8a-business-development">Small Business Administration 8(a) Desarrollo de negocios</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#venture-capital-consulting">Consultoría de capital de riesgo (tanto deuda como capital)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#business-turnarounds">Cambio de negocio</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#asset-based-lenders">Prestamistas basados ​​en activos (en bienes raíces, cuentas por cobrar, inventario, equipo)</a></p>
                    <p class="fs-5 lh-1  d-flex"><a href="#sba-lenders">SBA Prestamistas (7(a), 504 & CDC)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#commercial-real-estate-loans">Préstamos inmobiliarios comerciales (todas las áreas cubiertas, rehabilitación, puente, apartamentos, comercio minorista)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#specialty-finance-areas">Áreas de Finanzas Especializadas (Cannabis, Gasolineras, Áreas Solares y Trade Finance)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#hard-money-loans">Préstamos de dinero duro</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#asset-liquidation-and-disposition">Liquidación y Disposición de Activos</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#business-brokerage">Corretaje Comercial (Para Compradores y Vendedores, ya sea Directo o por Referencia)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#mergers-and-acquisitions">Fusiones y adquisiciones (directas o por recomendación)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#loans-and-grants-for-startups">Préstamos y ayudas para startups</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#disaster-loans">Préstamos por Desastre</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#short-term-lines-of-credit">Líneas de crédito a corto plazo</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#certification-for-women-and-minority-loans-and-grants">Certificación para préstamos y subvenciones para mujeres y minorías</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#packaging-for-sba-loans-and-grants">Embalaje para préstamos y subvenciones de la SBA</a></p>
                    <p class="fs-5 text-capitalize lh-1 d-flex"><a href="#business-plans-and-grant-writing">Planes de negocios y redacción de subvenciones</a></p>
                    <p  class="fs-5 text-capitalize lh-1"><a href="#more">& ¡más!</a></p>
                  
                   
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

                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=¡Hola, me gustaría saber la próxima disponibilidad para el taller 'Impulsa tu carrera iniciando un negocio'!"><p class="fs-5 lh-1 text-capitalize">Impulsa tu carrera iniciando un negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=¡Hola, me gustaría saber la próxima disponibilidad para el taller 'Lo que necesitas para iniciar un negocio'!"><p class="fs-5 lh-1 text-capitalize">Lo que necesitas para iniciar un negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=¡Hola, me gustaría saber la próxima disponibilidad para el taller 'Taller de apoyo sobre cómo iniciar un negocio'!"><p class="fs-5 lh-1 text-capitalize">Taller de apoyo sobre cómo iniciar un negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=¡Hola, me gustaría saber la próxima disponibilidad para el taller 'La psicología y la mente que necesitarás para iniciar un negocio'!"><p class="fs-5 lh-1 text-capitalize">La psicología y la mente que necesitarás para iniciar un negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=¡Hola, me gustaría saber la próxima disponibilidad para el taller 'Cómo promocionar tu negocio'!"><p class="fs-5 lh-1 text-capitalize">Cómo promocionar tu negocio</p></a>
                    <a href="mailto:info@cmfconsultants.net?subject=Consulta de taller&body=¡Hola, me gustaría saber la próxima disponibilidad para el taller 'Cómo atraer a los inversores'!"><p class="fs-5 lh-1 text-capitalize mb-4" >Cómo atraer a los inversores</p></a>
                    <div class="card text-center ">
                        <div class="card-body rounded" style={{"background":"var(--brand)"}}>
                            <h5 class="card-title  text-white">¡Contáctenos acerca de nuestro próximo taller disponible virtualmente o en persona!</h5>
                            
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
                    <h2  class="fw-normal lh-1  mb-2">Consultoría de Gestión Empresarial (Empresas Principales y hasta Empresas del Mercado Medio)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants puede ayudar en muchas de las necesidades que su empresa pueda tener. Trabajamos en estrecha colaboración con los propietarios y gerentes de negocios para ayudar a identificar, abordar y superar los obstáculos para lograr los objetivos de una empresa. La consultoría de gestión empresarial incluye:</p>
                    ‌<ul>
                        <li>Asistir en la planificación empresarial y la creación de nuevos negocios.</li>
                        <li>Identificar los obstáculos que impiden el crecimiento y/o la eficiencia del negocio</li>
                        <li>‌Determinar qué cambios deben realizarse y ayudar a implementarlos.</li>
                        <li>Proporcionar la formación y los recursos necesarios al personal y a la dirección.</li>
                        <li>Aportar nuevas ideas para refrescar un negocio.</li>
                        <li>Analice el presupuesto de una empresa, sugiera ajustes y ayude a implementar esos ajustes</li>
                    </ul>

                    <div id="main-street-and-early-stage-plans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Planes comerciales Main Street y Early-Stage Venture</h2>
                    <hr/>
                    <p class="fs-5 lh-1 ">Main Street se usa para describir negocios pequeños y medianos como parte de una economía local. Por lo general, son de propiedad local y el comprador probable también es local. Las empresas de Main Street no disfrutan del beneficio de la llamada "prima de tamaño" cuando se valoran; algo que podría aplicarse a empresas más grandes que, en virtud de su tamaño, parecerían presentar un menor nivel de riesgo.</p>
                    <p class="fs-5 lh-1 ">Etapa inicial es un término que se utiliza para caracterizar una empresa de nueva creación. Se caracteriza por actividades como el desarrollo de la investigación, la investigación de mercados y el desarrollo comercial de productos, y generalmente tiene ingresos, ventas y participación de mercado limitados. La probabilidad de éxito de la empresa depende en gran medida de las acciones realizadas durante esta etapa, y CMF Consultants puede ayudarlo a trazar su plan.</p>
                    <p class="fs-5 lh-1 " >¡CMF Consultants cultivará un enfoque estratégico e integral para catapultarlo a usted y a su negocio hacia adelante! </p>

                    <div id="sba-8a-business-development"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Small Business Administration 8(a) Desarrollo de negocios</h2>
                    <hr/>
                    <p class="fs-5 lh-1 ">El programa 8(a) de la SBA se creó para “brindar igualdad de condiciones para las pequeñas empresas propiedad de personas social y económicamente desfavorecidas”. De acuerdo con las pautas del programa, cualquier negocio que sea propiedad de negros en un 51 % o más tiene el potencial de competir por lucrativos contratos gubernamentales reservados, recibir ayuda para gestionar contratos federales y recibir capacitación. Para participar en el programa, las empresas primero deben obtener la certificación de la SBA.</p>
                    <p class="fs-5 lh-1 ">Como el mayor comprador de bienes y servicios del mundo, el gobierno federal de los EE. UU. recibe un apoyo vital de las pequeñas empresas en desventaja, incluidas las del Programa de desarrollo empresarial 8(a).</p>
                    <p class="fs-5 lh-1 ">Los beneficios del Programa de desarrollo empresarial 8(a) incluyen:</p>
                    ‌<ul>
                        <li>Acceso a contratos de reserva competitivos y de fuente única</li>
                        <li>Asistencia para el desarrollo comercial de especialistas dedicados en oportunidades comerciales</li>
                        <li>Asistencia de expertos federales en adquisiciones</li>
                        <li>Oportunidades para crear empresas conjuntas con empresas establecidas</li>
                        <li>Acceso prioritario a la propiedad excedente federal</li>
                    </ul>

                    <div id="venture-capital-consulting"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Consultoría de capital de riesgo (tanto deuda como capital)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 " >El capital de riesgo es un tipo de financiamiento y una forma de capital privado que los inversionistas brindan a empresas nuevas y pequeñas empresas que se cree que tienen un potencial de crecimiento a largo plazo. Ayudaremos a conectar su empresa con inversores estratégicos de capital de riesgo, así como con socios estratégicos que generarán ingresos para su empresa.  </p>

                    <div id="business-turnarounds"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Cambio de negocio</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Si encuentra que su empresa necesita asistencia con la gestión de crisis y los desafíos del flujo de caja, CMF Consultants priorizará la gestión de su flujo de caja, trabajará con sus prestamistas y hará lo que sea necesario para que su negocio vuelva a la normalidad y esté listo para un nuevo crecimiento. Su empresa puede necesitar servicios de respuesta si: </p>
                    ‌<ul>
                        <li>Tus ventas están creciendo pero nunca tienes suficiente efectivo disponible</li>
                        <li>Su deuda sigue aumentando o los pagos de la deuda están consumiendo su efectivo</li>
                        <li>Usted lucha regularmente para hacer la nómina</li>
                        <li>Los proveedores y contratistas preguntan sobre las facturas atrasadas o amenazan con dejar de hacer negocios con usted</li>
                        <li>Su empresa es constantemente rentable, pero se está quedando sin efectivo</li>
                        <li>Su negocio de repente deja de ser rentable y su personal de contabilidad no puede decirle por qué.</li>
                    </ul>

                    <div id="asset-based-lenders"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Prestamistas basados ​​en activos (en bienes raíces, cuentas por cobrar, inventario, equipo)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants puede ayudar a aprovechar una variedad de activos de la empresa: cuentas por cobrar, inventario, activos fijos (incluidos maquinaria y equipo), bienes raíces comerciales y más para asegurar soluciones de financiamiento, incluidas líneas de crédito renovables, cartas de crédito y préstamos a plazo. Utilizamos nuestro profundo conocimiento de los ciclos de colateral y flujo de efectivo para crear soluciones personalizadas para empresas que experimentan un alto apalancamiento, adquisiciones potenciales, crecimiento a través de nuevos productos o expansión del mercado, recapitalizaciones o cambios de rumbo.</p>


                    <div id="sba-lenders"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">SBA Prestamistas (7(a), 504 & CDC)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">El Small Business Administration (SBA) ofrece una variedad de préstamos para financiar su negocio. CMF Consultants puede ayudarlo a usted y a su empresa a encontrar y solicitar un préstamo 7(a) o 504 para promover el crecimiento empresarial y la creación de empleo. Si su empresa aún no está certificada por Certified Development Companies (CDCs), podemos ayudarlo a presentar su solicitud para que pueda ser elegible para un préstamo 504. </p>

                    <br/>
                    <h5>      7(a)</h5>
                    <ul class="list-unstyled">
                        <li class="fs-5 lh-1 mb-0">El Programa de Préstamo 7(a), el programa de préstamo más común de la SBA, incluye ayuda financiera para pequeñas empresas con requisitos especiales. Esta es la mejor opción cuando los bienes raíces son parte de una compra comercial, pero también se puede usar para:</li>
                        <br/>
                        <ul>
                            <li>Capital de trabajo a corto y largo plazo</li>
                            <li>Refinanciar la deuda comercial actual</li>
                            <li>Compra de muebles, accesorios y suministros.</li>
                        </ul>
                    <br/>
                    <li class="fs-5 lh-1 mb-0">El monto máximo del préstamo para un préstamo 7(a) es de $5 millones. Los factores clave de elegibilidad se basan en lo que hace la empresa para recibir sus ingresos, su historial de crédito y dónde opera la empresa. Su prestamista lo ayudará a determinar qué tipo de préstamo se adapta mejor a sus necesidades. (<a href="https://www.sba.gov/funding-programs/loans/7a-loans">https://www.sba.gov/funding-programs/loans/7a-loans</a>)</li> 
                    </ul>
                    <br/>
                    <h5>  504</h5>
                    <ul class="list-unstyled">
                        <li class="fs-5 lh-1 mb-0">El Programa de Préstamo CDC/504 brinda financiamiento a largo plazo con tasa fija para activos fijos importantes que promueven el crecimiento empresarial y la creación de empleo.</li>
                        <br/>
                        <li class="fs-5 lh-1 mb-0">  Los préstamos 504 están disponibles a través de las Empresas de Desarrollo Certificadas (CDC), los socios comunitarios de la SBA que regulan las organizaciones sin fines de lucro y promueven el desarrollo económico dentro de sus comunidades. Los CDC están certificados y regulados por la SBA.</li>
                        <br/>
                        <li class="fs-5 lh-1 mb-0">  El monto máximo del préstamo para un préstamo 504 es de $5 millones. Para ciertos proyectos de energía, el prestatario puede recibir un préstamo 504 de hasta $5,5 millones por proyecto, hasta tres proyectos que no superen los $16,5 millones en total. (<a href="https://www.sba.gov/funding-programs/loans/504-loans">https://www.sba.gov/funding-programs/loans/504-loans</a> )</li>
                       
                    </ul>
                    <br/>
                    <h5>Microcréditos</h5>
                    <ul class="list-unstyled">
                        <li class="fs-5 lh-1 mb-0">El programa de micropréstamos proporciona préstamos de hasta $50,000 para ayudar a las pequeñas empresas y ciertos centros de cuidado infantil sin fines de lucro a comenzar y expandirse. El micropréstamo promedio es de alrededor de $13,000.</li>
                        <br/>
                        <li class="fs-5 lh-1 mb-0">La SBA proporciona fondos a prestamistas intermediarios especialmente designados, que son organizaciones comunitarias sin fines de lucro con experiencia en préstamos, así como en administración y asistencia técnica. Estos intermediarios administran el programa de micropréstamos para prestatarios elegibles. (<a href="https://www.sba.gov/funding-programs/loans/microloans">https://www.sba.gov/funding-programs/loans/microloans</a>)</li>
                        
                       
                    </ul>
                   

                    <div id="commercial-real-estate-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Préstamos inmobiliarios comerciales (todas las áreas cubiertas, rehabilitación, puente, apartamentos, comercio minorista)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Si su negocio es una propiedad generadora de ingresos que se compra o desarrolla principalmente para obtener ingresos alquilándola o arrendándola a otros, CMF Consultants puede ayudarlo a encontrar el financiamiento adecuado para la adquisición, el desarrollo y la construcción de estas propiedades.</p>

                    <div id="specialty-finance-areas"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Áreas de Finanzas Especializadas (Cannabis, Gasolineras, Áreas Solares y Trade Finance)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">La financiación especializada se puede definir en términos generales como prestamistas no bancarios que se dirigen a prestatarios comerciales y de consumo que no reciben un servicio adecuado de los canales bancarios tradicionales. Las necesidades de su negocio pueden ser únicas o complejas, obtener financiamiento no estándar no tiene por qué ser complicado. Contamos con un equipo dedicado con experiencia en préstamos financieros especializados para que su empresa obtenga la asistencia financiera que necesita.</p>

                    <div id="hard-money-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Préstamos de dinero duro</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Un préstamo de dinero duro es una forma de financiación basada en activos en la que los fondos del prestatario estarán garantizados por el valor del capital de una propiedad. Si necesita pedir prestado fondos a corto plazo pero necesita efectivo rápidamente, lo ayudaremos a encontrar las mejores tasas para las que califica y, en última instancia, le ahorraremos dinero a largo plazo.</p>

                    <div id="asset-liquidation-and-disposition"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Liquidación y Disposición de Activos</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">La disposición de activos describe cualquier venta, arrendamiento, transferencia, emisión u otra disposición, directa o indirecta, de los activos físicos que tiene una empresa. Esto puede variar desde productos hasta activos como acciones y bonos. CMF Consultants puede ayudar a las empresas a liquidar sus activos para transformarlos de productos/servicios en efectivo o equivalentes de efectivo.</p>

                    <div id="business-brokerage"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Corretaje Comercial (Para Compradores y Vendedores, ya sea Directo o por Referencia)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants puede proporcionar servicios de corretaje a aquellos que buscan facilitar la compra o venta de un negocio. Si está vendiendo, podemos armar el paquete de marketing, ayudar a determinar el precio apropiado para el negocio y hacer todo el trabajo preliminar necesario para comercializar el negocio para la venta. Si está comprando, podemos presentarle vendedores motivados y oportunidades que cumplan con sus objetivos o metas financieras.</p>

                    <div id="mergers-and-acquisitions"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Fusiones y adquisiciones (directas o por recomendación)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">El término fusiones y adquisiciones se refiere a la consolidación de empresas o de sus principales activos comerciales a través de transacciones financieras entre empresas. Una fusión describe dos empresas, de aproximadamente el mismo tamaño, que unen sus fuerzas para avanzar como una sola entidad nueva, en lugar de permanecer operadas y de propiedad separada. Por otro lado, cuando una empresa se hace cargo de otra y se establece como el nuevo propietario, la compra se denomina adquisición. CMF Consultants puede asistirlo en cualquier parte de este proceso.</p>

                    <div id="loans-and-grants-for-startups"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Préstamos y ayudas para startups</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Las subvenciones para pequeñas empresas proporcionan dinero gratis para nuevas empresas y empresas existentes. Hay muchos programas de subvenciones disponibles para pequeñas empresas, dependiendo de una variedad de factores de calificación. Se necesita tiempo y esfuerzo para investigar y solicitar financiamiento por su cuenta, pero CMF Consultants puede ayudar a su empresa a obtener subvenciones y préstamos a bajo interés para los que puede calificar.</p>

                    <div id="disaster-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Préstamos por Desastre</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Si su negocio sufrió daños físicos y está ubicado en un área declarada como desastre, CMF Consultants puede ayudarlo a buscar financiamiento para ayudar a cubrir los costos de reparación y reemplazo de activos físicos dañados en un desastre declarado. Las empresas de cualquier tamaño y la mayoría de las organizaciones privadas sin fines de lucro pueden calificar para un préstamo para recuperarse después de un desastre.</p>

                    <div id="short-term-lines-of-credit"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Líneas de crédito a corto plazo</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Una línea de crédito a corto plazo es una línea de crédito comercial con un plazo de préstamo de entre seis meses y un año. CMF Consultants puede ayudarlo a determinar si su negocio califica para una línea de crédito a corto plazo y puede ayudarlo a solicitar la mejor opción de préstamo para usted con el prestamista apropiado.</p>

                    <div id="certification-for-women-and-minority-loans-and-grants"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Certificación para préstamos y subvenciones para mujeres y minorías</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants se dedican a apoyar a mujeres y minorías en el desarrollo y crecimiento de sus pequeñas empresas. Tanto si pertenece a una minoría como si es propietario de una empresa, nos pondremos en contacto con usted para ayudarle a encontrar oportunidades de financiación y obtener acceso a capital para nivelar el campo de juego en el mundo empresarial.</p>

                    <div id="packaging-for-sba-loans-and-grants"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Embalaje para préstamos y subvenciones de la SBA</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Nuestro equipo especializado en CMF Consultants revisará su plan de negocios y lo ayudará a determinar la cantidad de financiamiento que probablemente respaldarán sus proyecciones, identificará posibles fuentes de financiamiento y lo ayudará a preparar un paquete de préstamo.</p>

                    <div id="business-plans-and-grant-writing"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Planes de negocios y redacción de subvenciones</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants se tomará el tiempo necesario para comprender el propósito y los servicios de su negocio a fin de mejorar su plan estratégico, al mismo tiempo que produce una propuesta de subvención para maximizar la probabilidad de recibir asistencia financiera. Ya sea que necesite preparar una propuesta de subvención que brinde resultados o desee mejorar su plan de negocios, ¡comuníquese con CMF Consultants para obtener más información! </p>

                    <div id="more"></div>
                    <br/>


                    <h2 class="fw-normal lh-1 mt-5 mb-2">Más</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Si un servicio que necesita no se encuentra en la lista anterior, no dude en contactarnos en una de nuestras oficinas, por correo electrónico o a través de nuestro formulario de contacto para que podamos encontrar una solución adecuada para usted. </p>

                </div>
                
            </div>
            
            <div class="row mt-2 justify-content-center bg-light">
                <div class="col-md-7  text-center p-5">
                    <h2 class="fw-normal lh-1  mb-4">¿Listo para empezar?</h2>
                    <hr/>

                    <p class="fs-5 lh-1 ">¡Estamos aquí para ayudar! ¡Contáctenos hoy para ver qué podemos hacer por usted y su negocio!</p>
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
            "Ayudar a las minorías y las empresas a alcanzar sus objetivos de financiación."
            </div>
        </footer>

    </div>
  )
}

export default ServicesSP
