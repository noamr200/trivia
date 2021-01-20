import React, { useEffect } from 'react';
import "./Answer.css";
function Answer(props)
{
    let text=props.currentAnswerText;
    let index=props.currentAnswerIndex;
    let right;
   
    if (props.res.includes("right"))
         right=true;
    else 
         right=false;
    
    const answer= <span dangerouslySetInnerHTML={{__html:text}}></span> 

    useEffect(() => {
    
    var audio;
    if (props.res.includes("right")) 
    {
        audio = new Audio("/mp3/right.mp3");
        audio.play();
        
    }
    else 
    {
        audio = new Audio("/mp3/wrong.mp3");
        audio.play();
        
        
    }
    },[props.res]);
    const Right =<p className="a_res right" >{props.res}</p>
    const Wrong =<p className="a_res wrong" >{props.res}</p>
    
    return (<div className="answering"> 
                {right?Right:Wrong}
                <p className="correct-answer">Correct answer:{Number(index+1)}.{answer}</p>
          </div>);
}
export default Answer;