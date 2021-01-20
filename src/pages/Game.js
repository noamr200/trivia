import "./Game.css";
//import Button from 'react-bootstrap/Button';
import CategeryChoose from '../components/CategoryChoose';
import Winner from "../components/Winner";
import  { Redirect } from 'react-router-dom';
function Game(props)
{
    const NO_QUESTION=-1;
    const NUMBER_OF_CATEGORIES=23;
    function RandomThree()
    {
        //Difficulty level makes questions impossible to be identical
        let n1=NO_QUESTION,n2=NO_QUESTION,n3=NO_QUESTION;
        n1=Math.floor(Math.random() * NUMBER_OF_CATEGORIES);
        n2=Math.floor(Math.random() * NUMBER_OF_CATEGORIES);
        n3=Math.floor(Math.random() * NUMBER_OF_CATEGORIES);
        return [n1,n2,n3];
    }

    let CategoriesRandom=props.categories;
    //let callback=props.callback; //DEBUG ONLY
    let a=RandomThree();
    let turn=props.turn;
    let cat1=CategoriesRandom[a[0]];
    let cat2=CategoriesRandom[a[1]];
    let cat3=CategoriesRandom[a[2]];
    
    if (!props.turn) 
        turn=0;
    
    if (props.players[turn]===undefined) 
    {
       return (<Redirect to='/' />);
    }

    //I know that i should not use <br> but using paragraph inside paragraph or div inside div gives me an error
    
    let category1=  <p className="choose">
        { props.players[turn].name+" (Player"+Number(turn+1)+") It's your turn:"}
        <br/>Please Choose a category: </p> 
    const Categories=  <CategeryChoose  cat1={cat1}  cat2={cat2}  cat3={cat3}  />
    const winner= <Winner players={props.players} reset={props.reset}/>
    return (<div> 
      
        {props.rounds!==0?category1:""}
        {props.rounds!==0?Categories:winner}
       {/*  DEUBG ONLY
       <Button variant="warning" onClick={callback} >Switch Turn (dev only)</Button>*/}  
       </div>)
}
export default Game;