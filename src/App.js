import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from './App.elements';
import GlobalStyle from './globalStyles';
import { ArtistDataContext } from './context';
import { Home, Artist } from './pages';
import { Navbar, ArtistList } from './components';

function App() {
  return (
    <ArtistDataContext>
      <Router>
        <GlobalStyle />
        <Grid>
          <Navbar />
          <ArtistList />
          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/:artistId' component={Artist}></Route>
          </Switch>
        </Grid>
      </Router>
    </ArtistDataContext>
  );
}

export default App;
