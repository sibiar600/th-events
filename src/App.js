import React from 'react';
import './App.css';
import EventsList from './components/EventsList';
import Header from './components/Header';
import Footer from './components/Footer';
import NeighorhoodList from './components/NeighborhoodList';
import Jumbotron from './components/Jumbotron';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {

  return (
    <body className='bg-gray-100'>
      <Jumbotron />

      <Router>
        <Header />


        <Switch>
          <Route exact path='/'>

          </Route>
          <Route path='/stories'>
            <h2>This is stories page</h2>
          </Route>
          <Route path='/event'>
            <EventsList />
          </Route>
          <Route path='/hoods'>
            <NeighorhoodList />
          </Route>
          <Route path='/locals'>
            <h2>Locals only...just kidding</h2>
          </Route>
        </Switch>
      </Router>

      <Footer />

    </body >
  );
}

export default App;
