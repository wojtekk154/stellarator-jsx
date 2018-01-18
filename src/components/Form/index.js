import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './style.css';

function Form({ config }) {
    let formItems = config.map((item,index) => {
        return (
            <Input 
                key={index} 
                label={item.label}
                placeholder={item.placeholder}
                size={item.size}
                name={item.name}
                type={item.type}
                error={item.error}
            />
        );
    })
    return (
        <form>
            {formItems}
        </form>
    );
}

export default Form;