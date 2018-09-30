
import React from 'react';
import PropTypes from 'prop-types';

import { ChartCanvas, Chart } from 'react-stockcharts';
import {
    CandlestickSeries,
    AreaSeries,
    LineSeries
} from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';

import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { last } from 'react-stockcharts/lib/utils';

class CandleStickStockScaleChart extends React.PureComponent {
    render() {
        const { type, data: initialData, width, ratio, currentSymbol, seriesType } = this.props;

        const xScaleProvider = discontinuousTimeScaleProvider
            .inputDateAccessor(d => d.date);
        const {
            data,
            xScale,
            xAccessor,
            displayXAccessor,
        } = xScaleProvider(initialData);
        const xExtents = [
            xAccessor(last(data)),
            xAccessor(data[data.length - 100])
        ];
        let chartSeriesType;
        switch (seriesType) {
            case 'candlestick':
                chartSeriesType = <CandlestickSeries />
                break;
            case 'line':
                chartSeriesType = <LineSeries strokeWidth='2' yAccessor={d => d.close} />
                break;
            case 'area':
                chartSeriesType = <AreaSeries yAccessor={d => d.close} />
                break;
            default:
            chartSeriesType = <CandlestickSeries />
                break;
        }

        return (
            <ChartCanvas height={400}
                ratio={ratio}
                width={width}
                margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
                type={type}
                seriesName={currentSymbol}
                data={data}
                xScale={xScale}
                xAccessor={xAccessor}
                displayXAccessor={displayXAccessor}
                xExtents={xExtents}
            >

                <Chart id={1} yExtents={d => [d.high, d.low]}>
                    <XAxis axisAt='bottom' orient='bottom' ticks={6} />
                    <YAxis axisAt='left' orient='left' ticks={5} />


                    {chartSeriesType}
                </Chart>
            </ChartCanvas>
        );
    }
}

CandleStickStockScaleChart.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['svg', 'hybrid']).isRequired,
};

CandleStickStockScaleChart.defaultProps = {
    type: 'svg',
};
CandleStickStockScaleChart = fitWidth(CandleStickStockScaleChart);

export default CandleStickStockScaleChart;

