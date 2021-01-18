import React from 'react';
import { Link } from 'react-router-dom';
import { BGImg, Title } from './ArtistListItem.elements';

const ArtistListItem = ({ artist: { id, name, poster_img } }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        <BGImg img={poster_img}></BGImg>
        <Title>{name}</Title>
      </Link>
    </li>
  );
}

export default ArtistListItem;