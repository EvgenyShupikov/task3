import React from 'react';
import PropTypes from 'prop-types';
import DropDown from './DropDown';
import { BOND_DATA_TYPE } from '../store/bonds/types';


const propTypes = {
    selectedValue: PropTypes.string,
    onClickItem: PropTypes.func
};


const DropDownBondDataType = (props) => {

    const items = Object.entries(BOND_DATA_TYPE)
        .map(([enumName, enumValue]) => {
            return {
                value: enumValue,
                text: enumName
            }
        });

    return (
        <DropDown {...props} items={items} />
    );
}


DropDownBondDataType.propTypes = propTypes;


export default DropDownBondDataType;