

function Contact() {


  return (
    <div>
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
                            <form class="p-lg-5 col-12 row g-3" >
                                <div>
                                    <h1>Get in touch</h1>
                                <p>Feel free to contact us and we will get back to you as soon as possible</p>
                                </div>
                                <div class="col-lg-6">
                                    <label for="userName" class="form-label">First name</label>
                                    <input type="text" class="form-control" placeholder="Jon" id="userName" name="first name"
                                        aria-describedby="emailHelp" required/>
                                </div>
                                <div class="col-lg-6">
                                    <label for="userName" class="form-label">Last name</label>
                                    <input type="text" class="form-control" placeholder="Doe" id="userName" name="last name"
                                        aria-describedby="emailHelp" required/>
                                </div>
                                <div class="col-12">
                                    <label for="userName" class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder="Johndoe@example.com" id="userName" name="email"
                                        aria-describedby="emailHelp" required/>
                                </div>
                                <div class="col-12">
                                    <label for="exampleInputEmail1" class="form-label">Enter Message</label>
                                    <textarea name="message" placeholder="Leave your message here." class="form-control" id=""  rows="4" required style={{"resize":"none"}}></textarea>
                                </div>
                                <input type="hidden" name="_subject" value="New Contact Submission"></input>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-brand"  >Send Message</button>
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

export default Contact
