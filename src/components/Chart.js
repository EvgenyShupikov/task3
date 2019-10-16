import React from 'react';
import PropTypes from 'prop-types';
import { TIME_INTERVAL, BOND_DATA_TYPE } from '../store/bonds/types';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import { padLeft } from '../utils/format';


const chartDataItem = PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    spread: PropTypes.number,
    yield: PropTypes.number,
    price: PropTypes.number,
});


const propTypes = {
    data: PropTypes.arrayOf(chartDataItem),
    dataType: PropTypes.oneOf(Object.values(BOND_DATA_TYPE)),
    timeInterval: PropTypes.oneOf(Object.values(TIME_INTERVAL))
};


const defaultProps = {
    data: [],
    dataType: BOND_DATA_TYPE.Price,
    timeInterval: TIME_INTERVAL.Month
}


function Chart({ data, dataType, timeInterval }) {

    return (
        <div>
            <VictoryChart height={400} width={1200} 
                padding={{ bottom: 30, left: 50, right: 30, top: 30 }}>

                {/* line */}
                <VictoryLine
                    style={{ data: { stroke: "#AAA" } }}
                    data={data}
                    x={datum => getDateLabel(datum, timeInterval)}
                    y={dataType} />

                {/* points */}
                <VictoryScatter
                    style={{ data: { fill: "#444" } }}
                    data={data}
                    size={5}
                    labels={({ datum }) => getPointLabel(datum, dataType)}
                    x={datum => getDateLabel(datum, timeInterval)}
                    y={dataType} />

            </VictoryChart>
        </div>
    );
}


const getPointLabel = (datum, dataType) => datum[dataType].toFixed(2);


const getDateLabel = (datum, timeInterval) => {
    switch (timeInterval) {

        case TIME_INTERVAL.Max:
        case TIME_INTERVAL.Year:
            return datum.date.getFullYear().toString();

        case TIME_INTERVAL.Month:
        case TIME_INTERVAL.Quarter:
            return padLeft(datum.date.getMonth() + 1, '0', 2)
                + '.' + padLeft(datum.date.getFullYear() % 100, '0', 2);

        case TIME_INTERVAL.Week:
            return padLeft(datum.date.getDate(), '0', 2)
                + '.' + padLeft(datum.date.getMonth() + 1, '0', 2);

        default:
            return datum.date.toISOString();
    }
}


Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;


export default Chart;