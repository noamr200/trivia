import './App.css';
import Welcome from  "./pages/Welcome";
import PlayersSetter from "./components/PlayersSetter";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import categoryUtils from "./models/CategoroiesGetter";
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
    let c =categoryUtils.getCategories().then (response=> { 
      console.log (response);
      
      SetCategories(response);
  }, );
  },[]);
  
  
 
  let PlayersList = players.map ((item,index) =>
  {
      return (<p key={index}> {item.name} (Player {item.number})  has  {item.score} Points</p>);
  });
   
  function setNumberOfRounds(e)
  {
    console.log ("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee rounds",e);
    let roundall=e*counter;
    console.log (roundall);
    SetRounds(roundall);
  }

  function SwitchTurn(e)
  {
    console.log (counter);
    if (turn>=counter-2)  
    {
      SetTurn(0);
      console.log ("0 tt");
    }
    else
    {
      SetTurn( (turn+1));
      console.log (turn ,"tt");
    }

    if (rounds-1===0 && counter>1) 
    {
      checkIdenticalPoints();
    }
    else 
    {
      SetRounds(rounds-1);
    }
    console.log("dkdkdkd",turn);
  }

  function checkIdenticalPoints()
  {
    console.log ("draw!!!!");
    let arr=[];
    for (let i=0;i<players.length;++i)
    {
      arr[i]=players[i].score; //we want numbers only
    }
    console.log (players);
    console.log (arr);
    let max=Math.max(...arr)
    console.log (max);
    if (countIndex(arr,max) >1)  //We have two or more players with identical points
    {
      console.log ("Another round");
      SetRounds(5);
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
    console.log ("count",count);
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
    console.log ("players",players);
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
