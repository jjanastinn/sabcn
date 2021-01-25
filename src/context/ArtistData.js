import React, { createContext, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const ArtistDataContext = createContext();

export const useArtistData = () => useContext(ArtistDataContext);

const ArtistDataContextProvider = ({children}) => {
  const url = 'artists.json';
  const { status, data, error } = useFetch(url);

  return (
    <ArtistDataContext.Provider value={{ status, data, error }}>
      {children}
    </ArtistDataContext.Provider>
  );
}

export default ArtistDataContextProvider;