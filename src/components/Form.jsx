import React from 'react';

function Form() {
    return (
        <div>
            <div className="email">
                <input type="email" placeholder="Email Address"/>
                <img className="error-icon" src="images/icon-error.svg" />
                <button type="submit" className="submit-email"><img src="images/icon-arrow.svg" /></button>
            </div>
            <p className="error-msg">Please provide a valid email</p>
        </div>
    );
}

export default Form;