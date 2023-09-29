import React from 'react';

const Logout = () => {
    // Remove the token from the localStorage
    localStorage.removeItem("token");
    // Remove lastPage from the localStorage
    localStorage.removeItem("lastPage");
    // Redirect the user to the home page
    window.location.href = "/"
    return (
        <div>

        </div>
    );
};

export default Logout;