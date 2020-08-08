import React from 'react';
import './App.css';
import EventsList from './components/EventsList';
import Header from './components/Header';
import axios from 'axios'


function App() {
  return (
    <div>
      <Header />
      <EventsList />
    </div >
  );
}

export default App;
