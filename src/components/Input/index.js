import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Input(props) {
    return (
        <div>
                <label>{props.label}</label>
                <input 
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    size={props.size}
                    error={props.error}
                    onChange={props.onInputChange}
                />
        </div>
    );

}

Input.PropTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    error: PropTypes.string,
    onInputChange: PropTypes.func
};

Input.defaultProps = {
    type: 'text',
    size: 'medium'
};

export default Input;
