import Button from 'react-bootstrap/Button';
import Welcome from  "../pages/Welcome";
import React, { useEffect } from 'react';
import "./PlayersSetter.css"
import Link from "react";
function PlayersSetter(props)
{
    const DEFAULT_ROUNDS_NUMBER=30;
    let i=1;
    let items=[];
    let n=props.counter;
    const [name,setName] = React.useState('');
    const [rounds,setRounds]=React.useState(DEFAULT_ROUNDS_NUMBER);
    
   
        const add = (e) =>
        {
            let obj = {name :name ,number:n ,score:0};
            if (obj.name.length<=0 || obj.name===undefined) 
            {
                alert ("You must give a name to the player before adding!");
                return;
            }
            
            props.callback(obj)
            setTheRounds(rounds);
        }

        function setTheRounds(e) 
        {
            console.log (e);
            setRounds(e);
            console.log ("Number of rounds",e);
            props.RoundsCallback(rounds);
        }
        /*
        const NumberSelection=(  <div> <select> onChange={setTheRounds}
        <option value="10">10 Questions</option>
        <option value="20" selected>20 Questions</option>
        <option value="30">30 Questions</option>
        <option value="40">40 Questions</option>
    </select> </div>);
   */
  const StartButton=<p> <a href="#/Game" ><Button variant="success" className="start-btn" size="lg" >Start playing The Game!</Button> </a></p>;
    return (<div>
        <Welcome/>

        <p>Please Choose number of rounds per player:</p>
        <select className="select-css" defaultValue={DEFAULT_ROUNDS_NUMBER} onChange={e => setRounds(e.target.value)}>
                        <option value="2">2(dev only)</option>
                        <option value="10">10 Rounds  Because I like a game to be short!</option>
                        <option value="20">20 Rounds Because I Still like it short but not too much</option>
                        <option value="30">30 Rounds I Like A modernate length</option>
                        <option value="40">40 Rounds I like it long but not too long</option>
                        <option value="50">50 Rounds Let's sit  down for ages </option>
                    </select>


        <form>
           
            <p><b>Please Enter your name player {n} </b></p>
            <b>Your Name:  </b><input type="text"  onChange={e => setName(e.target.value)}  /><br/>
            <p></p>  

            <Button variant="primary" onClick={add}>{n>=2?"Add Another Player": "Add player"}</Button>
            <p></p>  
            {n>=2? StartButton :""}
           
        </form>
    </div>);
}
export default PlayersSetter;