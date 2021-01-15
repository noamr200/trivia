function Answer(props)
{
    let text=props.currentAnswerText;
    let index=props.currentAnswerIndex;
    console.log (props.res);
    const answer= <span dangerouslySetInnerHTML={{__html:text}}></span> 
    return (<div>Answer Div: <p>{props.res}</p>
        <p>Correct answer:{Number(index+1)}.{answer}</p>
    </div>);
}
export default Answer;