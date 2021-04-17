import React from 'react';
import './Footer.css'
import siting from '../../../Images/pngegg.png'
const Footer = () => {
   return (
      <section>
         <div class="footer-container">
         <div className="container mt-5 mb-5 pb-5 pt-5">
            <div className='row'>
               <div className="col-md-3">
                  <h2 class="yoga-con">Yoga for the <br/>untamed spirit</h2>
                  <img class="img-fluid" src={siting} alt=""/>
               </div>
               <div className="col-md-3">
                  <h5 className="text-color">SERVICES</h5>
                  <p className="mt-4 text-secondary">Emergency Medication Class <br/> Check Up </p>
                  <h5>PHOTO GALLERY</h5>
                  <div class="row">
                     <div className="col-md-4">

                     </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <h5 className="text-color">NEWSLETTER</h5>
                  <p className="mt-4 text-secondary"> One time 50% discount could <br/> immediately turn many subscribe </p>
                  <input type="email" name="" placeholder="Enter Your Email" id=""/>
               </div>
               <div className="col-md-3">
                  <h5 className="text-color">YOGA CENTER</h5>
                  <p className="mt-4 text-secondary">401 Danmondi, 22th floor,<br/> Dhaka view, Bangladesh  </p>
                  <p className="mt-5 text-secondary">Call Now</p>
                  <button type="button" class="btn btn-primary">+8801714653780</button>
               </div>
            </div>
         </div>
         <div>
            <footer className="footer mt-2">Copyright {(new Date()).getFullYear()} &copy; By Roni Sarkar</footer>
         </div>
     </div>
      </section>
   );
};

export default Footer;