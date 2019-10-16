import React from 'react';
import ButtonGroupTimeInterval from './ButtonGroupTimeInterval';
import { TIME_INTERVAL, BOND_DATA_TYPE } from '../store/bonds/types';
import DropDownBondDataType from './DropDownBondDataType';


function Card() {
  return (
    <div>

      {/* header */}
      <div className="h1">
        NII CAPITAL 7.625 21
          {' '}
        <span className="small">USD</span>
      </div>
      <div>
        <span className="d-block">US67021BAE92</span>
        <span className="d-block">NII CAPITAL CORP, Telecommunications, NR, till 01.04.2016</span>
      </div>

      <hr />

      {/* buttons */}
      <ButtonGroupTimeInterval selectedValue={TIME_INTERVAL.Month} />

      <div className="position-relative">

        {/* chart */}
        <div className="border border-secondary" style={{ height: '300px' }} />

        {/* data type */}
        <div className="position-absolute fixed-bottom">
          <div className="float-right mr-3 mb-3">
            <DropDownBondDataType menuAlign="right" selectedValue={BOND_DATA_TYPE.Price} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;