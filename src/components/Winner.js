import Button from 'react-bootstrap/Button';
import  { Redirect,Link } from 'react-router-dom';
function Winner(props)
{
    let arr=[];
    let p=props.players;
    console.log (p);
    
    for (let i=0;i<p.length;++i)
    {
        arr[i]=p[i].score; //Only numbers we want
    }

    let max=Math.max(...arr)
    console.log (max);
    let index=arr.indexOf(max);
    console.log (index);
    let w=p[index];
    console.log (w);
    function Another()
    {
        props.reset();
    }
    
    return (<div><p>Winner Screen!</p>
            <p>Congratulations {w.name}</p>
            <p>{w.name} (Player {Number(index+1)}) You win the Game!  </p>
            <p>With {w.score} points!</p>
            <Link to="/" onClick={Another} className="btn btn-primary">Let's Play another Game</Link>


    </div>);
}
export default Winner;