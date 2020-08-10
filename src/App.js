import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NeighorhoodList from './components/NeighborhoodList';
import Jumbotron from './components/Jumbotron';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home';
import Events from './pages/Events';

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
            <h2>Locals only...just kidding</h2>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </body >
  );
}

export default App;
