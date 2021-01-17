import React, { useEffect, useState } from 'react';
import "./Answer.css";
function Answer(props)
{
    let text=props.currentAnswerText;
    let index=props.currentAnswerIndex;
    console.log (props.res);
    let right;
    if (props.res.includes("right"))
         right=true;
    else 
         right=false;
    
    const answer= <span dangerouslySetInnerHTML={{__html:text}}></span> 

    useEffect(() => {
    if (props.res.includes("right")) 
    {
        console.log ("Yes");
        var audio = new Audio("/mp3/right.mp3");
        audio.play();
        right=true;
    }
    else 
    {
        console.log ("No");
        var audio = new Audio("/mp3/wrong.mp3");
        audio.play();
        right=false;
        
    }
    },[]);
    const Right =<p className="a_res right" >{props.res}</p>
    const Wrong =<p className="a_res wrong" >{props.res}</p>
    
    return (<div> 
                {right?Right:Wrong}
                <p className="correct-answer">Correct answer:{Number(index+1)}.{answer}</p>
          </div>);
}
export default Answer;