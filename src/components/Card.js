import React, { useState, useEffect } from 'react';
import ButtonGroupTimeInterval from './ButtonGroupTimeInterval';
import { TIME_INTERVAL, BOND_DATA_TYPE } from '../store/bonds/types';
import DropDownBondDataType from './DropDownBondDataType';
import Header from './Header';
import Chart from './Chart';
import { connect } from 'react-redux';
import { getBondData } from '../store/bonds/selectors';
import { updateBondData } from '../store/bonds/actions';


function Card({ bondData, reloadBondData }) {

  const [chartInterval, setChartInterval] = useState(TIME_INTERVAL.Month);
  const [chartDataType, setChartDataType] = useState(BOND_DATA_TYPE.Price);

  const isin = 'fake';

  useEffect(() => {    
    reloadBondData(isin, chartInterval);
  }, [chartInterval, chartDataType, reloadBondData]);
  
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
      <ButtonGroupTimeInterval
        selectedValue={chartInterval}
        onClickButton={interval => setChartInterval(interval)} />

      <div className="position-relative">

        {/* chart */}
        <Chart data={bondData.data} timeInterval={chartInterval} />

        {/* data type */}
        <div className="position-absolute fixed-bottom">
          <div className="float-right mr-4 mb-5">
            <DropDownBondDataType menuAlign="right"
              selectedValue={chartDataType}
              onClickItem={dataType => setChartDataType(dataType)} />
          </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    bondData: getBondData(state)
  }
}


const mapDispatchToProps = {
  reloadBondData: (isin, interval) => updateBondData(isin, interval)
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);