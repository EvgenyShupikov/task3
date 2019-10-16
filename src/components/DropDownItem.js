import React, { useState } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func
};


const defaultProps = {
    active: false,
    onClick: undefined
};


const DropDownItem = ({ active, onClick, children }) => {

    const [hover, setHover] = useState(false);

    const activeClassName = active ? 'active' : '';
    const hoverClassname = hover ? 'bg-light' : '';
    const className = `dropdown-item ${hoverClassname} ${activeClassName}`;

    return (
        <a className={className} href="#" 
            onClick={onClick} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}>
            {children}
        </a>
    );
}


DropDownItem.propTypes = propTypes;
DropDownItem.defaultProps = defaultProps;


export default DropDownItem;