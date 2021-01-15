import "./Game.css";
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CategeryChoose from '../components/CategoryChoose';
import { HashRouter, Route } from "react-router-dom";
import categoryUtils from "../models/CategoroiesGetter";
import Question from '../components/Question';
import PlayersSetter from '../components/PlayersSetter';
import Winner from "../components/Winner";
import  { Redirect } from 'react-router-dom';
function Game(props)
{

    function RandomThree()
    {
        //Difficulty level makes questions impossible to be identical
        let n1=-1,n2=-1,n3=-1;
        n1=Math.floor(Math.random() * 23);
        n2=Math.floor(Math.random() * 23);
        n3=Math.floor(Math.random() * 23);
        return [n1,n2,n3];
    }

    let CategoriesRandom=props.categories;
    let callback=props.callback;
    console.log (callback);
    let a=RandomThree();
    let turn=props.turn;
    let cat1=CategoriesRandom[a[0]];
    let cat2=CategoriesRandom[a[1]];
    let cat3=CategoriesRandom[a[2]];
    console.log (cat1);
    if (!props.turn) turn=0;
    console.log (props.players,props.turn);
    
    if (props.players[turn]===undefined) 
    {
       //alert ("No players where set!");
       return (<Redirect to='/' />);
    }

    //I know that i should not use <br> but using paragraph inside paragraph or div inside div gives me an error
    
    let category1=  <p className="choose">
        { props.players[turn].name+" (Player"+Number(turn+1)+") " +"It's your turn:"}
        <br/>Please Choose a category: </p> 
    const Categories=  <CategeryChoose  cat1={cat1}  cat2={cat2}  cat3={cat3}  />
    const winner= <Winner players={props.players} reset={props.reset}/>
    return (<div> 
      
        {props.rounds!=0?category1:""}
        {props.rounds!=0?Categories:winner}
        <Button variant="warning" onClick={props.callback} >Switch Turn (dev only)</Button>  </div>)
}
export default Game;