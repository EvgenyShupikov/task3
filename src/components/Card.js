import React from 'react';
import Button from './Button';


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
      <div class="btn-group btn-group-sm mb-3">
        <Button color="dark">Week</Button>
        <Button color="dark" outline={false}>Month</Button>
        <Button color="dark">Quarter</Button>
        <Button color="dark">Year</Button>
        <Button color="dark">Max</Button>
      </div>

      <div className="position-relative">

        {/* chart */}
        <div className="border border-secondary" style={{ height: '300px' }} />

        {/* data type */}
        <div className="position-absolute fixed-bottom">
          <div className="float-right mr-3 mb-3">
            <div class="dropdown show">
              <button type="button" class="btn btn-sm btn-dark dropdown-toggle">
                Price
              </button>

              <div class="dropdown-menu dropdown-menu-right show">
                <a class="dropdown-item" href="#">Yield</a>
                <a class="dropdown-item" href="#">Spread</a>
                <a class="dropdown-item" href="#">Price</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;