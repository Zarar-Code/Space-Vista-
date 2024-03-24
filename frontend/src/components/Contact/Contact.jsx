import React from 'react'
import "./Contact.css"
import {HiOutlineMail, HiOutlinePhoneMissedCall} from "react-icons/hi"
import {FaRegAddressCard} from "react-icons/fa"

const Contact = () => {
  return (
    <>
    <div className="contact-section-bg">
    <div className="overlay"></div>
    <div className="contact-content-container">
        <h1 className="contact-heading">
            CONTACT US
        </h1>
    </div>
    </div>
    {/* <div className="contact-content"> */}
    <h1 className='how'>HOW CAN I HELP YOU?</h1>
    <div class="contact-form-wrapper my ">
        <form method="POST" class="contact-form">
          <h1 className='cont-head'>CONTACT US</h1>
          <p class="description">Feel free to contact us if you need any assistance, any help or another question.
          </p>
          <div>
            <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" name='Name' placeholder="Name" required/>
          </div>
          <div>
            <input type="email" class="form-control rounded border-white mb-3 form-input" name='Email' placeholder="Email" required/>
          </div>
          <div>
            <input type="text" class="form-control rounded border-white mb-3 form-input" name='subject' placeholder="Subject" required/>
          </div>
          <div>
            <textarea id="comment" name='comment' class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Comment" required></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input type="submit" value="Send"/>
          </div>
        </form>
        
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.272516306416!2d70.37177987428271!3d28.380835895468188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375efadd8e3573%3A0xf516a4b3e4cb06b8!2sKhwaja%20Fareed%20University%20of%20Engineering%20%26%20Information%20Technology%20(KFUEIT)!5e0!3m2!1sen!2s!4v1711057560473!5m2!1sen!2s" 
        title="map"
        width="600" 
        height="450" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="cont-detail">
                            <div class="card" style={{width: "18rem"}}>
                          <div class="card-body">
                          <div className="email">< FaRegAddressCard/></div> 
                            <h5 class="card-title">Our Address</h5>
                            <p class="card-text">RANDOM ADDRESS</p>
                          </div>
                        </div>
                            <div class="card" style={{width: "18rem"}}>
                          <div class="card-body">
                          <div className="email">< HiOutlineMail/></div> 
                            <h5 class="card-title">Email Us</h5>
                            <p class="card-text">AB@gmail.com</p>
                          </div>
                        </div>
                            <div class="card" style={{width: "18rem"}}>
                          <div class="card-body">
                          <div className="email">< HiOutlinePhoneMissedCall/></div> 
                            <h5 class="card-title">Call Us</h5>
                            <p class="card-text">+92 3098765</p>
                          </div>
                        </div>
                        </div>
        {/* </div> */}
    </div>
    </>
  )
}

export default Contact