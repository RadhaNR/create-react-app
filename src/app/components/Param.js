import React from 'react';

const Param = ({ match }) => {
    console.log(match)
    return (
        <div className="param">{match.params.id}</div>
    )
}

export default Param;