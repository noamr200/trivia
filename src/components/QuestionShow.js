function QuestionShow(props)
{
    console.log (props.ques);
    let p=props.ques[0];
    
   console.log ("props",p);
    return (<div>  <p>"TODO" </p>
     <p>  Question: {decodeURI(p.question)}  </p>
        Answers:  <p>{p.incorrect_answers[0]} </p>
        <p>{p.correct_answer} <span> <u>Correct </u></span> </p> 
        <p>{p.incorrect_answers[1]} </p>
<p>{p.incorrect_answers[2]} </p>
    </div>)
}
export default QuestionShow;