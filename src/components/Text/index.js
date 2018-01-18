import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Text({ heading, size }) {

	return (
		<div class={size}>
			TextComponent 
		</div>
	);
};

Text.propTypes = {
	heading: PropTypes.bool,
	size: PropTypes.string
};

Text.defaultProps = {
	heading: false,
	size: 'medium'
};

export default Text;