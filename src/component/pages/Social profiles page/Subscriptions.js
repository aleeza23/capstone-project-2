import React from "react";
import "./SocialProfile.css";
import SubsciptionList from "./SubsciptionList";

function Subscriptions() {
  return (
    <div>
      <h4 className='catagoryH d-lg-block'>Catagories</h4>
      <nav className='navbar navbar-expand-lg  '>
        <div className='container-fluid'>
          <a className='navbar-brand heading d-lg-none' href='#'>
            Menu
          </a>

          <button
            className='navbar-toggler btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon '></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <SubsciptionList />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Subscriptions;
