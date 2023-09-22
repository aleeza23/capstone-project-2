import React from "react";
import Header from '../Home/Header/Header'
import Banner from "./Hero section/Banner";
import CourseDetails from "./course Details/CourseDetails";
import Footer from "../Home/Footer/Footer";
import Slide from "./Card Slides/Slide";
function Home() {
  return <>
    <Header />
      <Banner />
      <CourseDetails />
      <Slide />
      <Footer />
  </>;
}

export default Home;
