import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from '../../wrapper';
// import InstagramEmbed from 'react-instagram-embed';
import './Skills.scss';

import styled from "@emotion/styled"

const Card = styled.img`
  justify-self: center;
  width: 300px;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`
const accessToken = 'IGQVJWZA1FTV3N4STktZA2RHR1owalJTNllic1BJYVpXUnNRMnF1eXNPRDNIRjgwdzRpSVRZANDVRRDZAWdy1BMV85TkpVWkdtZAlRTR3I5RUVCWFdCOUdvSEtLU0RCU1Fna1ZAwbHFEaHNHUVFJc29aSVhpdgZDZD';
const userId = '4551080094';
const count = 3;

const url =`https://graph.instagram.com/v7.0/users/${userId}/media/recent?access_token=${accessToken}&count=${count}`
  // 'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":4551080094,"first":6}';
const Skills = () => {
  
  const [insta, setInsta] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        const photosArray = data.data.user.edge_owner_to_timeline_media.edges;
        setInsta(photosArray);
      });
  }, []);
  return (
    <Grid>
      {insta.map((photo) => (
        <Card src={photo.node.display_url} key={photo.node.id} />
      ))}
    </Grid>

  
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);