import React from 'react'
import { NavLink } from 'react-router-dom';
import d1 from "../images/HomeCard/d1.jpg";
import d2 from "../images/HomeCard/d2.jpg";
import d3 from "../images/HomeCard/d3.jpg";
import d4 from "../images/HomeCard/d4.jpg";

const Homecard = () => {
  return (
   <>
   <div className='bg-dark'>
     <div class="container bg-dark p-3 my-2">
    <div class="row mb-2">
      <div class="col-md-6">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-1 mx-1">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">Fitneess</strong>
            <h3 class="mb-0 drop">Fit and Fine</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to
              additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img class="bd-placeholder-img" width="200" height="250" src={d2} alt=""/>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-1">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Exersise</strong>
            <h3 class="mb-0 drop">Daily Exersise</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
              content.</p>
              <NavLink exact activeClassName="active-page"  to="/services/exersise"> <button type="button" class="btn btn-warning">Exersise</button> </NavLink>

          </div>
          <div class="col-auto d-none d-lg-block">
            <img class="bd-placeholder-img" width="200" height="250" src={d1} alt=""/>

          </div>
        </div>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-md-6">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-1">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-danger">Food</strong>
            <h3 class="mb-0 drop">Check Your BMI</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">The healthy way of life company
              Get a jump on your day.
              The only bad workout is no workout.</p>
              <NavLink exact activeClassName="active-page"  to="/services/calory"> <button type="button" class="btn btn-danger">BMI Calculate</button> </NavLink>
             
           
          </div>
          <div class="col-auto d-none d-lg-block">
            <img class="bd-placeholder-img" width="200" height="250" src={d3} alt=""/>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-1">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-warning">Meditation</strong>
            <h3 class="mb-0 drop">Do Meditation</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
              content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img class="bd-placeholder-img" width="200" height="250" src={d4} alt=""/>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
   </>
  )
}

export default Homecard
