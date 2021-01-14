import { useState } from "react";
import Answer from "./Answer";
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
function QuestionShow(props)
{
    console.log (props.ques);
    let p=props.ques[0];
    let points=props.points;
    let turn =props.turn;
    const [showAnswer,SetShowAnswer]=useState(false); //Don't show the answer until the player answered
    const [answersState,SetAnswerState]=useState([]);
    const [AnswerIndex,SetAnswerIndex]=useState(-1);
    const [res,SetRes]=useState("");
    console.log(p.question);
    function getRandomInt(max) 
    {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let correctIndex;

    let answers=[];
    
    useEffect(() => {
       
        correctIndex=getRandomInt(4);
        answers=[];
        answers[correctIndex]=p.correct_answer+"--- Cheat --- this is  the correct answer";
    let j=0;
    for (let i=0;i<4;++i)
    {
        if (i!=correctIndex) 
        {
            answers[i]=p.incorrect_answers[j];
            ++j
        }
        
    }
    SetAnswerState(answers);
    SetAnswerIndex(correctIndex);
      },[]);

  
    function answer(e)
    {
        console.log (e);
        console.log ("target",e.target.value,"correctindex",AnswerIndex);
        if (showAnswer) 
        {
            return;
        }
        if ((Number(e.target.value-1))===AnswerIndex)
        {
            SetRes("You got it right! and you get "+ points+" points!");
            props.players[turn].score+=points;
        }
        else 
        {
            SetRes("You were wrong! and you will lose "+ points+" points!");
            props.players[turn].score-=points;
        }
        SetShowAnswer(true);
        
    }
    //No spaces between <span> and </span>
    console.log ("props",p);
    const AnswerComponent=<div><Answer currentAnswerText={p.correct_answer} currentAnswerIndex={AnswerIndex}  res={res} /> </div>
    const ContinueButton= <div> <a href="#/game"> <Button variant="success" onClick={props.callback} >Conitune Playing!</Button>  </a></div> 
   return (<div>  <p>"TODO" </p> <p> {props.players[turn].name} (Player {Number(turn+1)}) answer the question</p>
     <p>   <span dangerouslySetInnerHTML={{__html:p.question}}></span>   </p>
        Answers:  
        <p>
            <Button variant="primary" value="1" onClick={answer}>1.</Button> 
            <span dangerouslySetInnerHTML={{__html:answersState[0]}}></span>  
        </p>
        <p>
            <Button variant="primary" value="2" onClick={answer}>2.</Button>
            <span dangerouslySetInnerHTML={{__html:answersState[1]}}></span> 
        </p> 
        <p>
            <Button variant="primary" value="3" onClick={answer}>3.</Button>
            <span dangerouslySetInnerHTML={{__html:answersState[2]}}></span> 
        </p>
        <p>
            <Button variant="primary" value="4" onClick={answer}>4.</Button>
            <span dangerouslySetInnerHTML={{__html:answersState[3]}}></span> 
        </p>
        {showAnswer ?  AnswerComponent :""} 
        {showAnswer ?  ContinueButton :"" }
    </div>)
}
export default QuestionShow;