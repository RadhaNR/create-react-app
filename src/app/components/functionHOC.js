import React from 'react';

const withUser = (WrappedComponent) => {
    const user = localStorage.getItem("user");
    return props => <WrappedComponent user={user} {...props} />;
};

export default withUser;