import React from 'react'


function Home() {



  return (
    <div  data-bs-spy="scroll" data-bs-target=".navbar">
      <div class="top-nav" id="home">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-auto">
                    <p> <i class='bx bxs-envelope'></i> info.rgoldsteinconsulting@gmail.com</p>
                    <p> <i class='bx bxs-phone-call'></i> (702) 701-2992</p>
                </div>
                <div class="col-auto social-icons">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                </div>
            </div>
        </div>
    </div>
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
        <a class="navbar-brand" href="#">CMF CONSULTANTS<span class="dot">.</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">Services</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="#team">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#reviews">Reviews</a>
                </li>   
            </ul>
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3">Contact</a>
        </div>
    </div>
</nav>


<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item  active">
      <div class="slide slide1"> 
        <div class="row">
          <div class="col-12 text-center text-white">
              <h6 class="text-white text-uppercase">"Helping minorities and businesses reach their funding goals"</h6>
              <h1 class="display-3 my-4">COMMERCIAL & MINORITY<br />FUNDING CONSULTANTS</h1>
              <a href="#" class="btn btn-brand">Get Started</a>
              <a href="#" class="btn btn-outline-light ms-3">Our work</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item  ">
      <div class="slide slide2">
        <div class="row">
            <div class="col-12 text-white">
                <h6 class="text-white text-uppercase">We shop for loans and grants that fit your needs!</h6>
                <h1 class="display-3 my-4">MANAGEMENT CONSULTING <br />& BUSINESS TURNAROUND</h1>
                <a href="#" class="btn btn-brand">Get Started</a>
                <a href="#" class="btn btn-outline-light ms-3">Our work</a>
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
                <h1>About Us</h1>
                <p class="mx-auto">Give a brief description of your company.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-5 py-5">
        <div class="row">
          
            <div class="col-12 ">
                <div class="info-box about-sec">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt=""/>
                    <div class="ms-4">
                        <h5>Loans & Grants For Start Ups</h5>
                        <p>description of services goes here, description of services goes here, description of services</p>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="info-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt=""/>
                    <div class="ms-4">
                        <h5>Certification For Women & Minority Loans & Grants</h5>
                        <p>description of services goes here, description of services goes here, description of services</p>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="info-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt=""/>
                    <div class="ms-4">
                        <h5>Business Plans & Grant Writing</h5>
                        <p>description of services goes here, description of services goes here, description of services</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-5 mx-4">
        <img class="about-img" src="https://www.hubspot.com/hubfs/Consultant%20using%20fast%20tips%20to%20win%20consulting%20clients.jpg" alt=""/>
    </div>
</div>
</div>
</section>

<section id="milestone">
<div class="container">
<div class="row text-center justify-content-center gy-4">
    <div class="col-lg-2 col-sm-6">
        <h1 class="display-4">90K+</h1>
        <p class="mb-0">Insert Stat</p>
    </div>
    <div class="col-lg-2 col-sm-6">
        <h1 class="display-4">45M</h1>
        <p class="mb-0">Insert Stat</p>
    </div>
    <div class="col-lg-2 col-sm-6">
        <h1 class="display-4">190</h1>
        <p class="mb-0">Insert Stat</p>
    </div>
    <div class="col-lg-2 col-sm-6">
        <h1 class="display-4">380K</h1>
        <p class="mb-0">Insert Stat</p>
    </div>
</div>
</div>
</section>

<section id="services" class="text-center">
<div class="container">
<div class="row">
    <div class="col-12">
        <div class="intro">
            <h6>Our Services</h6>
            <h1>What We Do?</h1>
            <p class="mx-auto">Give a brief description of your services and how it can benefit the customer.</p>
        </div>
    </div>
</div>
<div class="row g-4">
    <div class="col-lg-4 col-md-6">
        <div class="service">
            <img src="img/icon1.png" alt=""/>
            <h5>Service</h5>
            <p>Service description goes here. Service description goes here. Service description goes here. Service description goes here.</p>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="service">
            <img src="img/icon2.png" alt=""/>
            <h5>Service</h5>
            <p>Service description goes here. Service description goes here. Service description goes here. Service description goes here.</p>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="service">
            <img src="img/icon3.png" alt=""/>
            <h5>Service</h5>
            <p>Service description goes here. Service description goes here. Service description goes here. Service description goes here.</p>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="service">
            <img src="img/icon4.png" alt=""/>
            <h5>Service</h5>
            <p>Service description goes here. Service description goes here. Service description goes here. Service description goes here.</p>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="service">
            <img src="img/icon5.png" alt=""/>
            <h5>Service</h5>
            <p>Service description goes here. Service description goes here. Service description goes here. Service description goes here.</p>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="service">
            <img src="img/icon6.png" alt=""/>
            <h5>Service</h5>
            <p>Service description goes here. Service description goes here. Service description goes here. Service description goes here.</p>
        </div>
    </div>
</div>
</div>
</section>



<section id="team">
<div class="container">
<div class="row">
    <div class="col-12">
        <div class="intro">
            <h6>Team</h6>
            <h1>Team Members</h1>
            <p class="mx-auto">Insert a brief statement of how great the team is. A max of three lines could make the content look great. </p>
        </div>
    </div>
</div>
<div class="row justify-content-center team-member-container">
    <div class="col-lg-3 col-md-8">
        <div class="team-member">
            <div class="image">
                <img src="https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1602201459458-2HFNJRLKR5GJDZZT9HJ8/corporate+business+headshots+los+angeles_Danielle+Spires.jpg" alt=""/>
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                </div>
                <div class="overlay"></div>
            </div>

            <h5>Person 1</h5>
            <p>Title</p>
        </div>
    </div>
    <div class="col-lg-3 col-md-8">
        <div class="team-member">
            <div class="image">
                <img src="https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1602201459458-2HFNJRLKR5GJDZZT9HJ8/corporate+business+headshots+los+angeles_Danielle+Spires.jpg" alt=""/>
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                </div>
                <div class="overlay"></div>
            </div>

            <h5>Person 2</h5>
            <p>Title</p>
        </div>
    </div>
    <div class="col-lg-3 col-md-8">
        <div class="team-member">
            <div class="image">
                <img src="https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1602201459458-2HFNJRLKR5GJDZZT9HJ8/corporate+business+headshots+los+angeles_Danielle+Spires.jpg" alt=""/>
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                </div>
                <div class="overlay"></div>
            </div>

            <h5>Person 3</h5>
            <p>Title</p>
        </div>
    </div>
</div>
</div>
</section>

<section class="bg-light" id="reviews">

<div class="owl-theme owl-carousel reviews-slider container">
<div class="review">
    
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quis, rem culpa labore voluptate
        ullam! In, nostrum. Dicta, vero nihil. Delectus minus vitae rerum voluptatum, excepturi incidunt ut,
        enim nam exercitationem optio ducimus!</h3>
    <div class="stars">
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
    </div>
    <i class='bx bxs-quote-alt-left'></i>
</div>
<div class="review">
    
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quis, rem culpa labore voluptate
        ullam! In, nostrum. Dicta, vero nihil. Delectus minus vitae rerum voluptatum, excepturi incidunt ut,
        enim nam exercitationem optio ducimus!</h3>

    <div class="stars">
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class="bx bxs-star-half"></i>
    </div>
    <i class='bx bxs-quote-alt-left'></i>
</div>
<div class="review">
    
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quis, rem culpa labore voluptate
        ullam! In, nostrum. Dicta, vero nihil. Delectus minus vitae rerum voluptatum, excepturi incidunt ut,
        enim nam exercitationem optio ducimus!</h3>
    <div class="stars">
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class="bx bxs-star-half"></i>
    </div>
    <i class='bx bxs-quote-alt-left'></i>
</div>
</div>
</section>





<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-xl">
<div class="modal-content">
    <div class="modal-body p-0">
        <div class="container-fluid">
            <div class="row gy-4">
                <div class="col-lg-4 col-sm-12 bg-cover"
                    style={{"background-image": "url(https://image.cnbcfm.com/api/v1/image/104107461-GettyImages-534572717.jpg?v=1529473279)", "min-height":"300px"}}>
                    <div>
                        
                    </div>
                </div>
                <div class="col-lg-8">
                    <form class="p-lg-5 col-12 row g-3">
                        <div>
                            <h1>Get in touch</h1>
                        <p>Feel free to contact us and we will get back to you as soon as possible</p>
                        </div>
                        <div class="col-lg-6">
                            <label for="userName" class="form-label">First name</label>
                            <input type="text" class="form-control" placeholder="Jon" id="userName"
                                aria-describedby="emailHelp"/>
                        </div>
                        <div class="col-lg-6">
                            <label for="userName" class="form-label">Last name</label>
                            <input type="text" class="form-control" placeholder="Doe" id="userName"
                                aria-describedby="emailHelp"/>
                        </div>
                        <div class="col-12">
                            <label for="userName" class="form-label">Email address</label>
                            <input type="email" class="form-control" placeholder="Johndoe@example.com" id="userName"
                                aria-describedby="emailHelp"/>
                        </div>
                        <div class="col-12">
                            <label for="exampleInputEmail1" class="form-label">Enter Message</label>
                            <textarea name="" placeholder="Leave your message here." class="form-control" id=""  rows="4"></textarea>
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btn-brand">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
</div>
</div>


    </div>
  )
}

export default Home
