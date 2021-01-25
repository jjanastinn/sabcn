import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { BGImage } from '../index';

const ListItem = ({ data: { id, name, img } }) => {
  let { artistId } = useParams();
  let match = useRouteMatch();

  return (
    <li key={id}>
      <Link to={artistId ? `${match.url}/${id}` : `/sabcn/${id}`}>
        <BGImage image={img}></BGImage>
        <h3>{name}</h3>
      </Link>
    </li>
  );
}

export default ListItem;