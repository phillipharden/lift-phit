import React from "react";
import Hero from "../assets/contact-banner.png";

function Contact() {
  return (
    <div className=" vh-100 contact-bg">
      <div className="container mt-1 contact-box rounded p-5">
        <img className="img-fluid mb-1 rounded" src={Hero} />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2>Contact</h2>
          <p>We would love to hear from you!</p>
        </div>

        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4 align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <h4>Location:</h4>
                  <p>123 Sesame Street, New York, NY 53502</p>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <h4>Email:</h4>
                  <p>info@liftphit.com</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <h4>Call:</h4>
                  <p>+1 770 867 5309</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form action="" method="post" role="form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary mt-4" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
