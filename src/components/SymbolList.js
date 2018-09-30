import React from 'react';

class SymbolList extends React.PureComponent {
    render() {
        const {symbols, currentSymbol} = this.props;
        let xxx = 'list-group-item list-group-item-action';
        
        const symbolsElements = symbols.map(item =>
            <button  key={item.code} type="button" className={currentSymbol === item.code ? xxx + ' active' : xxx} value={item.code} onClick={this.handleChange} >
            {item.name} ({item.code})
          </button>

        );
        return ( 
            <div className="list-group">
                {symbolsElements}
            </div>)
    }

    handleChange = (e) => {    
        if (e.currentTarget.value != this.props.currentSymbol ) {
            this.props.onSelectSymbol(e.currentTarget.value)
        }
        
    }
}

export default SymbolList;