import React, {useEffect, useState}  from 'react'
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import d1 from "../../images/HomeCard/d1.jpg";
import d2 from "../../images/HomeCard/d2.jpg";
import d3 from "../../images/B1.png";
import d4 from "../../images/B2.png";


const Training = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/services/training', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <> 
            <div className='bg-dark mt-2 p-2'>
                <div className="container p-2 bg-dark">
            <div className='bg-dark'>
     <div class="container bg-dark p-3 my-2">
    <div class="row mb-2">
      <div class="col-md-6">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-1 mx-1">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">Training</strong>
            <h3 class="mb-0 drop">Fit and Fine</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">Here, <br /> we provide you Training. <p>Click The Botton</p> </p>
              <NavLink exact activeClassName="active-page"  to="/services/training"> <button type="button" class="btn btn-primary">Training</button> </NavLink>
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
            <p class="mb-auto">Here, <br /> Is your exercise schedule. <p>Click The Botton</p></p>
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
            <p class="card-text mb-auto">Here, <br />You Can Calculate Your BMI. <p>Click The Botton</p></p>
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
            <strong class="d-inline-block mb-2 text-warning">Weekly Report</strong>
            <h3 class="mb-0 drop">See Your Report</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="card-text mb-auto">Here, <br />You Can See Your Weekly Report. <p>Click The Botton</p></p>
              <NavLink exact activeClassName="active-page"  to="/about"> <button type="button" class="btn btn-warning">Report</button> </NavLink>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img class="bd-placeholder-img" width="200" height="250" src={d4} alt=""/>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div></div>
            </div>
        </>
    )
}

export default Training

