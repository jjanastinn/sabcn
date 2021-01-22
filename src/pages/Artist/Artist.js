import React from 'react';
import { Route } from 'react-router-dom';
import { DoubleColumn, SingleColumn } from './Artist.elements';
import { useArtistData } from '../../context/ArtistData';
import { ListWrapper, Card } from '../../components';
import { size } from '../../styles/Breakpoints';
import { Artwork } from '../index';
import { AnimatePresence, motion } from 'framer-motion';
import { animationOne } from '../../animations';

const viewPortWidth = window.innerWidth;

const Artist = ({ match }) => {
  const artistContext = useArtistData();
  const { status, data, error } = artistContext;
  const artist = data?.artists?.find( artist => artist.id === match.params.artistId);
  const artwork = artist?.artwork;
  const deviceVariant = `${viewPortWidth}px` > size.mobile ? animationOne : null;
  
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={match.params.artistId} initial='out' animate='in' exit='exit' variants={deviceVariant}>
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
              <Card data={artist} headline='BIO'></Card>
            ) : (
              <Route path={`${match.path}/:artworkId`}>
                <Artwork artwork={artwork}></Artwork>
              </Route>
            )}
          </DoubleColumn>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Artist;