import React, { Component } from "react";
import "./ContactForm.css";
import Popup from "./Popup";
import axios from "axios";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      phonenumber: "",
      email: "",
      message: "",
      sent: false,
      showPopup: false,
    };
  }
  handlefname = (e) => {
    this.setState({
      fname: e.target.value,
    });
  };

  handlelname = (e) => {
    this.setState({
      lname: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhoneNumber = (e) => {
    this.setState({
      phonenumber: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  // handleChange = e=>{
  //     this.setState({
  //         [e.name]:e.target.value

  //     })
  // }
  handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/api/contact/sendEmail", this.state)
      .then((res) => {
        this.setState({
          sent: true,
        });
      })
      .then(() =>
        this.setState({
          showPopup: true,
        })
      )
      .catch(() =>
        this.setState({
          showPopup: true,
        })
      );
  };

  resetForm = () => {
    this.setState({
      fname: "",
      lname: "",
      phonenumber: "",
      email: "",
      message: "",
      sent: false,
      showPopup: false,
    });
  };

  render() {
    return (
      <div className="contactBody">
        <section id="section-wrapper">
          <div className="box-wrapper">
            <div className="info-wrap">
              <h2 className="info-title"> Contact Information</h2>
              <h3 className="info-sub-title">
                Fill up the form and our team will get back to you within 24
                hours
              </h3>

              <ul className="info-details">
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>Phone:</span> <a href="tel:+123456789">+91 123456789</a>
                </li>
                <li>
                  <i className="fas fa-paper-plane"></i>
                  <span>Email:</span>{" "}
                  <a href="mailto:offerz@gmail.com">offerz@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-globe"></i>
                  <span>Website:</span> <a href="/">offerz.com</a>
                </li>
              </ul>

              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="form-wrap">
              <form onSubmit={this.handleSubmit}>
                <h2 className="form-title">Send us a message</h2>
                <div className="form-fields">
                  <div className="form-group">
                    <input
                      name="fname"
                      type="text"
                      className="fname"
                      value={this.state.fname}
                      onChange={this.handlefname}
                      placeholder="First Name"
                    ></input>
                    <span></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="lname"
                      type="text"
                      className="lname"
                      value={this.state.lname}
                      onChange={this.handlelname}
                      placeholder="Last Name"
                    ></input>
                    <span></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="email"
                      placeholder="Mail"
                      value={this.state.email}
                      onChange={this.handleEmail}
                    ></input>
                    <span></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="phone"
                      value={this.state.phonenumber}
                      onChange={this.handlePhoneNumber}
                      placeholder="Phone"
                    ></input>
                    <span></span>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Write your message"
                      value={this.state.message}
                      onChange={this.handleMessage}
                    ></textarea>
                    <span></span>
                  </div>
                  <button
                    type="submit"
                    value="Send message"
                    className="submit-button"
                  >
                    Send message{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {this.state.sent && this.state.showPopup ? (
          <Popup
            msg={"Message is sent successfully"}
            resetForm={this.resetForm}
          />
        ) : this.state.showPopup ? (
          <Popup
            msg={"Message has not been sent something went wrong"}
            resetForm={this.resetForm}
          />
        ) : null}
      </div>
    );
  }
}

export default ContactForm;
