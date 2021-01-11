import './App.css';
import Welcome from  "./pages/Welcome";
import PlayersSetter from "./components/PlayersSetter";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function App(props) {
  const [players,SetPlayers] =useState([]);
  const [counter,SetCounter] =useState(1);
 let t= players.map ((item,index) =>
  {
      return (<p key={index}>Player {item.number} your name is :  {item.name} </p>  );
  });

  function check(e)
  {
    SetPlayers(players.concat(e));
    SetCounter(counter+1);
    console.log ("players",players);
  }
  
  return (
    <div className="App">
      <header className="App-header">
     <Welcome/>
    <PlayersSetter callback={check} players={players} counter={counter} />
   <div>  {t} </div>
      </header>
    </div>
  );
}

export default App;
