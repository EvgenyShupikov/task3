import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const buttonType = PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes
});


const propTypes = {
    buttons: PropTypes.arrayOf(buttonType),
    selectedValue: PropTypes.string,
    onClickButton: PropTypes.func
};


const defaultProps = {
    buttons: []
};


const ButtonGroup = ({ buttons, selectedValue, onClickButton }) => {

    const buttonsElements = buttons.map(btn =>
        <Button color="dark" 
            key={btn.value}
            outline={btn.value !== selectedValue} 
            onClick={onClickButton ? () => onClickButton(btn.value) : undefined}>
            {btn.text}
        </Button>
    );

    return (
        <div className="btn-group btn-group-sm mb-3">
            {buttonsElements}
        </div>
    );
}


ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;


export default ButtonGroup;