function Answer(props)
{
    let text=props.currentAnswerText;
    let index=props.currentAnswerIndex;
    console.log (props.res);
    return (<div>Answer Div: <p>{props.res}</p>
        <p>Correct answer:{Number(index+1)}.{text}</p>
    </div>);
}
export default Answer;