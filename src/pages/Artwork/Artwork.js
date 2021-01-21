import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { ArtworkCard } from '../../components';

const Artwork = ({artwork}) => {
  let match = useRouteMatch();
  const artpiece = artwork?.find( artworkItem => artworkItem.id === match.params.artworkId);

  return (
    <ArtworkCard artpiece={artpiece}></ArtworkCard>
  );
}

export default Artwork;