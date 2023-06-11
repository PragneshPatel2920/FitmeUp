import React, { useEffect, useState } from 'react'
import aboutpic from "../images/aboutpic.png";
import p1 from "../images/r1.png"
import p2 from "../images/r2.png"

import { useHistory } from "react-router-dom";

const About = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
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
        <> <div className='bg-dark mt-2 p-1'>
            <div className="container emp-profile  bg-danger">

                <form method="GET">

                    <div className="row border bg-dark ">
                        <div className="col-md-4 bg-dark border">
                            <div className="profile-img">
                                <img src={aboutpic} alt="userpic" />
                                <h5 style={{ color: "white" }}>{userData.name}</h5>
                                <h6 style={{ color: "yellow" }} >{userData.phone}</h6>
                            </div>

                        </div>

                        <div className="col-md-6 p-2">
                            <div className="drop">
                                <h5 >User Information</h5>
                                <h6 style={{ color: "yellow" }} >{userData.name}</h6>
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><p className="profile-rating mt-3 mb-5 drop "> <h4>Weight</h4><span> 67 Kg </span></p></td>
                                            <td><p className="profile-rating mt-3 mb-5 drop "> <h4>Height</h4><span> 164 Cm </span></p></td>

                                        </tr>
                                        <tr>
                                            <td><p className="profile-rating mt-3 mb-5 drop "> <h4>Target Weight</h4><span> 72 Kg </span></p></td>


                                        </tr>

                                    </tbody>
                                </table>



                            </div>
                        </div>

                        <div className="col-md-2 p-2">
                            <button type="button" name="btnAddMore" class="btn btn-outline-warning">Edit Profile</button>
                        </div>

                    </div>



                    <div className="row mt-1 bg-dark border">
                        {/* left side url  */}
                        <div className="col-md-4  bg-dark border">
                            <div className="profile-work p-2 mt-1">
                                <div className="col-md-8 pl-5  about-info">
                                    <div className="tab-content profile-tab " id="myTabContent">
                                        <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <ul className="nav" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active drop" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><h4 className='drop'><u>About</u></h4></a>
                                                    </li>

                                                </ul>
                                                <div className="col-md-6">
                                                    <text className="drop">User Id</text>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{userData._id}</p>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <text className="drop">Name</text>
                                                </div>
                                                <div className="col-md-6 ">
                                                    <p>{userData.name}</p>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <text className="drop">Email</text>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{userData.email}</p>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <text className="drop">Phone</text>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{userData.phone}</p>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <text className="drop">Profession </text>
                                                </div>
                                                <div className="col-md-4">
                                                    <p>{userData.work}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right side data toogle  */}

                        <div className="col-md-4 bg-dark mx-1">

                            <table class="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Day</th>
                                        <th scope="col">Week</th>
                                        <th scope="col">Exersise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">1</th>
                                        <th scope="col">Mon</th>
                                        <th scope="col">Chest</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">2</th>
                                        <th scope="col">Tuey</th>
                                        <th scope="col">Shoulde</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">3</th>
                                        <th scope="col">Wed</th>
                                        <th scope="col">Back</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">4</th>
                                        <th scope="col">Thu</th>
                                        <th scope="col">Arms</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">5</th>
                                        <th scope="col">Fri</th>
                                        <th scope="col">Leg</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">6</th>
                                        <th scope="col">Sat</th>
                                        <th scope="col">Cardio</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">7</th>
                                        <th scope="col">Sun</th>
                                        <th scope="col">Rest</th>
                                    </tr>

                                </tbody>
                            </table>


                        </div>

                        <div className="col-md-3 mx-1 bg-dark p-2 mx-1">
                            <h3 className='drop'>Calories Burn</h3>
                            <div>
                                <img src={p1} alt="progress" />
                                <div className='mt-3'>
                                    <h3 className='drop'>Weekly Reports</h3>
                                    <img src={p2} alt="progress" />
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        </>
    )
}

export default About
