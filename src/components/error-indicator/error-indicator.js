import React from "react";

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="error">Error!</span>
            <span>We have a problem now</span>
            <span>(but we try to fix it)</span>
        </div>
    );
};

export default ErrorIndicator;