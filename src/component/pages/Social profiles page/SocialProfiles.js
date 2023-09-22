import React from "react";
import Header from "../../Home/Header/Header";
import profileImg from '../../../Image/angularAvater.jpg'
import "./SocialProfile.css";
import Subscriptions from "./Subscriptions";
import SocialAccounts from "./SocialProfileValidation";

function SocialProfiles() {
  return (
    <div>
      <Header />

      <section className='body-bg'>
        <div className='container'>
        <div className='position-relative'>
            <img src="https://geeksui.codescandy.com/geeks/assets/images/background/profile-bg.jpg" alt="" style={{ width: '100%', height: '100px', borderTopRightRadius: '8px', borderTopLeftRadius: '8px' }} />

            <div className="white-bg ">
                <img className='roundedImg ' src={profileImg} alt="" />
                <button className=' btn btn-primary float-end '>Account Settings</button>
            </div>
        </div>

          <div className='row py-5 g-4   ms-auto me-auto'>
            {/* Subscriptions */}
            <div className='col-12 col-lg-3 p-4  bg-white rounded'>
              <Subscriptions />
            </div>

            {/*  SocialAccounts*/}
            <div className='col-12  col-lg-8 offset-lg-1 rounded p-4 bg-white'>
              <SocialAccounts />

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialProfiles;
