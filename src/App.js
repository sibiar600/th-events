import React from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Jumbotron from './components/atoms/Jumbotron';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Locals from './components/pages/Locals';
import Neighborhoods from './components/pages/Neighborhoods';
import Stories from './components/pages/Stories';

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
            <Stories />
          </Route>
          <Route path='/event'>
            <Events />
          </Route>
          <Route path='/hoods'>
            <Neighborhoods />
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
