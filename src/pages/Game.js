import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CategeryChoose from '../components/CategoryChoose';
import { HashRouter, Route } from "react-router-dom";
import categoryUtils from "../models/CategoroiesGetter";
import Question from '../components/Question';
import PlayersSetter from '../components/PlayersSetter';
import  { Redirect } from 'react-router-dom';
function Game(props)
{

    function RandomThree()
    {
        //TODO check categories not identical;
        let n1,n2,n3;
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
       alert ("No players where set!");
       return (<Redirect to='/' />);
    }

    let str="Player Name "+props.players[turn].name+ " Player "+Number(turn+1);
  
    return (<div>GAME {str} 
    <CategeryChoose  cat1={cat1}  cat2={cat2}  cat3={cat3}  />
    
        <Button variant="warning" onClick={props.callback} >Switch Turn (dev only)</Button>  </div>)
}
export default Game;