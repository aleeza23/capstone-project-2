import React from "react";
import BrowseCourses from './Browse courses/BrowseCourses';
import ForgotPassword from './Form/ForgotPassword';
import SignUp from './Form/SignUp';
import SocialProfiles from './Social profiles page/SocialProfiles';
import SignIn from './Form/SignIn';
import Home from '../Home/Home'
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
      <Route exact path="/" element={<SignUp/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/social-profiles" element={<SocialProfiles/>} />
      <Route path="/browse-courses" element={<BrowseCourses/>} />
    </Routes>
    </>
  );
}

export default App;
