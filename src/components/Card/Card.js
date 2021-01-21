import React from 'react';
import { Wrapper, TextBlock, Meta } from './Card.elements';
import { BGImage, ButtonLink, SocialLinks} from '../index';

const Card = ({ headline, data : { name, born_place, born_date, website, social, img, description, date } }) => {

  const socialLinkList = social && <SocialLinks data={social}></SocialLinks>
  const websiteLink = website && <ButtonLink hrefLink={website}>Go to website &#10141;</ButtonLink>

  return (
    <Wrapper>
      <h2>{ headline || name }</h2>
      <BGImage image={img}></BGImage>
      <TextBlock>
        <Meta>{ date || (born_place + ' ' + born_date) }</Meta>
        {socialLinkList}
        <p>{description}</p>
        {websiteLink}
      </TextBlock>
    </Wrapper>
  );
}

export default Card;