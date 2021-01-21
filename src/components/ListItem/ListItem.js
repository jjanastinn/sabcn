import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { Title } from './ListItem.elements';
import BGImage from '../BGImage/BGImage';

const ListItem = ({ data: { id, name, img } }) => {
  let { artistId } = useParams();
  let match = useRouteMatch();

  return (
    <li key={id}>
      <Link to={artistId ? `${match.url}/${id}` : `/${id}`}>
        <BGImage image={img}></BGImage>
        <Title>{name}</Title>
      </Link>
    </li>
  );
}

export default ListItem;