import React from "react";
import "./About.css";
const img1 = require("../assets/app.svg");
const img2 = require("../assets/dm.svg");

function About() {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center mt-5 display-3 fw-bold">
          About <span className="theme-text">Us</span>
        </h1>
        <hr className="mx-auto mb-5 w-25" />
        <div className="row mb-5">
          <div className="col-12 col-sm-3 col-md-3 m-auto">
            <div className="card shadow">
              <img src={img1} alt className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Our Mission</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  eligendi soluta est veniam sequi nemo, quas delectus eveniet
                  ducimus rem animi. Natus non earum deleniti aliquam
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={img2} alt className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Digital Marketing</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  eligendi soluta est veniam sequi nemo, quas delectus eveniet
                  ducimus rem animi. Natus non earum deleniti aliquam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
