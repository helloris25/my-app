import React, { Component } from 'react'
import Chart from './Chart'; // изменили импорт
import SymbolList from './SymbolList'; // изменили импорт
import { getChartData, getSymbols } from '../utils';
import Toolbar from './Toolbar';

class App extends React.PureComponent {
    state = {
        currentSymbol: 'SP500',
        symbols: [],
        chartData: null,
        isSymbolsLoading: true,
        isChartLoading: true
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
        const { currentSymbol, symbols, chartData, isSymbolsLoading, isChartLoading } = this.state;
        console.log(!isChartLoading);

        return (
            <div className='app'>
                <Toolbar />
                <main className='container' role="main">
                    <div className='row'>
                        <div className='col-sm-3'>
                            <SymbolList currentSymbol={currentSymbol} symbols={symbols} onSelectSymbol={this.handleSelectSymbol.bind(this)} />
                        </div>
                        <div className='col-sm-9 chart-container'>
                            {!chartData || isChartLoading ? <div className='spinner'></div> : <Chart type='hybrid' data={chartData} />}
                        </div>

                    </div>
                </main>
            </div>
        )
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