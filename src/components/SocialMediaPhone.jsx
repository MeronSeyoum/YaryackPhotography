import React from 'react';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMediaPhone = () => (
  <>
  <div className="app__social_Phone">
    <div>
    <a href={`https://www.youtube.com/@yaryackvideoproduction1626`} target="blank">
      <BsYoutube /></a>
    </div>
    <div>
    <a href={`https://www.facebook.com/profile.php?id=100064125130777`} target="blank">
      <FaFacebookF /></a>
    </div>
    <div>
    <a href={`https://www.instagram.com/yaryack_photos`} target="blank">
      <BsInstagram /></a>
    </div>
  </div>
   
  
   </>
);

export default SocialMediaPhone;