function Answer(props)
{
    let text=props.currentAnswerText;
    let index=props.currentAnswerIndex;
    return (<div>Answer Div: 
        <p>Correct answer:{Number(index+1)}.{text}</p>
    </div>);
}
export default Answer;