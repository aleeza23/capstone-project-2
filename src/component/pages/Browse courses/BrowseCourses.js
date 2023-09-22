import React from 'react';
import Header from "../../Home/Header/Header";
import "./BrowseCourses.css";
import Cart from "./Cart";
import List from "./List";
import Footer from "../../Home/Footer/Footer";

function BrowseCourses() {
  return (
    <div>
      <Header />
      
      <section className="blue-bg">
        <div className="container">
          <h1 className="text-white">Filter Page</h1>
        </div>
      </section>

      <section className="bg-body">
        <div className="container">
          <div className="row   ms-auto me-auto ">
            <div className="col-12 col-md-12 col-lg-12 mb-3 displaingCourses  ">
              Displaying 9 out of 68 courses

            </div>
          </div>

          <div className="row row-gutter  g-4 ms-auto me-auto">
            <div className="col-12 shadow-sm col-lg-3 order-2 order-lg-1 bg-white py-4 px-4 ms-auto me-auto  rounded-3 h-75 mb-4">
              <div className="row ">
                <div className="col-lg-12 col-12 ">
                  <List />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-9 order-1 order-lg-2 ">
              <Cart />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default BrowseCourses;
