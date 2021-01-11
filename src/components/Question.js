import * as QueryString from "query-string";
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import QuestUtils from "../models/QuestionGetter";
import QuestionShow from "./QuestionShow";
function Question(props)
{
    //https://opentdb.com/api.php?amount=1&category=16&difficulty=medium&type=multiple
    const [ques,SetQues]=useState(null);
    console.log ("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
    const location = useLocation();
    console.log(location.search);
    let r=null;
    let catNum=location.search.substr(5,6);
    console.log ("cat",catNum);
    useEffect(() => {
        r =QuestUtils.QuestionGetter(catNum).then (response=> { 
            console.log (response.data.results);
            SetQues(response.data.results);
        }, );
    },[ques!=null]);
    console.log ("pp",props.callback);
    const cond=<QuestionShow ques={ques}/>;
    return (<div> Question Here: {ques!=null? cond:"loading"} 
    <a href="#/game"> <Button variant="warning" onClick={props.callback} >Switch Turn (dev only)</Button>  </a>
     </div>);
}
export default Question;