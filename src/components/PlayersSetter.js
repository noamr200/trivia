import Button from 'react-bootstrap/Button';
import Welcome from  "../pages/Welcome";
import React, { useEffect } from 'react';
import Link from "react";
function PlayersSetter(props)
{
    let i=1;
    let items=[];
    let n=props.counter;
    const [name,setName] = React.useState('');
    const [rounds,setRounds]=React.useState(20);
        
        const add = (e) =>
        {
            let obj = {name :name ,number:n ,score:0};
            
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
    return (<div>
        <Welcome/>

        <p>Choose number of rounds per player:</p>
        <select defaultValue={20} onChange={e => setRounds(e.target.value)}>
                        <option value="2">2(dev only)</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>


        <form >
           
            <p>Enter your name player {n} </p>
            Name : <input type="text" onChange={e => setName(e.target.value)}  /><br/>
            <Button variant="primary" onClick={add}>Add player</Button>
            <a href="#/Game" ><Button variant="warning">Start playing</Button> </a>

        </form>
    </div>);
}
export default PlayersSetter;