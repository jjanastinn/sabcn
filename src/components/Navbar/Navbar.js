import React from 'react';
import { Nav, Link, TextContainer, Text } from './Navbar.elements';
import { ReactComponent as HomeIcon } from '../../images/home.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../images/twitter.svg';

const Navbar = () => {
  return (
    <Nav>
      <TextContainer>
        <Link href="/"><HomeIcon /></Link>
        <div>
          <Link href="/"><FacebookIcon /></Link>
          <Link href="/"><InstagramIcon /></Link>
          <Link href="/"><TwitterIcon /></Link>
        </div>
        <Text>@copyright 2021</Text>
      </TextContainer>
    </Nav>
  );
}

export default Navbar;