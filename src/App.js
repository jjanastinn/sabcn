import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from './App.elements';
import GlobalStyle from './globalStyles';
import { Home, Artist } from './pages';
import { Navbar, ArtistList } from './components';

function App() {
  return (
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
  );
}

export default App;
