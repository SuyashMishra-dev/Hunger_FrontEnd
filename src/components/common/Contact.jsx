import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact-info" className="py-3">
        <div className="container">
          <h1 className="l-heading">
            <span className="text-primary1">Contact</span> Us
          </h1>
          <p>Please fill out the form below to contact us</p>
          <form action="process.python">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea type="text" name="message" id="message"></textarea>
            </div>
            <button type="submit" className="my-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
