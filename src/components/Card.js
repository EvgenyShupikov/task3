import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonGroupTimeInterval from './ButtonGroupTimeInterval';
import { TIME_INTERVAL, BOND_DATA_TYPE } from '../store/bonds/types';
import DropDownBondDataType from './DropDownBondDataType';
import Header from './Header';
import Chart from './Chart';
import { connect } from 'react-redux';
import { getBondData } from '../store/bonds/selectors';
import { updateBondData } from '../store/bonds/actions';


const propTypes = {
  isin: PropTypes.string,
};


const defaultProps = {
  isin: '',
};


function Card({ isin, bondData, reloadBondData }) {

  const [chartInterval, setChartInterval] = useState(TIME_INTERVAL.Month);
  const [chartDataType, setChartDataType] = useState(BOND_DATA_TYPE.Price);

  useEffect(() => {
    if (isin) {
      reloadBondData(isin, chartInterval);
    }
  }, [isin, chartInterval, chartDataType, reloadBondData]);

  return (
    <div>

      {/* header */}
      <Header isin={isin}
        // TODO следующие props должны приходить из API
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


Card.propTypes = propTypes;
Card.defaultProps = defaultProps;


const mapStateToProps = (state) => {
  return {
    bondData: getBondData(state)
  }
}


const mapDispatchToProps = {
  reloadBondData: (isin, interval) => updateBondData(isin, interval)
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);