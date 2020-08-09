import React from 'react';
import './App.css';
import EventsList from './components/EventsList';
import Header from './components/Header';
import Footer from './components/Footer';
import NeighorhoodList from './components/NeighborhoodList';
import Jumbotron from './components/Jumbotron';

function App() {

  return (
    <>
      <Jumbotron />
      <Header />
      <NeighorhoodList />
      <EventsList />
      <Footer />

    </ >
  );
}

export default App;
