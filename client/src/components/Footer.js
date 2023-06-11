import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import yt from "../images/Yt.png"
import Fb from "../images/Fb.png"
import twt from "../images/twt.png"
import insta from "../images/insta.png"


const Footer = () => {
  return (
    <>

      <div class=" bg-dark footer-dark mt-2">
        <footer>
          <div class="container bg-dark">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Contact</h3>

                <ul>
                  <li><a href="#"><h3>Unnati informatics</h3></a></li>
                  <li><a href="#">306, Shivam Complex,</a></li>
                  <li><a href="#">Ahmedabad, Gujarat</a></li>
                  <li><a href="#">380061</a></li>

                </ul>
              </div>

              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><NavLink exact activeClassName="active-page"  to="/services/training">Personal Training </NavLink></li>
                  <li><NavLink exact activeClassName="active-page"  to="/services/Exersise">Exersise </NavLink></li>
                  <li><NavLink exact activeClassName="active-page"  to="/services/diet">Deit </NavLink></li>
                  <li><NavLink exact activeClassName="active-page"  to="/services/calory">BMI Calculator </NavLink></li>

                </ul>
              </div>

              <div class="col-md-6 item text">
                <h3>FitMeUp </h3>
                <p>Starting a fitness program may be one of the best things you can do for your health. Physical activity can reduce your risk of chronic disease, improve your balance and coordination</p>
              </div>
              
              <div class="col item d-flex align-items-center justify-content-center">
                <a href="https://www.facebook.com/" target="_blank"><i class="icon ion-social-facebook"><img className='sociallogo mx-1'  src={Fb} alt="Facebook" /></i></a>
                <a href="https://twitter.com/home" target="_blank"><i class="icon ion-social-twitter"></i><img className='sociallogo mx-1' src={twt} alt="Twitwr" /></a>
                <a href="https://www.youtube.com/" target="_blank"><i class="icon ion-social-Youtube"><img className='sociallogo mx-1' src={yt} alt="Youtube" /></i></a>
                <a href="https://www.instagram.com/pragnesh_2920/" target="_blank"><i class="icon ion-social-instagram"><img className='sociallogo mx-1' src={insta} alt="Instagram" /></i></a></div>
            </div>

            <div class="row d-flex justify-content-center mt-3">
              <div class="col-auto">
                <p class="pt-2 drop">
                  <strong>Notify Email</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">
                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example24" class="form-control"/>
                <div class="form-notch"><div class="form-notch-leading"></div><div class="form-notch-middle" ></div><div class="form-notch-trailing"></div></div></div>
              </div>

              <div class="col-auto">
                <button type="submit" class="btn btn-outline-danger mb-4">
                  Subscribe
                </button>
              </div>
            </div>
            <p class="copyright">FitMeUp - Fit Your Self © 2022</p>
          </div>
        </footer>
      </div>

    </>
  )
}

export default Footer
