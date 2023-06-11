import React from 'react'
import About1pic from "../images/A1.jpg"
import Abotdiet from "../images/Abotdiet.png"

const AboutUs = () => {
  return (
    <>
      <div className="mt-2 bg-dark p-4">
        <div>
          <div className="row">
            <div class="row mb-2 bg-danger mt-0">
              <h2 className='drop'>AboutUs</h2>
            </div>
            <div class="row mb-2 mt-1">
              <div class="col-md-6 drop">
                <p ><h2 className='drop'> Fitness is not a destination, it’s a journey.</h2><br />
                  Formed with a vision to encourage and inspire people to adopt a healthy lifestyle, FitMeUp helps you in identifying the best types of workouts, diets and nutrition plans that can help you reach your fitness goals. Having a personal trainer by your side can provide the motivation, energy and encouragement you need to jumpstart your routine. So if you are working hard and still not seeing results, don’t lose hope. Our enthusiastic and knowledgeable team can help you achieve your fitness goals and motivate you to live a healthy lifestyle by providing bespoke fitness and nutrition plans tailored to your requirements</p>
              </div>
              <div class="col-md-5 drop p-2 my-3">
                <img src={About1pic} alt="image" />
              </div>
            </div>
            <div class="text-center">
            <h2 className='drop'>Services</h2>
            </div>

            <div>
            <div className='my-4'>
              <div className="col-lg-10 offset-lg-1">
                 <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start bg-dark container">
                         <div className="contact_info_image2 mt-4">
                         <img src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/66/000000/external-gym-games-smashingstocks-outline-color-smashing-stocks.png"/>
                         </div>
                         <div className="contact_info_content">
                             <div className="contact_info_title drop">Training</div>
                             <div className="contact_info_text drop">We Are Providing You Personal Training and personal Guide.</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start bg-dark container">
                         <div className="contact_info_image2 mt-4">
                         <img src="https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-exercise-stay-home-activities-linector-lineal-color-linector.png"/>
                         </div>
                         <div className="contact_info_content">
                             <div className="contact_info_title drop">Exersise</div>
                             <div className="contact_info_text drop">We Are Providing You Personal Training and personal Guide.</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start bg-dark container">
                         <div className="contact_info_image2 mt-4">
                         <img src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-dish-restaurant-photo3ideastudio-gradient-photo3ideastudio.png"/>
                         </div>
                         <div className="contact_info_content">
                             <div className="contact_info_title drop">Diet</div>
                             <div className="contact_info_text drop">We Are Providing You Costomize Diet with Nutaration information.</div>
                         </div>
                     </div> 
                     
                 </div>
             </div>
             </div>
            </div>

            <div class="text-center mt-5">
              <h2 className='drop'>Contact Us</h2>
            </div>
            <div className='my-3'>
            <div className="row">
             <div className="col-lg-10 offset-lg-1">
                 <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start bg-dark container">
                         <div className="contact_info_image">
                         <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="" /></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title drop">Phone</div>
                             <div className="contact_info_text drop">+91 98249 84674 <br /> +91 63555 65881 </div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start bg-dark container">
                         <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="" /></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title drop">Email</div>
                             <div className="contact_info_text drop">pagupatel29@gmail.com <br />patelrahul205200@gmail.com</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start bg-dark container">
                         <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="" /></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title drop">Address</div>
                             <div className="contact_info_text drop">Ahmedabad, <br />Gujarat 380061</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
