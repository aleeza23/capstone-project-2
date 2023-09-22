import React from "react";
import hero from "../../../Image/hero.png";
import "./Banner.css";
import {Link} from "react-router-dom";
function Banner() {
  return (
    <div>
      <section className='banner-blue-bg'>
        <div className='container'>
          <div className='row ms-auto me-auto'>
            {/* left side */}

            <div className=' col-12 col-md-6'>
              <h1 className='banner-heading'>
                Welcome to Geeks UI Learning Application
              </h1>
              <p className='banner-text'>
                Hand-picked Instructor and expertly crafted courses, designed
                for the modern students and entrepreneur.
              </p>

              <form action='' className='button-group'>
                <button className='btn btn-dark ms-2'>
                  <Link
                    to='/browse-courses'
                    className='text-decoration-none text-white fw-bold'
                  >
                    Browse Courses
                  </Link>
                </button>
                <button className='btn btn-light ms-2'>
                  <Link
                    to='/sign-in'
                    className='text-decoration-none text-dark fw-bold'
                  >
                    Are you an Instructor?
                  </Link>
                </button>
              </form>
            </div>

            {/* right side */}

            <div className=' col-12 col-md-6'>
              <img className='img-fluid ' src={hero} alt='hero' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
