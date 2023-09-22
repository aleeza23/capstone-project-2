import React from "react";
import {SocialAccountsData} from "./SocialAccountsData";
function SocialProfileForm({data}) {
  const {
    twitterHandle,
    facebookHandle,
    instagramHandle,
    linkedinURL,
    youtubeURL,
    isButtonDisabled,
    handleInputChange,
    handleSaveData,
  } = data;
  return (
    <>
      <form>
        <div className='row mb-3'>
          {SocialAccountsData.map((data, i) => {
            const {key} = data;
            let value = "";

            if (key === "twitter") {
              value = twitterHandle;
            } else if (key === "facebook") {
              value = facebookHandle;
            } else if (key === "instagram") {
              value = instagramHandle;
            } else if (key === "linkedin") {
              value = linkedinURL;
            } else if (key === "youtube") {
              value = youtubeURL;
            }
            return (
              <div key={i}>
                <div className='col-12 col-lg-3' >
                  <label className='heading text-dark'>{data.webName}</label>
                </div>
                <div className='col-lg-8 col-12 mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    value={value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                  <small className='text-muted ms-2 mt-1'>{data.guide}</small>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className='btn btn-primary'
          disabled={isButtonDisabled}
          onClick={handleSaveData}
        >
          Save Social Profiles
        </button>
      </form>
    </>
  );
}

export default SocialProfileForm;
