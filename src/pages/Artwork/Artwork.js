import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Card } from '../../components';

const Artwork = ({artwork}) => {
  let match = useRouteMatch();
  const artpiece = artwork?.find( artworkItem => artworkItem.id === match.params.artworkId);

  return (
    <Card data={artpiece}></Card>
  );
}

export default Artwork;