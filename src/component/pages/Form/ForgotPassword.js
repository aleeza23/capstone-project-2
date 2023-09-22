import React from "react";
import logo from "../../../Image/signinLogo.svg";
// import "./ForgotPassword.css";
import {useState} from "react";
import {useNavigate} from "react-router";
import './Form.css'



function ForgotPassword() {
    const navigate = useNavigate();


  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [newPasswordError, setnewPasswordError] = useState("");
  const [confirmPasswordError, setconfirmPasswordError] = useState("");
  const [pasNotMatch, setpasNotMatch] = useState("");

  const handleNewPsd = (event) => {
    setnewPassword(event.target.value);
    setnewPasswordError("");
  };
  const handleConfirmPsd = (event) => {
    setconfirmPassword(event.target.value);
    setconfirmPasswordError("");
  };

  function handleReset(e) {
    e.preventDefault();
    
    if (newPassword === "") {
      setnewPasswordError("Password is required*");
    }
    if (confirmPassword === "") {
      setconfirmPasswordError("Password is required*");
    } else if (newPassword !== confirmPassword) {
      setpasNotMatch("Password not same*");
    } else {
      localStorage.setItem("NewPassword", newPassword);
      localStorage.setItem("ConfirmPassword", confirmPassword);
      alert("Password Reset suucessfully");
      navigate("/sign-in")
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
              <h1 className='signInHeading'>Forgot Password</h1>
            </div>
            <div className='col-12'>
              <span className='mt-2 text-muted'>
                Fill the form to reset your password.
              </span>
            </div>
          </div>

          <form onSubmit={handleReset}>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label mt-4'>
                Enter New Password
              </label>
              <input
                onChange={handleNewPsd}
                value={newPassword}
                type='password'
                className='form-control'
                placeholder='New Password'
                
              />
              <p className='text-danger mt-2'>{newPasswordError}</p>
            </div>
            <div className='mb-4'>
              <label htmlFor='exampleInputEmail1' className='form-label '>
                Confirm Password
              </label>
              <input
                onChange={handleConfirmPsd}
                value={confirmPassword}
                type='password'
                className='form-control'
                placeholder='Confirm Password'
                
              />
              <p className='text-danger mt-2'>{confirmPasswordError}</p>
            </div>

            <p className='text-danger mt-2'>{pasNotMatch}</p>

            <button
              type='submit'
              className='form-control text-white fw-bold btn mt-2'
              style={{backgroundColor: "#754ffe"}}
            >
              Reset Password
            </button>
            <span className='text-muted'>Return to</span>
            <a
              href='sign-in'
              className='text-decoration-none '
              style={{color: "#754ffe"}}
            >
              
              sign in
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
