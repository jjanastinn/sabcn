import React from 'react';
import { useArtistData } from '../context/ArtistData';

const Artist = ({ match }) => {
  const artistContext = useArtistData();
  const { status, data, error } = artistContext;
  const artist = data?.artists?.find( artist => artist.id === match.params.artistId);

  return (
    <div>
      {status === 'idle' && (
        <div>Artist</div>
      )}
      {status === 'error' && <div>{error}</div>}
      {status === 'fetching' && <div className="loading"></div>}
      {status === 'fetched' && (
        <>
          <div>{artist.name}</div>
        </>
      )}
    </div>
  );
}

export default Artist;