import React from "react";
import "../styles/authentication.css";
import Google from "../images/google.png";
import AuthImage from "../images/authentication.png";

export default function Authentication() {

  return (
    <div className="authentication">
      <img src={AuthImage} className="auth-image" />
      <div className="google-button-wrapper mt-4">
        <div className="google-button-cover">
          <div className="google-image">
            <img src={Google} />
          </div>
          <div className="google-button-text">
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}
