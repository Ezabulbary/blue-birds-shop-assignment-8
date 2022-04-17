import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div className='article'>
            <p>It is kept up to date via Facebook. React employs a declarative paradigm that makes it easy to reason about your application and tries to be both efficient and versatile. It creates basic views for each state of your application, and React will rapidly update and render precisely the necessary component when your data changes.</p>

            <p>Props are used to transfer data from one component to another. The state is a type of local data storage that is unique to the component and cannot be shared with other components.</p>

            <p>useState is a Hook that enables state variables in functional components. You supply the starting state to this function, and it returns a variable with the current state value and another function to update it.</p>
        </div>
    );
};

export default Article;