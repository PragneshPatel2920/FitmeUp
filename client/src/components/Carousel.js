import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import c1 from "../images/Carousel/1.jpg";
import c2 from "../images/Carousel/2.jpg";
import c3 from "../images/Carousel/3.jpg";
import Payment from './Payment';

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={c1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
          <h3>Join Membership </h3>
          <p>And Get flat 65% Now</p>
          <Payment/>
        </div>
    </div>
    <div class="carousel-item">
    <NavLink exact activeClassName="active-page"  to="/services/exersise"><img src={c2} class="d-block w-100" alt="..."/></NavLink>
      <div class="carousel-caption d-none d-md-block">
          <h3>Exercise Plan</h3>
          <p>For a Beginner</p>
          <NavLink exact activeClassName="active-page"  to="/services/exersise"><button type="button" class="btn btn-warning">Exersise </button></NavLink>
        </div>
    </div>
    <div class="carousel-item">
    <NavLink exact activeClassName="active-page"  to="/services/diet"><img src={c3} class="d-block w-100" alt="..."/></NavLink>
      <div class="carousel-caption d-none d-md-block">
          <h3>BMI Calculator</h3>
          <p>Calculate Your BMI Here</p>
          <NavLink exact activeClassName="active-page"  to="/services/diet"><button type="button" class="btn btn-danger">BMI Calculator </button></NavLink>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
    
  </>
  )
}

export default Carousel
