import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import { TIME_INTERVAL } from '../store/bonds/types';
import { getBondData } from '../store/bonds/mocks';


describe('Chart', () => {

  it('renders without crashing', async (done) => {
    const bondData = await getBondData('fake', TIME_INTERVAL.Month);
    expect(bondData).toBeDefined();

    const div = document.createElement('div');
    ReactDOM.render(<Chart data={bondData.data} timeInterval={TIME_INTERVAL.Month} />, div);
    ReactDOM.unmountComponentAtNode(div);

    done();
  });
});
