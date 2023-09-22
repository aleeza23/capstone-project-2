import React from "react";
import {FaFacebook, FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

function FormIcons() {
  const array = [<FaFacebook />, <FaGithub />, <FaTwitter />, <FaLinkedin />];

  return <>

<div className='d-flex justify-content-center'>
            {array.map((icons , i) => {
              return <div className='icon text-muted' key={i}>{icons}</div>;
            })}
          </div>
  </>;
}

export default FormIcons;
