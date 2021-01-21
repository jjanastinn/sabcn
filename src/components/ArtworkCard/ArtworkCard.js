import React from 'react';
import { Wrapper, Background, Meta } from './ArtworkCard.elements';
import BGImage from '../BGImage/BGImage';

const ArtworkCard = ({ artpiece: { name, img, date, description } }) => {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <Background>
        <BGImage image={img}></BGImage>
        <Meta>{date}</Meta>
        <p>{description}</p>
      </Background>
    </Wrapper>
  );
}

export default ArtworkCard;