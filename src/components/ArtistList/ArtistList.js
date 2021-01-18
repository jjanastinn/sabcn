import React from 'react';
import { useArtistData } from '../../context/ArtistData';
import { Wrapper, List, Headline } from './ArtistList.elements';
import ArtistListItem from '../ArtistListItem/ArtistListItem';

const ArtistList = () => {
  const artistContext = useArtistData();
  const { status, data, error } = artistContext;
  const artists = data.artists;

  return (
    <Wrapper>
      {status === 'idle' && (
        <Headline>Artists</Headline>
      )}
      {status === 'error' && <div>{error}</div>}
      {status === 'fetching' && <div className="loading"></div>}
      {status === 'fetched' && (
        <>
        <Headline>Artists</Headline>
          <List>
            {artists.map((artist) => (
              <ArtistListItem key={artist.id} artist={artist}/>
            ))}
          </List>
        </>
      )}
    </Wrapper>
  );
}

export default ArtistList;