import React from 'react';
import axios from 'axios';
async function QuestionGetter(category,difficulty="medium")
{
    // //https://opentdb.com/api.php?amount=1&category=16&difficulty=medium&type=multiple
    const response = await axios.get('https://opentdb.com/api.php?amount=1&category='+category+'&difficulty='+difficulty+'&type=multiple');
    return response;
}
export default {QuestionGetter};