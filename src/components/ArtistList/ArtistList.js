import React from 'react';
import { Wrapper } from './ArtistList.elements';
import { useArtistData } from '../../context/ArtistData';
import { ListWrapper } from '../index';

const ArtistList = () => {
  const artistContext = useArtistData();
  const { status, data, error } = artistContext;
  const artists = data.artists;

  return (
    <Wrapper>
      {status === 'idle' && (<h2>Artists</h2>)}
      {status === 'error' && <div>{error}</div>}
      {status === 'fetching' && <div className="loading"></div>}
      {status === 'fetched' && (
      <>
        <h2>Artists</h2>
        <ListWrapper array={artists}></ListWrapper>
      </>
      )}
    </Wrapper>
  );
}

export default ArtistList;