import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from './App.elements';
import GlobalStyle from './globalStyles';
import { ArtistDataContext } from './context';
import { Home, Artist } from './pages';
import { Navbar, ArtistList, ColumnDivider } from './components';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <ArtistDataContext>
      <Router>
        <GlobalStyle />
        <Grid>
          <Navbar />
          <ArtistList />
          <ColumnDivider />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path='/sabcn' component={Home} exact></Route>
              <Route path='/:artistId' component={Artist}></Route>
            </Switch>
          </AnimatePresence>
        </Grid>
      </Router>
    </ArtistDataContext>
  );
}

export default App;
