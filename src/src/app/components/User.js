import React from 'react';

const User = (props) => {
    return (
        <div>
            {props.user.map((user, i) => {
                return <div key={i} onClick={() => { props.selectedUser(user) }}>{user.first_name}</div>
            })}
        </div>
    )
}

export default User;