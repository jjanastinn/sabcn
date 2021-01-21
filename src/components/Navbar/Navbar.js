import React from 'react';
import { Nav, Link, TextContainer, Text } from './Navbar.elements';
import { ReactComponent as HomeIcon } from '../../images/home.svg';
import SocialLinks from '../SocialLinks/SocialLinks';

const social = [
  {
    "facebook": "#"
  },
  {
    "instagram": "#"
  },
  {
    "twitter": "#"
  }
];

const Navbar = () => {
  return (
    <Nav>
      <TextContainer>
        <Link href='/'><HomeIcon /></Link>
        <SocialLinks data={social} vertical='true'></SocialLinks>
        <Text>@copyright 2021</Text>
      </TextContainer>
    </Nav>
  );
}

export default Navbar;