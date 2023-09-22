import React, {useState} from "react";
import "./SocialProfile.css";
import SocialProfileForm from "./SocialProfileForm";

function SocialProfileValidation() {

  //Set input value to each field
  const [twitterHandle, setTwitterHandle] = useState(
    localStorage.getItem("twitterHandle") || ""
  );
  const [facebookHandle, setFacebookHandle] = useState(
    localStorage.getItem("facebookHandle") || ""
  );
  const [instagramHandle, setInstagramHandle] = useState(
    localStorage.getItem("instagramHandle") || ""
  );
  const [linkedinURL, setLinkedinURL] = useState(
    localStorage.getItem("linkedinURL") || ""
  );
  const [youtubeURL, setYoutubeURL] = useState(
    localStorage.getItem("youtubeURL") || ""
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

//Function to set onChange Value
  const handleInputChange = (key, value) => {
    if (key === 'twitter') {
      setTwitterHandle(value);
    } else if (key === 'facebook') {
      setFacebookHandle(value);
    } else if (key === 'instagram') {
      setInstagramHandle(value);
    } else if (key === 'linkedin') {
      setLinkedinURL(value);
    } else if (key === 'youtube') {
      setYoutubeURL(value);
    }

    // Check if any of the fields have a value to enable the button
    if (
      twitterHandle !== "" ||
      facebookHandle !== "" ||
      instagramHandle !== "" ||
      linkedinURL !== "" ||
      youtubeURL !== ""
    ) {
      setIsButtonDisabled(false); //enable
    } else {
      setIsButtonDisabled(true); //disable
    }
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    // Save the data to localStorage 
    localStorage.setItem("twitterHandle", twitterHandle);
    localStorage.setItem("facebookHandle", facebookHandle);
    localStorage.setItem("instagramHandle", instagramHandle);
    localStorage.setItem("linkedinURL", linkedinURL);
    localStorage.setItem("youtubeURL", youtubeURL);
    setIsButtonDisabled(true);
  };

  return (
    <div>
      <div className='fw-bold'>SocialAccounts</div>
      <p className='text-muted'>
        Add your social profile links in the below social accounts.
      </p>

    {/* Form Component  */}
      <SocialProfileForm
        data={{
          twitterHandle,
          facebookHandle,
          instagramHandle,
          linkedinURL,
          youtubeURL,
          isButtonDisabled,
          handleInputChange,
          handleSaveData,
        }}
      />
    </div>
  );
}

export default SocialProfileValidation;
