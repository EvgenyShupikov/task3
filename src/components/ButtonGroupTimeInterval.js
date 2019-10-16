import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from './ButtonGroup';
import { TIME_INTERVAL } from '../store/bonds/types';


const propTypes = {
    selectedValue: PropTypes.string,
    onClickButton: PropTypes.func
};


const ButtonGroupTimeInterval = (props) => {

    const buttons = Object.entries(TIME_INTERVAL)
        .map(([enumName, enumValue]) => {
            return {
                value: enumValue,
                text: enumName
            }
        });

    return (
        <ButtonGroup {...props} buttons={buttons} />
    );
}


ButtonGroupTimeInterval.propTypes = propTypes;


export default ButtonGroupTimeInterval;