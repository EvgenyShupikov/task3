import React from 'react';
import ButtonGroupTimeInterval from './ButtonGroupTimeInterval';
import { TIME_INTERVAL, BOND_DATA_TYPE } from '../store/bonds/types';
import DropDownBondDataType from './DropDownBondDataType';
import Header from './Header';


function Card() {
  return (
    <div>

      {/* header */}
      <Header isin={'US67021BAE92'}
        shortName={'NII CAPITAL'} 
        fillName={'NII CAPITAL CORP, Telecommunications, NR'}
        yieldValue={7.625}
        price={21} 
        currency={'USD'} 
        date={new Date()} />

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