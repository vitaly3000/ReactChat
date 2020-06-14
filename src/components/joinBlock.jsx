import React from 'react';
import socket from '../socket'
function JoinBlock() {
  return (
    <div className="join-block">
      <input type="text" placeholder="ROOM ID" />
      <input type="text" placeholder="Ваше имя" />
      <button>Войти</button>
    </div>
  );
}


export default JoinBlock