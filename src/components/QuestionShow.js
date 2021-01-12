import { useState } from "react";
import Answer from "./Answer";

function QuestionShow(props)
{
    console.log (props.ques);
    let p=props.ques[0];
    let points=props.points;
    let turn =props.turn;
    const [showAnswer,SetShowAnswer]=useState(false); //Don't show the answer until the player answered
    function getRandomInt(max) 
    {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let correctIndex=getRandomInt(4);

    let answers=[];
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
    
    function answer(e)
    {
        console.log (e);
    }
    
    console.log ("props",p);
    const AnswerComponent=<div><Answer currentAnswerText={p.correct_answer} currentAnswerIndex={correctIndex}/> </div>
   //TODO decode the question text
   return (<div>  <p>"TODO" </p> <p> {props.players[turn].name} (Player {Number(turn+1)}) answer the question</p>
     <p>  Question: {decodeURI(p.question)}  </p>
        Answers:  
        <p>1.{answers[0]} </p>
        <p>2.{answers[1]} </p> 
        <p>3.{answers[2]} </p>
        <p>4.{answers[3]} </p>
        {showAnswer ?  AnswerComponent :""} 
    </div>)
}
export default QuestionShow;