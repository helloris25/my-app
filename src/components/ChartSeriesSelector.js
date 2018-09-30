import React from 'react'

class ChartSeriesSelector extends React.PureComponent {

    render() {

        const { chartSeries, currentChartSeries } = this.props;
        const elements = chartSeries.map(item =>
            <option key={item} value={item} >{item}</option>
        );

        return (
            <select value={currentChartSeries} className='custom-select' onChange={this.handleChange}>
                {elements}
            </select>
        )
    }

    handleChange = (e) => {
        console.log(e.currentTarget.value);
        this.props.onSelectChartSeries(e.currentTarget.value);
    }
}

export default ChartSeriesSelector