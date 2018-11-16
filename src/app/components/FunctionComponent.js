import React from 'react';

export default function ES5Func(props) {
    return (
        <div className="App">
            <h1>Welcome {props.name}</h1>
            <h2>This is Es5 Function based component</h2>
        </div>
    );
}

export const ES6Func = (props) => {
    return (
        <div className="App">
            <h1>Welcome {props.name}</h1>
            <h2>This is ES6 Function based component</h2>
        </div>
    )
}

