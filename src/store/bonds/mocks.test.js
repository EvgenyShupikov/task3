import { getNextDataItem, getBondData } from './mocks';
import { TIME_INTERVAL } from './types';


describe('Bond mocks', () => {

  test('getNextDataItem', () =>{

    const firstItem = getNextDataItem();
    expect(firstItem).toBeDefined();
    expect(firstItem.date).toBeInstanceOf(Date);
    expect(firstItem.yield).toBeGreaterThan(0);
    expect(firstItem.spread).toBeGreaterThan(0);
    expect(firstItem.price).toBeGreaterThan(0);

    const secondItem = getNextDataItem(firstItem, TIME_INTERVAL.Week);
    expect(secondItem).toBeDefined();
    expect(secondItem.date).toBeInstanceOf(Date);
    expect(secondItem.date.valueOf()).toBeGreaterThan(firstItem.date.valueOf());
    expect(secondItem.yield).toBeGreaterThan(0);
    expect(secondItem.spread).toBeGreaterThan(0);
    expect(secondItem.price).toBeGreaterThan(0);
  });


  test('getBondData', async (done) => {
    const expectedIsin = 'testISIN';

    const bondData = await getBondData(expectedIsin, TIME_INTERVAL.Month);
    
    expect(bondData).toBeDefined();
    expect(bondData.isin).toBe(expectedIsin);
    expect(bondData.dateStart).toBeInstanceOf(Date);
    expect(bondData.dateEnd).toBeInstanceOf(Date);
    expect(bondData.dateEnd.valueOf()).toBeGreaterThan(bondData.dateStart.valueOf());
    expect(bondData.data).toBeDefined();
    expect(bondData.data.length).toBeGreaterThan(100);

    done();
  })
});