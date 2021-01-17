import Button from 'react-bootstrap/Button';
import Welcome from  "../pages/Welcome";
import React from 'react';
import "./PlayersSetter.css"
function PlayersSetter(props)
{
    const DEFAULT_ROUNDS_NUMBER=30;
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

            var audio = new Audio("/mp3/add.mp3");
            audio.play();
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
        var audio = new Audio('audio_file.mp3');
        audio.play();*/

        /*
        const NumberSelection=(  <div> <select> onChange={setTheRounds}
        <option value="10">10 Questions</option>
        <option value="20" selected>20 Questions</option>
        <option value="30">30 Questions</option>
        <option value="40">40 Questions</option>
    </select> </div>);
   */
  const StartButton=<p className="startButton"> <a href="#/Game" ><Button variant="success" className="start-btn" size="lg" >Start playing The Game!</Button> </a></p>;
    return (<div>
        <Welcome/>

        <p>Please Choose number of Questions per player:</p>
        <select className="select-css" defaultValue={DEFAULT_ROUNDS_NUMBER} onChange={e => setRounds(e.target.value)}>
                        <option value="2">2(dev only)</option>
                        <option value="10">10 Questions  Because I like a game to be short!</option>
                        <option value="20">20 Questions Because I Still like it short but not too much</option>
                        <option value="30">30 Questions I Like A modernate length</option>
                        <option value="40">40 Questions I like it long but not too long</option>
                        <option value="50">50 Questions Let's sit  down for ages </option>
                    </select>


        <form>
           
            <p className="please" ><b>Please Enter your name player {n} </b></p>
            <b>Your Name:  </b><input type="text" placeholder="Enter your name" onChange={e => setName(e.target.value)}  /><br/>
            <p></p>  

            <Button variant="primary" onClick={add}>{n>=2?"Add Another Player": "Add player"}</Button>
            <p></p>  
            {n>=2? StartButton :""}
           
        </form>
    </div>);
}
export default PlayersSetter;