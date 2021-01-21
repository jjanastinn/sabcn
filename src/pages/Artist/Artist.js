import React from 'react';
import { Route } from 'react-router-dom';
import { DoubleColumn, SingleColumn } from './Artist.elements';
import { useArtistData } from '../../context/ArtistData';
import { ListWrapper, ArtistCard } from '../../components';
import { Artwork } from '../index';

const Artist = ({ match }) => {
  const artistContext = useArtistData();
  const { status, data, error } = artistContext;
  const artist = data?.artists?.find( artist => artist.id === match.params.artistId);
  const artwork = artist?.artwork;
  
  return (
    <>
      {status === 'idle' && <h2>Artist</h2>}
      {status === 'error' && <div>{error}</div>}
      {status === 'fetching' && <div className="loading"></div>}
      {status === 'fetched' && (
        <DoubleColumn>
          <SingleColumn>
            <h2>{artist.name}</h2>
            <ListWrapper array={artwork}></ListWrapper>
          </SingleColumn>
          {match.isExact ? (
            <ArtistCard artist={artist}></ArtistCard>
          ) : (
            <Route path={`${match.path}/:artworkId`}><Artwork artwork={artwork}></Artwork></Route>
          )}
        </DoubleColumn>
      )}
    </>
  );
}

export default Artist;