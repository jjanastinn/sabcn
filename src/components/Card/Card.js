import React from 'react';
import { Wrapper, TextBlock, Meta } from './Card.elements';
import { BGImage, ButtonLink, SocialLinks} from '../index';
import { AnimatePresence, motion } from 'framer-motion';
import { animationOne } from '../../animations';

const Card = ({ headline, data : { id, name, born_place, born_date, website, social, img, description, date } }) => {

  const socialLinkList = social && <SocialLinks data={social}></SocialLinks>
  const websiteLink = website && <ButtonLink hrefLink={website}>Go to website &#10141;</ButtonLink>

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={id} initial='out' animate='in' exit='exit' variants={animationOne}>
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