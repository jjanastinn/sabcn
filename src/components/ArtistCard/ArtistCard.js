import React from 'react';
import { Wrapper, Background, Meta } from './ArtistCard.elements';
import SocialLinks from '../SocialLinks/SocialLinks';
import ButtonLink from '../ButtonLink/ButtonLink';
import BGImage from '../BGImage/BGImage';

const ArtistCard = ({ artist: { born_place, born_date, website, social, img, description } }) => {
  return (
    <Wrapper>
      <h2>Bio</h2>
      <Background>
        <BGImage image={img}></BGImage>
        <Meta>{born_place}, {born_date}</Meta>
        <SocialLinks data={social}></SocialLinks>
        <p>{description}</p>
        <ButtonLink hrefLink={website}>Go to website &#10141;</ButtonLink>
      </Background>
    </Wrapper>
  );
}

export default ArtistCard;