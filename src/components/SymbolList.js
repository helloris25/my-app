import React from 'react';

class SymbolList extends React.PureComponent {
    render() {
        const {symbols, currentSymbol} = this.props;
        console.log(symbols);
        const symbolsElements = symbols.map(item =>
            <li className="list-group-item" key={item.code}>
                <label htmlFor="">
                    <input name='symbol' type="radio" value={item.code} onChange={this.handleChange} checked={currentSymbol === item.code} />
                    {item.name} ({item.code})
                </label>
            </li>
        );
        return (
            <ul className="list-group">
                {symbolsElements}
            </ul>
        );
    }

    handleChange = (e) => {
        console.log(this.props)
        this.props.onSelectSymbol(e.currentTarget.value)
    }
}

export default SymbolList;