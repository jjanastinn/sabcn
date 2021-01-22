import React from 'react';
import { Wrapper, TextBlock, Meta } from './Card.elements';
import { BGImage, ButtonLink, SocialLinks} from '../index';
import { size } from '../../styles/Breakpoints';
import { animationOne } from '../../animations';
import { AnimatePresence, motion } from 'framer-motion';

const viewPortWidth = window.innerWidth;

const Card = ({ headline, data : { id, name, born_place, born_date, website, social, img, description, date } }) => {
  const socialLinkList = social && <SocialLinks data={social}></SocialLinks>
  const websiteLink = website && <ButtonLink hrefLink={website}>Go to website &#10141;</ButtonLink>
  const deviceVariant = `${viewPortWidth}px` > size.mobile ? animationOne : null;
  
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={id} initial='out' animate='in' exit='exit' variants={deviceVariant}>
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
      </motion.div>
    </AnimatePresence>
  );
}

export default Card;