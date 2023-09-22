import React from "react";
import logo from "../../../Image/logo.png";
import avater from "../../../Image/avater.jpg";
import "./Header.css";
import {IoMdNotificationsOutline} from "react-icons/io";
import {BsBrightnessHighFill} from "react-icons/bs";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <nav className='navbar shadow-sm navbar-expand-lg navbar-light bg-white ms-auto me-auto'>
        <div className='container-fluid'>
          <img className='navbar-brand' src={logo} alt='img' />

          <a href='#' className='d-block d-lg-none float-end lightBlueIcon'>
            <BsBrightnessHighFill style={{fontSize: "1.5rem", color: "gray"}} />
          </a>
          <a href='#' className=' d-block d-lg-none float-end lightBlueIcon '>
            <IoMdNotificationsOutline
              style={{fontSize: "1.5rem", color: "gray"}}
            />
          </a>
          <img
            className='rounded-circle d-block d-lg-none float-end'
            style={{width: "50px"}}
            src={avater}
            alt='logo'
          />

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
                <Link className='nav-link fs-5' to='/social-profiles'>
                 Social profiles
                </Link>
              </li>
             
              <li className='nav-item dropdown'>
                <Link className='nav-link fs-5' to='/sign-in'>
                  Sign In
                </Link>
              </li>

              <li className='nav-item dropdown'>
                <Link className='nav-link fs-5' to='/'>
                  Sign Up
                </Link>
              </li>

              <li className='nav-item dropdown'>
                <Link className='nav-link fs-5' to='/forgot-password'>
                 Forgot Password
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link className='nav-link fs-5' to='/sign-in'>
                  Sign Out
                </Link>
              </li>

              <form>
                <input
                  className='form-control '
                  type='search'
                  placeholder='Search'
                />
              </form>
            </ul>

            <a href='#' className='me-2 d-none d-lg-block lightBlueIcon'>
              <BsBrightnessHighFill
                style={{fontSize: "1.5rem", color: "gray"}}
              />
            </a>
            <a href='#' className='me-2 d-none d-lg-block lightBlueIcon '>
              <IoMdNotificationsOutline
                style={{fontSize: "1.5rem", color: "gray"}}
              />
            </a>

            <a className='nav-link  ' href='#'>
              <img
                className='rounded-circle d-none d-lg-block'
                style={{width: "50px"}}
                src={avater}
                alt='logo'
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
