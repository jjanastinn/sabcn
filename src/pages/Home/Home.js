import React from 'react';
import { DoubleColumn, BGImg } from './Home.elements';

const img = 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/100000/100922.jpg';

const Home = () => {
  return (
    <DoubleColumn>
      <div>
        <BGImg image={img}><h1>streetart bcn</h1></BGImg>
      </div>
      <div>
        <BGImg image={img}></BGImg>
      </div>
    </DoubleColumn>
  );
}

export default Home;