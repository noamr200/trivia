import './App.css';
import PlayersSetter from "./components/PlayersSetter";
import 'bootstrap/dist/css/bootstrap.min.css';
import getCategories from "./models/CategoroiesGetter";
import Game from "./pages/Game";
import { HashRouter, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Question from './components/Question';
function App(props) {
  const [players,SetPlayers] =useState([]);
  const [counter,SetCounter] =useState(1);
  const [turn,SetTurn]=useState(0); //Turn is the index (starts with 0)
  const [categories,SetCategories]=useState([]);
  const [rounds,SetRounds]=useState(0); //0 means game over
  useEffect(() => {
    getCategories().then (response=> { 
      SetCategories(response);
  }, );
  },[]);
  
  
 
  let PlayersList = players.map ((item,index) =>
  {
      return (<div key={index} > {item.name} (Player {item.number})  has  {item.score} Points </div> );
  });
   
  function setNumberOfRounds(e)
  {
    let roundall=e*counter;
    SetRounds(roundall);
  }

  function SwitchTurn(e)
  {
    if (turn>=counter-2)  
    {
      SetTurn(0);
    }
    else
    {
      SetTurn( (turn+1));
    }

    if (rounds-1===0 && counter>1) 
    {
      checkIdenticalPoints();
    }
    else 
    {
      SetRounds(rounds-1);
    }

  }

  function checkIdenticalPoints()
  {
    let arr=[];
    for (let i=0;i<players.length;++i)
    {
      arr[i]=players[i].score; //we want numbers only
    }
    let max=Math.max(...arr)
    if (countIndex(arr,max) >1)  //We have two or more players with identical points
    {
     
      SetRounds(Number(5*Number(counter-1)));
    }
    else 
    {
      SetRounds(0);
    }

  }

  function countIndex(array, element) 
  {
    // returns the second index of a symbol in a given text
    var count = 0;
    for (let i = 0; i < array.length; ++i) 
    {
      
        if (array[i] === element) 
        {
            ++count;
        }
       
    }   
    return count;
}    


  function reset()
  {
    SetPlayers([]);
    SetCounter(1);
    SetTurn(0);
    SetRounds(0);
    
  }
  function check(e)
  {
    SetPlayers(players.concat(e));
    SetCounter(counter+1);
  }
 
  return (
    <div className="App">
      <div className="info">  {PlayersList} </div>
      <header className="App-header">
      
<HashRouter>

<Route exact path="/" >  <PlayersSetter callback={check} RoundsCallback={setNumberOfRounds} players={players} counter={counter} /></Route>
<Route exact path="/game" >  <Game  players={players} turn={turn} callback={SwitchTurn} reset={reset} categories={categories} rounds={rounds} /></Route>
<Route exact path="/ques" > <Question players={players} turn={turn} callback={SwitchTurn}  /> </Route>
</HashRouter>

   
   <p>{rounds} Rounds Left</p>
      </header>
    </div>
  );
}

export default App;
