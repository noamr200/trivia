import React from 'react';
import axios from 'axios';

async function getCategories() {
    const response = await axios.get('https://opentdb.com/api_category.php');
    return response.data.trivia_categories;
}
export default { getCategories };