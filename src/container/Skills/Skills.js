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
const url =
  'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":40346689,"first":6}';
const Skills = () => {
  
 
  const [insta, setInsta] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
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