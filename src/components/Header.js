import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    isin: PropTypes.string,
    shortName: PropTypes.string,
    fillName: PropTypes.string,
    yieldValue: PropTypes.number,
    price: PropTypes.number,
    currency: PropTypes.string,
    date: PropTypes.instanceOf(Date),
};


const defaultProps = {
  isin: 'unknown',
  shortName: 'unknown',
  fillName: 'unknown',
  yieldValue: 0,
  price: 0,
  currency: 'USD',
  date: new Date()
};


function Header({isin, shortName, fillName, yieldValue, price, currency, date}) {
  return (
    <div>
      <div className="h1">
        {shortName} {yieldValue.toFixed(3)} {price.toFixed(2)}
        {' '}
        <span className="small">{currency}</span>
      </div>
      <div>
        <span className="d-block">{isin}</span>
        <span className="d-block">{fillName}, till {date.toLocaleDateString()}</span>
      </div>
    </div>
  );
}


Header.propTypes = propTypes;
Header.defaultProps = defaultProps;


export default Header;