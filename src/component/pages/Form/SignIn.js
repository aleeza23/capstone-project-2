import React from "react";
import "./Form.css";
import logo from "../../../Image/signinLogo.svg";
import {useState} from "react";
import {useNavigate} from "react-router";
import FormIcons from "./FormIcons";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [psdError, setPsdError] = useState("");
  const [errorMxg, seterrorMxg] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setPsdError("");
  };

  function formSubmit(e) {
    e.preventDefault();

    if (email === "") {
      setEmailError("Email is required*");
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid Email*");
    }
    if (password === "") {
      setPsdError("Password is required*");
    } else {
      const storedEmail = localStorage.getItem("Email");
      const storedPassword = localStorage.getItem("Password");
      const storedNewPassword = localStorage.getItem("NewPassword");
      const storedConfirmPassword = localStorage.getItem("ConfirmPassword");

      if (
        (email === storedEmail && password === storedPassword) ||
        (password === storedNewPassword && password === storedConfirmPassword)
      ) {
        setEmailError("");
        setPsdError("");
        seterrorMxg("");
        // Navigate to the desired page
        alert("Login Suuccessflly");
        navigate("/home");
      } else {
        setEmailError("");
        setPsdError("");
        seterrorMxg("Incorrect email or password*");
      }
    }
  }

  return (
    <div>
      <div className='main'>
        <div className='signUpBox shadow-sm'>
          <div className='row'>
            <div className='col-12'>
              <img src={logo} alt='logo' />
            </div>
            <div className='col-12'>
              <h1 className='signInHeading'>Sign In</h1>
            </div>
            <div className='col-12'>
              <span className='mt-2 text-muted'>
                Don't have an account?
                <a
                  className='text-decoration-none'
                  href='sign-up'
                  style={{color: "#754ffe"}}
                >
                  Sign Up
                </a>
              </span>
            </div>
          </div>

          <form onSubmit={formSubmit}>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter email here'
                value={email}
                onChange={handleEmail}
                autoSave='off'
                autoComplete='off'
              />
              <p className='text-danger'>{emailError}</p>
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                placeholder='********'
                value={password}
                onChange={handlePassword}
                autoComplete='off'
                autoSave='off'
              />
              <p className='text-danger'>{psdError}</p>
            </div>
            <p className='text-danger mt-2'>{errorMxg}</p>

            <a
              href='forgot-password'
              className='forgotPsdText text-decoration-none float-end mb-3'
            >
              Forgot Password?
            </a>

            <button
              type='submit'
              className='form-control text-white fw-bold btn mt-3'
              style={{backgroundColor: "#754ffe"}}
            >
              Sign in
            </button>
          </form>
          <hr />

          {/* social Icons */}
          <FormIcons />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
