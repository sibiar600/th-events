import React from 'react';
import './App.css';
import EventsList from './components/EventsList';
import Header from './components/Header';
import Footer from './components/Footer';
import NeighorhoodList from './components/NeighborhoodList';

function App() {

  return (
    <div>
      <Header />
      <NeighorhoodList />
      <EventsList />
      <Footer />

    </div >
  );
}

export default App;
