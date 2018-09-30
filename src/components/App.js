import React from 'react'
import Chart from './Chart'; // изменили импорт
import SymbolList from './SymbolList'; // изменили импорт
import { getChartData, getSymbols } from '../utils';
import Toolbar from './Toolbar';
import ChartSeriesSelector from './ChartSeriesSelector';

class App extends React.PureComponent {
    state = {
        currentSymbol: 'SP500',
        symbols: [],
        chartData: null,

        isSymbolsLoading: true,
        isChartLoading: true,

        chartSeries: ['line', 'candlestick', 'area'],
        currentChartSeries: 'candlestick'
    };
    async componentDidMount() {
        const symbols = await getSymbols();
        const chartData = await getChartData(this.state.currentSymbol);
        this.setState({
            symbols: symbols,
            isSymbolsLoading: false,

            chartData: chartData,
            isChartLoading: false
        });

    }
    render() {
        const {currentChartSeries, currentSymbol, symbols, chartData, isChartLoading, chartSeries } = this.state;

        return (
            <div className='app'>
                <Toolbar />
                <main className='container' role='main'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <SymbolList currentSymbol={currentSymbol} symbols={symbols} onSelectSymbol={this.handleSelectSymbol.bind(this)} />
                        </div>
                        <div className='col-sm-9'>
                            <div className='col-sm-3 pl-0'>
                                <ChartSeriesSelector onSelectChartSeries={this.onSelectChartSeries.bind(this)} currentChartSeries={currentChartSeries} chartSeries={chartSeries} />
                            </div>
                            <div className='chart-container'>
                                {!chartData || isChartLoading ? <div className='spinner'></div> : <Chart seriesType={currentChartSeries} type='hybrid' data={chartData} currentSymbol={currentSymbol} />}
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        )
    }

    onSelectChartSeries(series) {
        console.log(series);
        this.setState({
            currentChartSeries: series,
        });
    }

    handleSelectSymbol = async symbolCode => {
        this.setState({
            isChartLoading: true,
        });
        const chartData = await getChartData(symbolCode);
        this.setState({
            chartData: chartData,
            currentSymbol: symbolCode,
            isChartLoading: false,
        });

    };
}

export default App