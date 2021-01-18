import React from 'react';
import { useFetch } from '../hooks/useFetch';

const Artist = ({ match }) => {
  const url = 'artists.json';
  const { status, data, error } = useFetch(url);
  const artists = data.artists;
  const artist = artists?.find( artist => artist.id === match.params.artistId);

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