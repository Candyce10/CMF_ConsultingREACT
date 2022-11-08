import React from 'react'

function Testimonials() {
  return (
    <div>
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
                        <a href="#"><i class='bx bxl-linkedin'></i></a>
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
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                        <h1 class="mt-5">Testimonials</h1>
                        <p class="mx-auto fs-4">See what our customers are saying about us!</p>
                    </div>
                </div>
            </div>
        
        

            <div class="row featurette mt-4">

         
            <div >
                <div id="myCarousel" class="carousel slide c2"  data-bs-ride="carousel">
                   
                    <div class="carousel-inner shadow p-3 mb-5 bg-body rounded bg-light">
                        <div class="carousel-item active " >
                            <div class=" p-3 text-center review px-4" >
                                <div class="stars">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div class="user-content">
                                    <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</h3>
                                    <h5 class="mb-0">- Name</h5>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="p-3 text-center review px-4">
                                <div class="stars">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div class="user-content">
                                    <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</h3>
                                    <h5 class="mb-0">- Name</h5>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="p-3 text-center review px-4">
                                <div class="stars">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div class="user-content">
                                    <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</h3>
                                    <h5 class="mb-0">- Name</h5>
                                </div>
                            </div>
                        </div>
                    </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
      </div>
    
    </div>

    <hr class="featurette-divider"></hr>

        
    </div>    
    </div>
          
          
  )
}

export default Testimonials


// .carousel-control-prev-icon,
// .carousel-control-next-icon {
//   height: 100px;
//   width: 10px;
// }

// .carousel-control-next-icon:after
// {
//   content: '>';
//   font-size: 55px;
//   color: var(--brand);
// }

// .carousel-control-prev-icon:after {
//   content: '<';
//   font-size: 55px;
//   color: var(--brand);
// }