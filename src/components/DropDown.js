import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropDownItem from './DropDownItem';


const buttonType = PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes
});


const propTypes = {
    items: PropTypes.arrayOf(buttonType),
    selectedValue: PropTypes.string,
    onClickItem: PropTypes.func,
    menuAlign: PropTypes.oneOf(['left', 'right'])
};


const defaultProps = {
    items: [],
    menuAlign: 'left'
};


const DropDown = ({ items, selectedValue, menuAlign, onClickItem }) => {

    const [showMenu, setShowMenu] = useState(false);

    const itemsElements = items.map(btn =>
        <DropDownItem
            key={btn.value}
            active={btn.value === selectedValue}
            onClick={() => { setShowMenu(false); onClickItem && onClickItem(btn.value); }}>
            {btn.text}
        </DropDownItem>
    );

    const showMenuClassName = showMenu ? 'show' : '';

    const selectedItem = items.find(item => item.value === selectedValue);
    const selectedText = selectedItem ? selectedItem.text : 'select value';

    return (
        <div className="dropdown">
            <button type="button"
                className="btn btn-sm btn-dark dropdown-toggle"
                onClick={() => setShowMenu(!showMenu)}>
                {selectedText}
            </button>

            <div className={`dropdown-menu dropdown-menu-${menuAlign} ${showMenuClassName}`}>
                {itemsElements}
            </div>
        </div>
    );
}


DropDown.propTypes = propTypes;
DropDown.defaultProps = defaultProps;


export default DropDown;