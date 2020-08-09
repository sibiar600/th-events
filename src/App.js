import React from 'react';
import './App.css';
import EventsList02 from './components/EventsList02';
import Header from './components/Header';
import Footer from './components/Footer';
import NeighorhoodList from './components/NeighborhoodList';

function App() {

  return (
    <div>
      <Header />
      <NeighorhoodList />
      <EventsList02 />
      <Footer />

    </div >
  );
}

export default App;
