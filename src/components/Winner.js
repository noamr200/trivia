import "./Winner.css";
import  { Link } from 'react-router-dom';
function Winner(props)
{
    let arr=[];
    let p=props.players;
    for (let i=0;i<p.length;++i)
    {
        arr[i]=p[i].score; //Only numbers we want
    }

    let max=Math.max(...arr)
    let index=arr.indexOf(max);
    let w=p[index];
    var audio = new Audio("/mp3/fanfare.mp3");
    audio.play();
    function Another()
    {
        props.reset();
    }
    
    return (<div>
            <div className="congratulations" >
            <p>Congratulations {w.name}!</p> 
            <img src="/pics/trophy.jpg" alt="Trophy"/>
            <p>{w.name} (Player {Number(index+1)}) You win the Game!  </p>
            <p>With {w.score} points!</p> </div>
            <Link to="/" onClick={Another} className="btn btn-primary">Let's Play another Game</Link>
            </div>);
}
export default Winner;