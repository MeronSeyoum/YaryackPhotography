import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
// import InstagramEmbed from 'react-instagram-embed';
import './Skills.scss';

const Skills = () => {
  
  return (
    <>
   {/* <InstagramEmbed
  url='https://instagr.am/p/Zw9o4/https://www.instagram.com/yaryack_photos/'
  clientAccessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);