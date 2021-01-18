//import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import QuestionGetter from "../models/QuestionGetter";
import QuestionShow from "./QuestionShow";
function Question(props)
{
    //https://opentdb.com/api.php?amount=1&category=16&difficulty=medium&type=multiple
    const [ques,SetQues]=useState(null);
    const location = useLocation();
    let difficulty="medium";
    let catNum=location.search.charAt(5)+location.search.charAt(6);
    let points=location.search.charAt(location.search.length-1)*2000;
    if (points===2000) 
    {
        difficulty="easy";
    }
    else if (points===4000)
    {
        difficulty="medium";
    }
    else //hard 
    {
        difficulty="hard";
    }
    useEffect(() => {
            QuestionGetter(catNum,difficulty).then (response=> { 
            SetQues(response.data.results);
        }, );
    },[catNum,difficulty]);
    const wait=<div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span> </div>
    const cond=<QuestionShow ques={ques} points={points} turn={props.turn} players={props.players} callback={props.callback}  />;
    return (<div>  {ques!=null? cond:wait} 
    {/* DEBUG PURPOSES ONLY (dev only line)
    <a href="#/game"> <Button variant="warning" onClick={props.callback} >Switch Turn (dev only)</Button>  </a>*/}
     </div>);
}
export default Question;