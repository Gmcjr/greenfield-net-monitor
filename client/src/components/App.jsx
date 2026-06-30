import React from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const App = () => {
  const login = () => {
    axios.get('/oauth2/login');
  };

  const socket = io();
  socket.on('error', (err) => {
    console.error(err);
  });

  socket.on('ping', () => {
    console.info('ping recieved');
  });

  return (
    <button type="button" onClick={login}> login </button>
  );
};

export default App;
