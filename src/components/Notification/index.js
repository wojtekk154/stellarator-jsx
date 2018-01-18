import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Notification({ type, children }) {
    return(
        <div className={`notification-${type}`}>
            {children}
        </div>
    );
}

Notification.PropTypes = {
    type: PropTypes.string,
    children: PropTypes.string
};

Notification.defaultProps = {
    type: 'info'
};

export default Notification;
