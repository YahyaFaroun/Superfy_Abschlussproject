import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import MusicList from './Components/MusicList';
import DetailedArtist from './Components/DetailedArtist';
import './Components/Body.css';
import Search from './Components/Search';
import NoMatch from './Components/404';




function App(props) {
  return (
    <Router>
      {props.children}
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Search />
            <MusicList />
          </Route>
          <Route path="/artists/:id" component={DetailedArtist} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

