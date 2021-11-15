import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="contact_info">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-10 offset-lg-1">
        <div className="contact_info_item d-flex justify-content start align-items-center"></div>
        <div className="contact_info_content">
        <div className="contact_info_title">Phone</div>
        <div className="contact_info_text">456934709385985</div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="contact_info">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-10 offset-lg-1  " >
        <div className="contact_info_item d-flex justify-content start align-items-center"></div>
        <div className="contact_info_content">
        <div className="contact_info_title">email</div>
        <div className="contact_info_text">xyz@gmail.com</div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="contact_info">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-10 offset-lg-1">
        <div className="contact_info_item d-flex justify-content start align-items-center"></div>
        <div className="contact_info_content">
        <div className="contact_info_title">addrerss</div>
        <div className="contact_info_text">las vegas</div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="contact-form">
            <div className="container">
                <div className="row">
                     <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form_container py-5">
                            <div className="contact_form-title">Get in touch</div>
        <form id="contact_form">
        <div className="contact_form_name d-flex justify-content-between aslign-items">
        <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="your name" required="true"></input>
        <input type="email" id="contact_form_email" className="contact_form_email input_field" placeholder="your email" required="true"></input>
        <input type="number" id="contact_form_number" className="contact_form_number input_field" placeholder="your number" required="true"></input>
        </div>

        <div className="contact_form_text">
            <textarea className="kjnj"></textarea>

        </div>

        <div className="contact_form_button"><button typeof="submit" >Send Message</button></div>
        
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        

        </>
    )
}

export default Contact
