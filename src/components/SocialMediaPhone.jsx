import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMediaPhone = () => (
  <>
  <div className="app__social_Phone">
    <div>
      <BsTwitter />
    </div>
    <div>
     
      <FaFacebookF />
    </div>
    <div>
    <a href={`https://www.instagram.com/yaryack_photos`} target="blank">
      <BsInstagram /></a>
    </div>
  </div>
   
  
   </>
);

export default SocialMediaPhone;