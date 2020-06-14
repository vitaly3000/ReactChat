import React from 'react';

import './App.css';
import JoinBlock from './components/joinBlock';
import socket from './socket'
function App() {
  return (
    <div className="App">
     <JoinBlock socket={socket}/>
    </div>
  );
}

export default App;
