import { useState } from "react";
import Answer from "./Answer";
import "./QuestionShow.css";
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
function QuestionShow(props)
{
    let p=props.ques[0];
    let points=props.points;
    let turn =props.turn;
    const [showAnswer,SetShowAnswer]=useState(false); //Don't show the answer until the player answered
    const [answersState,SetAnswerState]=useState([]);
    const [AnswerIndex,SetAnswerIndex]=useState(-1);
    const [res,SetRes]=useState("");
    function getRandomInt(max) 
    {
        return Math.floor(Math.random() * Math.floor(max));
    }
   
    useEffect(() => 
    {
        
        let correctIndex;
        let answers=[];

        correctIndex=getRandomInt(4);
        answers=[];
        answers[correctIndex]=p.correct_answer ; // DEBUG ONLY CHEAT LINE +"--- Cheat --- this is  the correct answer";
        let j=0;
        for (let i=0;i<4;++i)
        {
            if (i!==correctIndex) 
            {
                answers[i]=p.incorrect_answers[j];
                ++j
        }
        
    }
    SetAnswerState(answers);
    SetAnswerIndex(correctIndex);
      },[p.correct_answer,p.incorrect_answers]);

  
    function answer(e)
    {
        if (showAnswer) 
        {
            return;
        }
        if ((Number(e-1))===AnswerIndex)
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
    const AnswerComponent=<div><Answer currentAnswerText={p.correct_answer} currentAnswerIndex={AnswerIndex}  res={res} /> </div>
    const ContinueButton= <div> <a href="#/game"> <Button variant="success" onClick={props.callback} >Conitune Playing!</Button>  </a></div> 
    const AnswerRequest = <p className="ans1"> {props.players[turn].name} (Player {Number(turn+1)}) answer the question</p>
    const QuestinoShower = <div className="question">
    <p className="ques-txt">   <span dangerouslySetInnerHTML={{__html:p.question}}></span>   </p>
    
       Answers:  
       <p>
           <Button className="my-btn" variant="primary" value="1" onClick={() => answer(1)}>1.
           <span dangerouslySetInnerHTML={{__html:answersState[0]}}></span>  
           </Button> 
           
       </p>
       <p>
           <Button className="my-btn" variant="primary" value="2" onClick={() => answer(2)}>2.
           <span dangerouslySetInnerHTML={{__html:answersState[1]}}></span> 
           </Button>
          
       </p> 
       <p>
           <Button  className="my-btn" variant="primary" value="3" onClick={() => answer(3)}>3.
           <span dangerouslySetInnerHTML={{__html:answersState[2]}}></span> 
           </Button>
          
       </p>
       <p>
           <Button className="my-btn" variant="primary" value="4" onClick={() => answer(4)}>4.
           <span dangerouslySetInnerHTML={{__html:answersState[3]}}></span> 
           </Button>
          
       </p> </div>

  return (<div> 
        {!showAnswer ?  AnswerRequest: ""}
        {!showAnswer ?  QuestinoShower: ""}
        {showAnswer ?  AnswerComponent :""} 
        {showAnswer ?  ContinueButton :"" }
    </div>)
}
export default QuestionShow;