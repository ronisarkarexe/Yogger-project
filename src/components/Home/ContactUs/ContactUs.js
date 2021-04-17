import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css'

const ContactUs = () => {
   return (
      <div class="container contact-form">
      <form method="post">
          <h3>Drop Us a Message</h3>
         <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                  </div>
                  <div class="form-group">
                      <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                  </div>
                  <div class="form-group">
                      <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                  </div>
                  <div class="form-group">
                      <Link to="/"><input type="submit" name="btnSubmit" class="btnContact" value="Send Message" /></Link>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <textarea name="txtMsg" class="form-control from-style" placeholder="Your Message *" ></textarea>
                  </div>
              </div>
          </div>
      </form>
      <div>
      <p>Back To Main Page <Link to="/">HOME</Link></p>
      </div>
</div>
   );
};

export default ContactUs;