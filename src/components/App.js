import React, { PureComponent } from 'react'
import Chart from './Chart'; // изменили импорт
import SymbolList from './SymbolList'; // изменили импорт
import {getChartData, getSymbols} from '../utils';

class App extends PureComponent {
    state = {
        currentSymbol: 'MSFT',
        symbols: [],
        chartData: null,
        isSymbolsLoading: true,
        isChartLoading: true
    };
    async componentDidMount() {
        const symbols = await getSymbols();
        const chartData = await getChartData(this.state.currentSymbol);
        this.setState({
            symbols:  symbols,
            isSymbolsLoading: false,

            chartData: chartData,
            isChartLoading: false
        });

    }
    render() {
        const {currentSymbol, symbols, chartData, isSymbolsLoading, isChartLoading } = this.state;
        console.log(chartData);
        return (
            <div className="app">
                <SymbolList symbols={symbols} onSelectSymbol={this.handleSelectSymbol.bind(this)} />
                {chartData ? <Chart type='hybrid' data={chartData} /> : ''}

            </div>
        )
    }

    handleSelectSymbol = async symbolCode => {
        const chartData = await getChartData(this.state.currentSymbol);
        this.setState({
            chartData: chartData,
            currentSymbol: symbolCode
        });
    };
}

export default App