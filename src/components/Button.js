import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    color: PropTypes.string,
    outline: PropTypes.bool,
    onClick: PropTypes.func
};


const defaultProps = {
    color: 'secondary',
    outline: true,
    onClick: undefined
};


const Button = ({color, outline, onClick, children}) => {
    
    const outlineSuffix = outline ? '-outline' : '';

    return (
        <button type="button" 
            className={`btn btn${outlineSuffix}-${color}`}
            onClick={onClick}>
            {children}
        </button>
    );
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;


export default Button;