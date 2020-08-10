import React from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import NeighorhoodList from './components/organisms/NeighborhoodList';
import Jumbotron from './components/atoms/Jumbotron';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Locals from './components/pages/Locals';

function App() {

  return (
    <body className='bg-gray-100'>

      <Router>
        <Jumbotron />
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/stories'>
            <h2>This is stories page</h2>
          </Route>
          <Route path='/event'>
            <Events />
          </Route>
          <Route path='/hoods'>
            <NeighorhoodList />
          </Route>
          <Route path='/locals'>
            <Locals />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </body >
  );
}

export default App;
