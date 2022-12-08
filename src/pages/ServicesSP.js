import React, {useEffect} from 'react'

function ServicesSP() {
    useEffect(() => {
        document.title = 'Services & Workshops - CMF Consultants';
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
                    </ul>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3 my-2">Contact</a>
                </div>
            </div>
        </nav>
        
        <div class=" serv-header col-xxl-12 px-4 py-5">
            <div class="row align-items-center  g-5 py-5">

                <div class="col-lg-11  col-sm-11">
                    <h1 class="display-5 fw-bold lh-1 mb-3 serv-p">Services & Workshops</h1>
                    <p class="lead serv-p fs-5 lh-1 fs-4">Our dedicated team will work with you to understand and assist with achieving your goals. We serve small businesses like yours throughout America and will guide you throughout the entire process.
                    </p>
                    <p class="lead serv-p fs-5 lh-1 fs-4"> CMF Consultants is a one-stop-shop for business consulting and financial needs. Get started today!
                    </p>
                    <br/>
                    <a href="#workshops" class="btn btn-brand ms-lg-3">Jump to Workshops</a>
                </div>
            </div>
        </div>
      
        <div class="container-fluid ">    
            <div class="row">
                <div class="col-md-7 p-5 ">
                    <h2 class=" fw-normal lh-1 ">Our Services </h2>
                    <hr/>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#business-management-consulting">Business Management Consulting  (Main Street Businesses and up to Middle Market Companies)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#main-street-and-early-stage-plans">Main Street and Early-Stage Venture Business Plans</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#venture-capital-consulting">Venture Capital Consulting (Both Debt and Equity)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#business-turnarounds">Business Turnarounds</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#asset-based-lenders">Asset Based Lenders (On Real Estate, A/R, Inventory, Equipment)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#sba-lenders">SBA Lenders (7A, 504 & CDC)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#commercial-real-estate-loans">Commercial Real Estate Loans (All Areas Covered, Rehab, Bridge, Apartments, Retail)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#specialty-finance-areas">Specialty Finance Areas (Cannabis, Gas Stations, Solar Areas & Trade Finance)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#hard-money-loans">Hard Money Loans</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#asset-liquidation-and-disposition">Asset Liquidation and Disposition</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="business-brokerage">Business Brokerage (For Buyers and Sellers, Either Direct or By Referral)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#mergers-and-acquisitions">Mergers & Acquisitions (Direct or By Referral)</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#loans-and-grants-for-startups">Loans and grants for start-ups</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#disaster-loans">Disaster Loans</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#short-term-lines-of-credit">Short term lines of credit</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#certification-for-women-and-minority-loans-and-grants">Certification for women & minority loans & grants</a></p>
                    <p class="fs-5 lh-1 text-capitalize d-flex"><a href="#packaging-for-sba-loans-and-grants">Packaging for SBA loans & grants</a></p>
                    <p class="fs-5 text-capitalize lh-1 d-flex"><a href="business-plans-and-grant-writing">Business plans & grant writing</a></p>
                    <p  class="fs-5 text-capitalize lh-1"><a href="#more">& more!</a></p>
                  
                   
                </div>
                <div class="col-md-5 mb-5 align-items-center" style={{"margin-top":"100px"}}>
                    <img class="service-img " src="https://blog.hubspot.com/hubfs/how-to-become-a-consultant.jpg"/>
                    <div class="green2"></div>
                </div>
            </div>
            <div id="workshops"></div>
            <br/>
            <div  class="row mt-2">
                <div class="col-md-7 order-md-2 text-end p-5">
                    <h2 class="fw-normal lh-1  mb-4">Join a Workshop</h2>
                    <hr/>

                    <p class="fs-5 lh-1 text-capitalize">Pivot your career by starting a business</p>
                    <p class="fs-5 lh-1 text-capitalize">What you need to start a business</p>
                    <p class="fs-5 lh-1 text-capitalize">Support workshop for how to start a business</p>
                    <p class="fs-5 lh-1 text-capitalize">The psychology and mind you will need to start up a business</p>
                    <p class="fs-5 lh-1 text-capitalize">How to promote your business</p>
                    <p class="fs-5 lh-1 text-capitalize" >How to pitch investors</p>
        

                </div>
                <div class="col-md-5 order-md-1 mb-5" >
                    <img src="https://www.redhat.com/cms/managed-files/styles/max_size/s3/RH-consulting-hero-0722-915x768.jpg?itok=jQu6uljp"/>

                </div>
            </div>

            <div id="business-management-consulting"></div>
            <br/>

            <div class="row mt-2 ">
                <div class="col-md-12   p-5">
                    <h2  class="fw-normal lh-1  mb-2">Business Management Consulting (Main Street Businesses And Up To Middle Market Companies)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants can assist in many of the needs your business might have.  We work closely with business owners and managers to help identify, address, and overcome obstacles to achieving a company’s goals. Business management consulting includes: </p>
                    ‌<ul>
                        <li>Assist in business planning and creating new businesses</li>
                        <li>Identify obstacles that are preventing business growth and/or efficiency</li>
                        <li>‌Determine what changes need to be made and help implement changes</li>
                        <li>Provide any necessary training and resources to staff and management</li>
                        <li>Bring out-of-the-box ideas to refresh a business</li>
                        <li >Analyze a company’s budget, suggest adjustments, and help put those adjustments in place</li>
                    </ul>

                    <div id="main-street-and-early-stage-plans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Main Street And Early-Stage Venture Business Plans</h2>
                    <hr/>
                    <p class="fs-5 lh-1 ">Main Street is used to describe small and mid-sized businesses as part of a local economy. They are typically locally-owned and the likely buyer is generally local, as well. Main Street businesses do not enjoy the benefit of the so-called “size premium” when being valued; something that might apply to larger businesses that, by virtue of their size, would appear to present a lower level of risk. </p>
                    <p class="fs-5 lh-1 ">Early-stage is a term used to characterize a startup business venture. It is characterized by activities such as research development, marketing research, and product business development, and generally have limited revenue, sales, and market share. The probability of success of venture depends heavily upon actions taken during this stage, and CMF Consultants can assist with mapping out your plan.</p>
                    <p class="fs-5 lh-1 " >CMF Consultants will cultivate a strategic and comprehensive approach to catapult you and your business forward! </p>

                    <div id="venture-capital-consulting"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Venture Capital Consulting (Both Debt And Equity)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 " >Venture capital is a type of financing and a form of private equity that investors provide to startup companies and small businesses that are believed to have long-term growth potential. We will help match your company with strategic venture capital investors, as well as strategic partners that will generate revenue for your company.  </p>

                    <div id="business-turnarounds"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Business Turnarounds</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">If you find your business needing assistance with crisis management and cash flow challenges, CMF Consultants will prioritize your cash flow management, work with your lenders, and do what is needed to get your business back on track and ready for new growth. Your company may need turnaround services if: </p>
                    ‌<ul>
                        <li>Your sales are growing but you never have enough cash available</li>
                        <li>Your debt keeps increasing or debt payments are eating up your cash</li>
                        <li>You regularly struggle to make payroll</li>
                        <li>Vendors and contractors are asking about late bills or threatening to stop doing business with you</li>
                        <li> Your company is consistently profitable, but you are running out of cash</li>
                        <li>Your company is suddenly unprofitable, and your accounting staff is unable to tell you why</li>
                    </ul>

                    <div id="asset-based-lenders"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Asset Based Lenders (On Real Estate, A/R, Inventory, Equipment)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants can help leverage a variety of company assets—accounts receivable, inventory, fixed assets (including machinery & equipment), commercial real estate, and more to secure financing solutions, including revolving lines of credit, letters of credit, and term loans. We use our in-depth understanding of collateral and cash flow cycles to build customized solutions for companies experiencing high leverage, potential acquisitions, growth through new products or market expansion, recapitalizations, or turnarounds.</p>


                    <div id="sba-lenders"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">SBA Lenders (7A, 504 & CDC)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">The Small Business Administration (SBA) offers a variety of loans to finance your business. CMF Consultants can help you and your business find and apply for a 7(a) or 504 loan to promote business growth and job creation. If your business is not already certified by Certified Development Companies (CDCs), we can help you apply so that you can be eligible for a 504 loan. </p>

                    <div id="commercial-real-estate-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Commercial Real Estate Loans (All Areas Covered, Rehab, Bridge, Apartments, Retail)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">If your business is an income-producing property that is purchased or developed primarily in order to earn income by renting or leasing it out to others, CMF Consultants can assist with finding the appropriate financing for the acquisition, development, and construction of these properties.</p>

                    <div id="specialty-finance-areas"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Specialty Finance Areas (Cannabis, Gas Stations, Solar Areas & Trade Finance)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Specialty financing can be broadly defined as non-bank lenders that target commercial and consumer borrowers that are not adequately served by traditional banking channels. Your business needs might be unique or complex, obtaining non-standard financing doesn’t have to be complicated. We have a dedicated team with expertise in specialty finance lending to get your company the financial assistance it needs.</p>

                    <div id="hard-money-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Hard Money Loans</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">A hard money loan is a form of asset-based financing where the funds of the borrower will be secured from the value of a property’s equity. If you need to borrow funds over a short-term but need cash quickly, we will help you find the very best rates in which you qualify for, and ultimately save you money in the long run.</p>

                    <div id="asset-liquidation-and-disposition"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Asset Liquidation And Disposition</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Asset disposition describes any direct or indirect sale, lease, transfer, issuance or other disposition of the physical assets a company has. This can range from products to even assets such as stocks and bonds. CMF Consultants can help companies liquidate their assets to transform them from products/services into cash or cash equivalents.</p>

                    <div id="business-brokerage"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Business Brokerage (For Buyers And Sellers, Either Direct Or By Referral)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants can provide brokerage services to those seeking to facilitate the buying or selling of a business. If you are selling, we can put together the marketing package, help determine the appropriate price for the business, and do all the leg work necessary to market the business for sale. If you are buying, we can present motivated sellers and opportunities that meet your financial objectives or goals. </p>

                    <div id="mergers-and-acquisitions"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Mergers & Acquistions (Direct or By Referral)</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">The term mergers and acquisitions (M&A) refers to the consolidation of companies or their major business assets through financial transactions between companies. A merger describes two firms, of approximately the same size, that join forces to move forward as a single new entity, rather than remain separately owned and operated. On the other hand, when one company takes over another and establishes itself as the new owner, the purchase is called an acquisition. CMF Consultants can assist you with any part of this process.</p>

                    <div id="loans-and-grants-for-startups"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Loans And Grants For Start-Ups</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Small-business grants provide free money for startups and existing businesses. There are many grant programs available to small businesses, depending on a variety of qualifying factors. It takes time and effort to research and apply for funding on your own, but CMF Consultants can help your business secure grants and low interest loans that you may qualify for.</p>

                    <div id="disaster-loans"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Disaster Loans</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">If your business has sustained physical damage and is located in a declared disaster area, CMF Consultants can help you search for funding to help cover the costs of repairs and replacement of physical assests damaged in a declared disaster. Businesses of any size and most private nonprofit organizations may qualify for a loan to recover after a disaster.</p>

                    <div id="short-term-lines-of-credit"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Short Term Lines Of Credit</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">A short-term line of credit is a business line of credit with a loan term between six months and one year. CMF Consultants can assist you with determining if your business qualifies for a short-term line of credit and can help you apply for the best loan option for you with the appropriate lender.</p>

                    <div id="certification-for-women-and-minority-loans-and-grants"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Certification For Women & Minority Loans & Grants</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants are dedicated to supporting women and minorities in the development and growth of their small businesses. If you are a woman or minority business owner, we will connect with you to help you find funding opportunities and gain access to capital to level the playing field in the business world.</p>

                    <div id="packaging-for-sba-loans-and-grants"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Packaging For SBA Loans & Grants</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">Our specialized team at CMF Consultants will review your business plan and help you determine the amount of financing your projections will likely support, identify potential sources of financing, and help you prepare a loan package.</p>

                    <div id="business-plans-and-grant-writing"></div>
                    <br/>

                    <h2 class="fw-normal lh-1 mt-5 mb-2">Business Plans & Grant Writing</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">CMF Consultants will take the time to understand the purpose and services of your business in order to enhance your strategic plan, while producing a grant proposal to maximize the probability of receiving financial assistance. Whether you need to prepare a grant proposal that will deliver results or want to improve your business plan, contact CMF Consultants to learn more! </p>

                    <div id="more"></div>
                    <br/>


                    <h2 class="fw-normal lh-1 mt-5 mb-2">More</h2>
                    <hr/>
                    <p class="fs-5 lh-1 mb-0">If a service you need is not listed above, please feel free to contact us at one of our offices, via e-mail, or through our contact form so that we can come up with a solution that is right for you! </p>

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

export default ServicesSP
